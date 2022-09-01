<script lang="ts">
	import TailwindCss from './TailwindCSS.svelte'
	import Nav from './lib/components/navbar/Nav.svelte'
	import { Router, Route } from 'svelte-routing'
	import Home from './lib/routes/Home.svelte'
	import Callback from './lib/routes/Callback.svelte'
	import Command from './lib/routes/Command.svelte'
	import CommandForward from './lib/routes/CommandForward.svelte'
	export let url = ''
</script>

<main class="h-full">
	<TailwindCss />

	<Router {url}>
		<Nav />
		<div class="h-[calc(100vh-80px)]">
			<Route path=""><Home /></Route>
			<Route path="info"><h1>Oh</h1></Route>
			<Route path="commands/:name" let:params
				><Command command={params.name} /></Route
			>
			<Route path="commands"><CommandForward /></Route>
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
