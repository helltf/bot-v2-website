<script>
	export let link
	export let src
	export let alt
</script>

<a class="w-12" href={link}>
	<img
		class="rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900 hover:border-neutral-400 transition-all duration-300"
		{src}
		{alt}
	/>
</a>
