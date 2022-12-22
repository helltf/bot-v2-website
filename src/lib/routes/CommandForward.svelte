<script lang="ts">
	import { onMount } from 'svelte'
	import { navigate } from 'svelte-routing'

	onMount(() => {
		navigate('commands/accept')
	})
</script>
