<script lang="ts">
	import NavImage from './NavImage.svelte'
	import NavLink from './NavLink.svelte'
</script>

<nav
	class="shadow-[0_6px_4px_-2px] shadow-neutral-900 w-full h-20 bg-neutral-800 flex flex-row justify-between items-center min-w-[600px]"
>
	<div
		class="left-nav ml-48 flex flex-row object-fill items-center gap-1 w-[270px] justify-start"
	>
		<div class="flex flex-row  items-center gap-1 ">
			<span class="text-4xl text-red-600">hell</span>
			<img class="w-[60px]" src="./../../../tf.png" alt="trollface logo" />
		</div>
	</div>
	<div class="mid-nav flex w-full h-full justify-center items-center ">
		<ul class="flex flex-row justify-center gap-6 ">
			<NavLink linkName={'Home'} linkTo="/" />
			<NavLink linkName={'Info'} linkTo="/info" />
			<NavLink linkName={'Commands'} linkTo="/commands" />
			<NavLink linkName={'Stats'} linkTo="/stats" />
		</ul>
	</div>

	<div
		class="right-nav flex flex-row justify-between items-center gap-2 mr-48 "
	>
		<NavImage
			link="https://twitter.com/helltfx"
			src="./../../../twitter-logo.png"
			alt="twitter logo link"
		/>
		<NavImage
			link="https://github.com/helltf"
			src="./../../../github-logo.png"
			alt="github logo link"
		/>
		<NavImage
			link="https://twitch.tv/helltf"
			src="./../../../twitch-logo.png"
			alt="twitch logo link"
		/>
	</div>
</nav>
