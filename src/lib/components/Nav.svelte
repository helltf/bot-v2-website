<script lang="ts">
	import { Link } from 'svelte-routing'
	import NavLink from './NavLink.svelte'
</script>

<nav
	class="shadow-[0_4px_2px_-2px] shadow-neutral-700 w-full h-20 bg-neutral-800 flex flex-row justify-between items-center min-w-[600px]"
>
	<div class="left-nav  pl-48">
		<span class="text-4xl text-red-900">helltf</span>
	</div>
	<div class="mid-nav flex w-full h-full justify-center items-center ">
		<ul class="flex flex-row justify-center gap-6 ">
			<NavLink linkName={'Home'} linkTo="/" />
			<NavLink linkName={'Info'} linkTo="/info" />
			<NavLink linkName={'Commands'} linkTo="/commands" />
			<NavLink linkName={'Stats'} linkTo="/stats" />
		</ul>
	</div>

	<div class="right-nav flex flex-row justify-between items-center gap-2 pr-48">
		<a href="https://twitter.com/helltfx">
			<img
				class="w-16  rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900"
				src="../../../twitter-logo.png"
				alt="twitter logo link"
			/>
		</a>
		<a href="https://github.com/helltf">
			<img
				class="w-16 rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900"
				src="../../../github-logo.png"
				alt="github logo link"
			/>
		</a>
		<a href="https://twitch.tv/helltf">
			<img
				class="w-16  rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900"
				src="../../../twitch-logo.png"
				alt="twitch logo link"
			/>
		</a>
	</div>
</nav>
