<script setup>
import MealItem from './MealItem.vue'

const props = defineProps({
	meals: {
		type: Array,
		required: true
	}
})

const emit = defineEmits(['deleteMeal', 'togglePrepared'])

function handleDelete(id) {
	emit('deleteMeal', id)
}

function handleToggle(id) {
	emit('togglePrepared', id)
}
</script>

<template>
	<div
		v-if="meals.length === 0"
		class="text-center py-5"
	>
		<p class="text-secondary">
			No meals planned yet. Add a meal to get started!
		</p>
	</div>

	<div v-else>
		<div class="list-group">
			<MealItem
				v-for="meal in meals"
				:key="meal.id"
				:meal="meal"
				@delete-meal="handleDelete"
				@toggle-prepared="handleToggle"
			/>
		</div>
	</div>
</template>
