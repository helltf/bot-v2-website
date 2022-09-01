<script>
	import BotCard from './BotCard.svelte'
</script>

<section class="bg-neutral-500 p-10 pt-20 pb-20">
	<div
		class="lg:flex-row flex-col m-auto flex items-center pl-9 pr-9 pt-12 pb-12 justify-center gap-10"
	>
		<BotCard
			bg="bg-red-600"
			href="https://github.com/helltf/twitchbot#readme"
			description="First bot I've created with Javascript - This project is no longer maintened but still online"
			title="helltfbot"
		/>
		<BotCard
			bg="bg-blue-600"
			href="/commands"
			description="Full rebuild Version 2 of my previous bot in Typescript - New Features will come in the future - Just a better bot then before"
			title="xdforsenxdlol"
		/>
		<BotCard
			bg="bg-gray-600"
			href="/home"
			description="A random side project I've started - Not much to explore here - May continue this in the future"
			title="discordbot"
		/>
	</div>
</section>
