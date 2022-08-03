<script lang="ts">
  import { fetchCommands } from '../../../lib/js/commands'
  import type { Command } from '../../../lib/js/commands'

  import { onMount } from 'svelte'
  import CommandSidebar from './CommandSidebar.svelte'
  export let command: string
  let commands: Command[] = []

  onMount(async () => {
    commands = await fetchCommands(import.meta.env.VITE_BACKEND_URL + 'commands')
  })

  const getNames = (): string[] => {
    return commands.map((command) => command.name)
  }
</script>

<div class="flex flex-row ml-40 mr-40 gap-5">
  <div class="w-[200px]">
    {#if commands.length}
      <CommandSidebar selected={command} commands={getNames()} />
    {/if}
  </div>
  <div class="w-[100%] h-[100%] bg-white" />
</div>
