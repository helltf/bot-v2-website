<script>
	export let bg
	export let description
	export let title
	export let href

	let hover = 'hover:'
</script>

<div
	class="w-60 flex flex-col {bg} p-6 pr-9 pl-9 rounded-lg gap-5 lg:w-[400px] w-[600px]"
>
	<h1 class="text-3xl ">{title}</h1>
	<p class="text-base  lg:w-[300px] w-[500px]">{description}</p>
	<a
		class="w-[70%] hover:bg-neutral-300 transition-all bg-white rounded-sm flex flew-col justify-between p-2"
		{href}
	>
		<span class="text-neutral-500 text-sm">view commands</span>
		<img src="../../arrow.svg" alt="arrow" />
	</a>
</div>
