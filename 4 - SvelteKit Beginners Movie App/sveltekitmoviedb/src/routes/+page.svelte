<script>
  import global from '../global.css';
  import PopularMovies from '../components/PopularMovies.svelte';

  // 50:58
  export let data;
</script>

<section>
  <PopularMovies movies={data.popular} />
</section>