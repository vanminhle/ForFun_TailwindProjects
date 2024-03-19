<script>
  import MovieCard from '../../../components/MovieCard.svelte';
  import { fly } from 'svelte/transition';

  export let data;

</script>

<div in:fly={{x: 50, duration: 500, delay: 500}} out:fly={{duration: 500}} class='searched-movies'>
  {#each data.results as movie}
    {#if movie.backdrop_path != null}
      <MovieCard {movie} />
    {/if}
  {/each}
</div>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
</style>