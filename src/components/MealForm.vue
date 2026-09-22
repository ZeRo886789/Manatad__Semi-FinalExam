<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submitMeal'])

const meal = reactive({
	name: '',
	description: '',
	type: '',
	date: ''
})

function submitMeal() {
	if (!meal.name || !meal.description || !meal.type || !meal.date) {
		alert('Please fill in all required fields.')
		return
	}

	emit('submitMeal', { ...meal })

	meal.name = ''
	meal.description = ''
	meal.type = ''
	meal.date = ''
}
</script>

<template>
	<div class="card shadow-sm border-0 mb-4">
		<div class="card-body p-4">
			<h3 class="fw-bold mb-4">Add a Meal Plan</h3>

			<form @submit.prevent="submitMeal">
				<div class="mb-3">
					<label class="form-label fw-semibold">Meal Name</label>
					<input
						type="text"
						class="form-control"
						v-model="meal.name"
						placeholder="Enter meal name"
					/>
				</div>

				<div class="mb-3">
					<label class="form-label fw-semibold">Description</label>
					<textarea
						class="form-control"
						rows="3"
						v-model="meal.description"
						placeholder="Enter a short description"
					></textarea>
				</div>

				<div class="mb-3">
					<label class="form-label fw-semibold">Meal Type</label>
					<select class="form-select" v-model="meal.type">
						<option value="" disabled>Select meal type</option>
						<option>Breakfast</option>
						<option>Lunch</option>
						<option>Dinner</option>
						<option>Snack</option>
					</select>
				</div>

				<div class="mb-3">
					<label class="form-label fw-semibold">Meal Date</label>
					<input type="date" class="form-control" v-model="meal.date" />
				</div>

				<div class="d-grid">
					<button type="submit" class="btn btn-primary">Add Meal</button>
				</div>
			</form>
		</div>
	</div>
</template>
