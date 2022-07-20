<script lang="ts">
  import TailwindCss from './TailwindCSS.svelte';
  import Nav from './lib/components/Nav.svelte';
  import { Router, Route } from 'svelte-routing';
  import Home from './lib/routes/Home.svelte';
  import Callback from './lib/routes/Callback.svelte';
  import Command from './lib/routes/Command.svelte';
  export let url = '';
</script>

<main>
  <TailwindCss />

  <Router {url} basepath="/bot-v2-website/">
    <Nav />
    <div>
      <Route path=""><Home /></Route>
      <Route path="info"><h1>Oh</h1></Route>
      <Route path="commands"><h1>Oh</h1></Route>
      <Route path="stats"><h1>Oh</h1></Route>
      <Route path="callback"><Callback /></Route>
    </div>
  </Router>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #282828;
    color: #ffffff;
    height: 100%;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }
</style>
