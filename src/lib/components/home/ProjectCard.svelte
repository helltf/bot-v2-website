<script lang="ts">
  import { onMount } from 'svelte'

  import { fetchGithubData } from '../../js/github'
  export let title
  export let repoName
  export let icon

  let description = ''
  let languages = []
  let tags = []
  let stars = 0

  onMount(async () => {
    const data = await fetchGithubData(repoName)
    description = data.description
    languages = data.languages
    tags = data.tags
    stars = data.stars
  })
</script>

<div
  class="w-[380px] flex flex-col justify-between min-w-[340px] min-h-[200px] bg-neutral-700 rounded-md p-7 shadow-md shadow-neutral-900 gap-2 hover:bg-neutral-500 transition-all"
>
  <div class="top flex justify-between">
    <a href="https://github.com/helltf/{repoName}">
      <h3 class="text-neutral-100">{title} {icon}</h3>
    </a>
    <span>{stars} ⭐</span>
  </div>
  <div class="mid">
    <p class="text-neutral-400 mb-2">
      {description}
    </p>
    <div>
      <ul class="text-neutral-400  flex flex-row gap-2">
        {#each tags as tag}
          <li class="bg-neutral-600 pt-[2px] pb-[2px] pl-2 pr-2 rounded-sm">
            {tag}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="bot">
    <ul class="flex flex-row justify-center gap-2">
      {#each languages as language}
        <li>{language}</li>
      {/each}
    </ul>
  </div>
</div>
