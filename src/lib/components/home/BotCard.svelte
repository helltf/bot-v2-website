<script>
  export let bg
  export let description
  export let title
  export let href

  let hovered = false
  function onHover() {
    hovered = true
  }

  function onLeave() {
    hovered = false
  }
</script>

<div class="w-60 flex flex-col {bg} p-6 pr-9 pl-9 rounded-lg gap-5 lg:w-[400px] w-[600px]">
  <h1 class="text-3xl ">{title}</h1>
  <p class="text-base  lg:w-[300px] w-[500px]">{description}</p>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <a
    on:mouseleave={onLeave}
    on:mouseover={onHover}
    class="{hovered
      ? bg
      : 'bg-white'} w-[70%] transition-all flex flew-col justify-between p-2 border-white border-2 rounded-sm"
    {href}
  >
    <span class="{hovered ? 'text-white' : 'text-neutral-500'}  text-sm">view commands</span>
    <img src="./arrow.svg" alt="arrow" />
  </a>
</div>
