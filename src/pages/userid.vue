<template>
  <div class="container">
    <!--用户看到的其它用户的详情页-->
    <index-header></index-header>
    <div class="userMessage">
      <user-message></user-message>
    </div>
    <div class="contentMain">
      <div class="left">
        <img src="电影图片" class="headerImg">
      </div>
      <div class="right">
        <div class="box">用户名：用户名</div>
        <div class="box">
          <router-link to="/sendEmail">
            <button>给TA发送信息</button>
          </router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import IndexHeader from '../components/IndexHeader'
import UserMessage from '../components/UserMessage'
export default {
  name: 'userid',
  components: {UserMessage, IndexHeader, Footer}
}
</script>

<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
    width: 50%;
    padding-top: 50px;
    display: flex;
    margin: 0 auto;
  }
  .left{
    height: 200px;
    width: 200px;
    margin-right: 50px;
  }
  .right{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .headerImg{
    height: 200px;
  }
  .box{
    margin-bottom: 25px;
  }
</style>
