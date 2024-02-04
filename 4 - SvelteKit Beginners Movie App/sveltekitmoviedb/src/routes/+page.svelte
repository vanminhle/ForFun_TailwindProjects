<script>
  let count = 0;

  function incrementBtn() {
    count += 1;
  }
</script>

<h1>Welcome to SvelteKit</h1>
<h2>Number: {count}</h2>
<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>

<button on:click={incrementBtn}>Click to increment</button>
<a href='/about'>Go to about</a>

<style>
    p {
        font-size: 2rem;
    }
</style>