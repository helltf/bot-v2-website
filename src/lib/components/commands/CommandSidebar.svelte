<script lang="ts">
  import { Link, Route } from 'svelte-routing'

  export let commands: string[]
  export let selected: string
</script>

<aside class="flex flex-col overflow-y-scroll overflow-x-hidden h-[100vh]">
  <section class="text-neutral-300 text-xl pb-2">Commands</section>

  {#each commands as command}
    <Link to="commands/{command}">{command}</Link>
  {/each}
</aside>
