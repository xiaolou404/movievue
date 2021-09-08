<template>
<div class="container">
  <!--电影详情页面-->
  <index-header></index-header>
  <div class="contentMain">
    <div class="top">
      <div class="left">
        <img src="电影图片" class="headerImg">
      </div>
      <div class="right">
        <h1>电影名称</h1>
        <p>简介：电影简介……</p>
        <button>点击下载</button>
      </div>
    </div>
    <div class="bottom">
      <!--评论区-->
      <label>评论</label>
      <hr>
      <ul class="content">
        <li v-for="item in items" :key="item.id">
          {{item.name}}xxx评论：xxx
        </li>
      </ul>
      <div>
        <textarea v-model="content" placeholder="请输入评论"></textarea>
        <div>
          <button @click="sendComment">发送评论</button>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import Footer from '../components/Footer'
export default {
  name: 'movieDetail',
  components: {Footer, IndexHeader},
  data () {
    return {
      items: [],
      content: ''
    }
  },
  methods: {
    sendComment: function () {

    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  margin: 0 auto;
}
  .contentMain{
    padding-top: 50px;
  }
  .top{
    height: 200px;
    width: 70%;
    margin: 0 auto;
  }
  .left{
    float: left;
    height: 200px;
    width: 200px;
    margin-right: 50px;
  }
  .right{
    float: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .headerImg{
    height: 200px;
  }
  textarea{
    width: 80%;
    height: 50px;
  }
  button{
    padding-top: 15px;
  }
</style>
