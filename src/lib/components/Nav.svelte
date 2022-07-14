<script lang="ts">
	import NavImage from './NavImage.svelte'
	import NavLink from './NavLink.svelte'

	let mobileActive = false

	function handleMobileClick() {
		mobileActive = !mobileActive
	}
</script>

<nav
	class="shadow-[0_6px_4px_-2px] shadow-neutral-900 w-full h-20 bg-neutral-800 flex flex-row justify-between items-center lg:min-w-[600px]"
>
	<div
		class="lg:ml-48 ml-10 left-nav flex flex-row items-center gap-1 justify-start w-[140px]"
	>
		<span class="text-4xl text-red-600">hell</span>
		<div class="w-[60px]">
			<img src="./tf.png" alt="trollface logo" width="60" height="60" />
		</div>
	</div>

	<div class="absolute">
		<ul
			class=" {mobileActive
				? ''
				: 'left-[-100%] relative'} flex flex-row justify-center gap-6 "
		>
			<NavLink linkName={'Home'} linkTo="" />
			<NavLink linkName={'Info'} linkTo="info" />
			<NavLink linkName={'Commands'} linkTo="commands" />
			<NavLink linkName={'Stats'} linkTo="stats" />
		</ul>
	</div>

	<div
		class="hidden {mobileActive
			? ''
			: 'left-[-100%] relative blcok'} lg:flex flex-row justify-between items-center gap-2 mr-48 w-[140px]"
	>
		<NavImage
			link="https://twitter.com/helltfx"
			src="./twitter-logo.png"
			alt="twitter logo link"
		/>
		<NavImage
			link="https://github.com/helltf"
			src="./github-logo.png"
			alt="github logo link"
		/>
		<NavImage
			link="https://twitch.tv/helltf"
			src="./twitch-logo.png"
			alt="twitch logo link"
		/>
	</div>
	<div class="lg:hidden flex items-center mr-5">
		<button
			on:click={handleMobileClick}
			class="outline-none mobile-menu-button"
		>
			<svg
				class="w-6 h-6 text-gray-500"
				x-show="!showMenu"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</nav>
