<script lang="ts">
	import { getCommandNames } from '../../../lib/js/commands'

	import { onMount } from 'svelte'
	import CommandSidebar from './CommandSidebar.svelte'
	export let command: string
	let commands: string[] = []

	onMount(async () => {
		commands = await getNames()
	})

	const getNames = async (): Promise<string[]> => {
		return await getCommandNames()
	}
</script>

<div class="flex flex-row mx-40 gap-5 h-full">
	<div class="w-96 h-full">
		{#if commands.length}
			<CommandSidebar selected={command} {commands} />
		{/if}
	</div>
	<div class="w-full h-full overflow-y-scroll" />
</div>
