import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'meals'

export function useMeals() {
	const meals = ref([])

	const loadFromStorage = () => {
		const savedMeals = localStorage.getItem(STORAGE_KEY)
		if (savedMeals) {
			meals.value = JSON.parse(savedMeals)
		}
	}

	const saveToStorage = () => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(meals.value))
	}

	function addMeal(meal) {
		meals.value.push({
			...meal,
			id: Date.now(),
			prepared: false
		})
	}

	function removeMeal(id) {
		meals.value = meals.value.filter(
			record => record.id !== id
		)
	}

	function togglePrepared(id) {
		const meal = meals.value.find(record => record.id === id)
		if (meal) {
			meal.prepared = !meal.prepared
		}
	}

	onMounted(() => {
		loadFromStorage()
	})

	watch(meals, () => {
		saveToStorage()
	}, { deep: true })

	return {
		meals,
		addMeal,
		removeMeal,
		togglePrepared
	}
}
