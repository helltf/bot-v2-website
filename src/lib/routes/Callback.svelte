<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { getCode, getToken, sendToken } from '../js/twitch.js'

  onMount(async () => {
    const token = await getToken(getCode())
    console.log(token.access_token)
    await sendToken(token)

    navigate('home')
  })
</script>
