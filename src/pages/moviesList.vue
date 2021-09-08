<template>
  <div class="container">
    <index-header></index-header>
    <div class="contentMain">
      <ul class="cont-ul">
        <movie-list></movie-list>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import Footer from '../components/Footer'
import MovieList from '../components/movieList'
export default {
  name: 'moviesList',
  components: {MovieList, Footer, IndexHeader}
}
</script>

<style scoped>
.container{
  width: 100%;
  margin: 0 auto;
}
.contentMain{
  padding-top: 150px;
}
.cont-ul{
  font-size: 15px;
  padding-top: 20px;
}

</style>
