<template>
<div class="container">
  <div>
    <index-header></index-header>
  </div>
  <div class="userMessage">
    <user-message></user-message>
  </div>
  <div class="contentPic">
    <!--展示推荐图片-->
    <index-header-pic></index-header-pic>
  </div>
  <div class="contentMain">
    <ul class="cont-ul">
      <movie-list></movie-list>
    </ul>
  </div>
  <div>
    <!--footer应该会与默认标签重合，所以不能使用footer，改为大写-->
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import IndexHeaderPic from '../components/IndexHeaderPic'
import UserMessage from '../components/UserMessage'
import MovieList from '../components/movieList'
import Footer from '../components/Footer'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    IndexHeader,
    IndexHeaderPic,
    UserMessage,
    MovieList,
    Footer
  },
  comments: {
    'index-header': IndexHeader,
    'index-header-pic': IndexHeaderPic,
    'user-message': UserMessage,
    'movie-list': MovieList,
    'Footer': Footer
  },
  // 在此获取数据，获得主页推荐图片、主页电影列表
  created () {
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  margin: 0 auto;
}
.userMessage{
  padding-top: 5px;
  margin-top: -10px;
  margin-left: -10px;
}
.contentPic{
  padding-top: 5px;
}
.contentMain{
  height: 50px;
  margin-top: 5px;
  margin-left: 1%;
  border-bottom: 1px solid #000;
}
.cont-ul{
  padding-top: 0.5rem;
  background-color: #fff;
}
.cont-ul::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
Footer{
  width: 100%;
  height: 60px;
}
</style>
