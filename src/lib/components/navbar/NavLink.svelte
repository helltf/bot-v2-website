<script>
	import { Link } from 'svelte-routing'
	export let linkName
	export let linkTo
</script>

<li class="hover:text-red-600 transition-all">
	<Link to={linkTo}>{linkName}</Link>
</li>
