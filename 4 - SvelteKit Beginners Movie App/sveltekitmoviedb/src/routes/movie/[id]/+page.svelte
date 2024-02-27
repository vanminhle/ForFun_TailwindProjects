<script>
  export let data;

</script>

<div class='movie-details'>
  <div class='img-container'>
    <img src={'https://image.tmdb.org/t/p/original' + data.backdrop_path} alt={data.title} />
  </div>
  <div class='txt-container'>
    <h1>{data.title}</h1>
    <p class='overview'>{data.overview}</p>
    <p>
      <span>Release Date: </span>{data.release_date} <br />
      <span>Budget: </span>{data.budget} <br />
      <span>Rating: </span>{data.vote_average} <br />
      <span>Runtime: </span>{data.runtime} <br />
    </p>
  </div>
</div>

<!--[45:56]-->