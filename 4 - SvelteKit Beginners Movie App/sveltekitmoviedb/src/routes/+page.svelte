<script>
  import '../global.css';
  import { fly } from 'svelte/transition';
  import PopularMovies from '../components/PopularMovies.svelte';
  import SearchMovies from '../components/SearchMovies.svelte';

  export let data;
</script>

<section in:fly={{x: 50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
  <SearchMovies />
  <PopularMovies movies={data.popular} />
</section>
