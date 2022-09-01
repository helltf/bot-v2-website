<script lang="ts">
	import { Link } from 'svelte-routing'

	export let commands: string[]
	export let selected: string
</script>

<aside
	class="flex flex-col overflow-y-scroll overflow-x-hidden h-full w-full gap-1"
>
	<h3 class="pt-4 text-neutral-300 text-2xl pb-2">Commands</h3>

	{#each commands as command}
		<Link
			class="{command === selected
				? 'text-red-600'
				: 'text-gray-300 hover:text-gray-100'} text-xl"
			to="commands/{command}">{command}</Link
		>
	{/each}
</aside>
