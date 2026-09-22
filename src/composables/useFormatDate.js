export function useFormatDate() {
	const formatDate = (dateString) => {
		if (!dateString) return 'Date not set'
		const options = { year: 'numeric', month: 'long', day: 'numeric' }
		return new Date(dateString).toLocaleDateString(undefined, options)
	}

	return { formatDate }
}
