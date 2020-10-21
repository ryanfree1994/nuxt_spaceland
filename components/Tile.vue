<template>
<div class="d-flex flex-wrap justify-content-center" v-if="movies">
  <div class="tile text-center m-2"  v-for="movie in movies['Search']" :key="movie.id">
    <p class="tile-title p-2 text-primary">{{movie.Title}}</p>
    <h4 class="p-2">{{movie.Year}}</h4>
    <img :src="movie.Poster" :alt="movie.Title" class="p-2 w-25"/>
    <p class="text-secondary">IMDB ID: {{movie.imdbID}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    movies: Object
  }
}
</script>

<style>
.tile {
  width: 45%;
  border: 1px solid white;
}

.tile-title{
  font-size: 1.5rem;
}
</style>
