<script lang="ts">
  export let commands: string[]
</script>

<div class="flex flex-col overflow-y-scroll ">
  <section class="text-neutral-300 text-xl pb-2">Commands</section>

  {#each commands as command}
    <a href="">{command}</a>
  {/each}
</div>
