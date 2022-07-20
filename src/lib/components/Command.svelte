<script lang="ts">
  import { fetchCommands } from '../../lib/js/commands';

  import { onMount } from 'svelte';

  let commands = [];

  onMount(async () => {
    commands = await fetchCommands(import.meta.env.VITE_BACKEND_URL);
  });
</script>
