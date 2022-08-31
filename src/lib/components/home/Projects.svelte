<script>
	import ProjectCard from './ProjectCard.svelte'

	const projects = [
		['helltfbot-v2', 'Version 2 of helltfbot', '🤖'],
		['bot-v1-fullstack', 'Website and API v1', '🌐'],
		['twitchbot', 'Version 1 Twitchbot', '💾'],
		['bot-v2-backend', 'Backend for v2', '🦀'],
		['bot-v2-website', 'Frontend for v2', '🖥️'],
		['go-discord-bot', 'Old discord bot', '💤']
	]
</script>

<section class="m-auto">
	<div class="pr-20 pl-20">
		<div class="flex lg:justify-start justify-center">
			<h2 class="mb-10 text-3xl ">Projects</h2>
		</div>
		<div
			class="lg:grid-cols-2 grid grid-cols-1 gap-5 gap-x-9 justify-items-center"
		>
			{#each projects as [repoName, title, icon]}
				<ProjectCard {icon} {title} {repoName} />
			{/each}
		</div>
	</div>
</section>
