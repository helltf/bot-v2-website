<script lang="ts">
  import { Link, Route } from 'svelte-routing'

  export let commands: string[]
  export let selected: string
</script>

<aside class="flex flex-col overflow-y-scroll overflow-x-hidden h-[100vh] w-[100%]">
  <h3 class="pt-4  text-neutral-300 text-2xl pb-2">Commands</h3>

  {#each commands as command}
    <Link class={command === selected ? 'text-black' : ''} to="commands/{command}">{command}</Link>
  {/each}
</aside>
