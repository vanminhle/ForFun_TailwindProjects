<script>
  import '../global.css';
  import PopularMovies from '../components/PopularMovies.svelte';

  export let data;
</script>

<section>
  <PopularMovies movies={data.popular} />
</section>