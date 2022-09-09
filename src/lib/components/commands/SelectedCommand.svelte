<script lang="ts">
	import { onMount } from 'svelte'

	export let selected: string
	let command: Command
	onMount(async () => {
		getCommandInfo()
	})
</script>

<div class="w-full h-full overflow-y-scroll" />
