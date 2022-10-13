<script lang="ts">
	import { onMount } from 'svelte'
	import { getCommandInfo, type Command } from '../../js/commands'
	import CommandInfo from './CommandInfo.svelte'

	export let selected: string
	let command: Command

	const mappings: { [key in keyof Partial<Command>]: string } = {
		alias: 'Aliases',
		cooldown: 'Cooldown',
		counter: 'Count',
		deleted: 'Has been deleted',
		description: 'Description',
		optionalParams: 'Optional Parameters',
		requiredParams: 'Required Parameters',
		permissions: 'Minimal Permissions'
	}

	onMount(async () => {
		command = await getCommandInfo(selected)
	})
</script>

{#if command}
	<div class="w-full h-full overflow-y-scroll p-12">
		<h2 class="text-5xl">{command.name}</h2>
		{#each Object.entries(mappings) as [key, value]}
			<CommandInfo heading={value} info={key} />
		{/each}
	</div>
{/if}
