<script lang="ts">
	import { onMount } from 'svelte'
	import { getCommandInfo, type Command } from '../../js/commands'
	import CommandInfo from './CommandInfo.svelte'

	export let selected: string
	let command: Command

	const mappings: { [key in keyof Partial<Command>]: string } = {
		description: 'Description',
		alias: 'Aliases',
		cooldown: 'Cooldown',
		counter: 'Count',
		deleted: 'Disabled',
		optionalParams: 'Optional Parameters',
		requiredParams: 'Required Parameters',
		permissions: 'Minimal Permissions'
	}

  const onChange = async(selectedCommand: string) => {
    command = await getCommandInfo(selectedCommand)
  }

  $: onChange(selected)
</script>

{#if command}
	<div class="w-full h-full overflow-y-scroll p-12">
		<h2 class="text-5xl mb-10">{command.name}</h2>
    <div class="grid grid-cols-2 gap-6">
		{#each Object.entries(mappings) as [key, value]}
			<CommandInfo heading={value} info={command[key] ?? 'none'} />
		{/each}
    </div>
	</div>
{/if}
