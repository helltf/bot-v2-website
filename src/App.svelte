<script lang="ts">
	import TailwindCss from './TailwindCSS.svelte'
	import Nav from './lib/components/Nav.svelte'
	import { Router, Route } from 'svelte-routing'
	import Home from './lib/routes/Home.svelte'
	export let url = ''
</script>

<main>
	<TailwindCss />

	<Router {url}>
		<Nav />

		<div>
			<Route path="/"><Home /></Route>
		</div>
	</Router>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: #303030;
		color: #ffffff;
	}

	* {
		margin: 0;
		padding: 0;
	}
	*::after,
	*::before {
		box-sizing: border-box;
	}
</style>
