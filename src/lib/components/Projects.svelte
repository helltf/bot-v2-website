<script>
	import ProjectCard from './ProjectCard.svelte'

	const projects = [
		['helltfbot-v2', 'Version 2 of helltfbot', ''],
		['bot-v1-fullstack', 'Fullstack v1', ''],
		['twitchbot', 'Old Twitchbot', ''],
		['bot-v2-backend', 'Backend for v2', ''],
		['bot-v2-website', 'Frontend for v2', ''],
		['go-discord-bot', 'Old discord bot', ''],
	]
</script>

<section class="pr-20 pl-20">
	<h2 class="mb-10 text-3xl">Projects</h2>
	<div class=" grid grid-cols-2 gap-4 justify-items-center">
		{#each projects as [repoName, title, icon]}
			<ProjectCard {icon} {title} {repoName} />
		{/each}
	</div>
</section>
