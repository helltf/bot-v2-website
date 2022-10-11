<script lang="ts">
	import { onMount } from 'svelte'
	import { navigate } from 'svelte-routing'
	import { getCode, sendCode } from '../js/twitch.js'

	onMount(async () => {
		await sendCode(getCode())

		navigate('home')
	})
</script>
