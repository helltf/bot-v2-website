<script lang="ts">
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
		optional_params: 'Optional Parameters',
		required_params: 'Required Parameters',
		permissions: 'Minimal Permissions'
	}

  const onChange = async(selectedCommand: string) => {
    command = await getCommandInfo(selectedCommand)
  }

  const parse = (data: string | string[] | number):string => {
    if(typeof data === 'string' ) return data as string
    if(typeof data === 'object') {
      return data.length > 0 ? data.join(", "): 'none' }
    return `${data}`
  }

  $: onChange(selected)
</script>

{#if command}
	<div class="w-full h-full overflow-y-scroll p-12">
		<h2 class="text-5xl mb-10">{command.name}</h2>
    <div class="grid grid-cols-2 gap-6">
		{#each Object.entries(mappings) as [key, value]}
			<CommandInfo heading={value} info={parse(command[key])} />
		{/each}
    </div>
	</div>
{/if}
