<script lang="ts">
	import { Link } from 'svelte-routing'

	export let commands: string[]
	export let selected: string

	let selectedCommands = commands
	let input = ''

	const filterCommands = () => {
		selectedCommands = commands.filter((c) => c.includes(input))
	}
</script>

<aside class="flex flex-col h-full w-full p-1 gap-3 overflow-x-hidden ">
	<div class="sticky top-0 bg-neutral-800">
		<h3 class="pt-4 text-neutral-300 text-2xl pb-2">Commands</h3>

		<input
			class="p-3 mr-2 rounded-md border-2 shadow-sm bg-neutral-700 focus:outline-none"
			type="text"
			placeholder="Search..."
			bind:value={input}
			on:input={filterCommands}
		/>
	</div>
	<div class="flex flex-col overflow-y-auto gap-1">
		{#each selectedCommands as command}
			<Link
				class="{command === selected
					? 'text-red-600'
					: 'text-gray-300 hover:text-gray-100'} text-xl"
				to="commands/{command}">{command}</Link
			>
		{/each}
	</div>
</aside>
