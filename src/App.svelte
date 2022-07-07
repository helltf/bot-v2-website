<script lang="ts">
  import TailwindCss from './TailwindCSS.svelte';
import Nav from "./lib/Nav.svelte";

</script>

<main>
<TailwindCss />
<Nav/>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *{
   margin: 0;
   padding: 0; 
  }
  *::after, *::before{
    box-sizing: border-box;
  }

</style>

