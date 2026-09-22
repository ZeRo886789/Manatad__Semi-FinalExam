<script setup>
import { useFormatDate } from '../composables/useFormatDate'

const props = defineProps({
	meal: {
		type: Object,
		required: true
	}
})

const emit = defineEmits(['deleteMeal', 'togglePrepared'])

const { formatDate } = useFormatDate()

function handleDelete() {
	emit('deleteMeal', props.meal.id)
}

function handleToggle() {
	emit('togglePrepared', props.meal.id)
}
</script>

<template>
	<div class="list-group-item d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<div
				class="fw-bold"
				:class="{ 'text-decoration-line-through': meal.prepared }"
			>
				{{ meal.name }}
			</div>
			<small class="text-muted d-block">{{ meal.description }}</small>
			<small class="badge bg-info text-dark mt-1 d-inline-block">{{ meal.type }}</small>
			<small class="text-muted d-block mt-1">
				Planned: {{ formatDate(meal.date) }}
			</small>
			<span
				v-if="meal.prepared"
				class="badge bg-success mt-1 d-inline-block"
				>Prepared</span
			>
		</div>

		<div class="btn-group btn-group-sm" role="group">
			<button
				type="button"
				class="btn btn-outline-success"
				@click="handleToggle"
			>
				{{ meal.prepared ? 'Undo' : 'Mark as Prepared' }}
			</button>

			<button
				type="button"
				class="btn btn-outline-danger"
				@click="handleDelete"
			>
				Delete
			</button>
		</div>
	</div>
</template>
