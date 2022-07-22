<script lang="ts">
	import { onMount } from 'svelte'
	import { navigate } from 'svelte-routing'

	const getToken = (): string | null =>
		new URLSearchParams(document.location.search).get('code')

	onMount(() => {
		const token = getToken()

		navigate('home')
	})
</script>
