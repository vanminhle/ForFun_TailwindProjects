<script>
  import '../global.css';
  import PopularMovies from '../components/PopularMovies.svelte';
  import SearchMovies from '../components/SearchMovies.svelte';

  export let data;
</script>

<section>
  <SearchMovies />
  <PopularMovies movies={data.popular} />
</section>