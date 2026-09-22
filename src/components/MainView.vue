<script setup>
import { ref } from 'vue'
import MealForm from './MealForm.vue'
import MealList from './MealList.vue'
import { useMeals } from '../composables/useMeals'

const { meals, addMeal, removeMeal, togglePrepared } = useMeals()

function handleAddMeal(meal) {
	addMeal(meal)
}

function handleDeleteMeal(id) {
	removeMeal(id)
}

function handleTogglePrepared(id) {
	togglePrepared(id)
}
</script>

<template>
	<div class="container py-4">
		<div class="text-center mb-4">
			<h1 class="fw-bold">Weekly Meal Planner</h1>
			<p class="text-secondary">Plan your meals same way you plan your future</p>
		</div>

		<MealForm @submit-meal="handleAddMeal" />

		<hr class="my-4" />

		<MealList
			:meals="meals"
			@delete-meal="handleDeleteMeal"
			@toggle-prepared="handleTogglePrepared"
		/>
	</div>
</template>
