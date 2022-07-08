<script>
	import { Link } from 'svelte-routing'
	export let linkName
	export let linkTo
</script>

<li class="hover:text-green-800 transition-all">
	<Link to={linkTo}>{linkName}</Link>
</li>
