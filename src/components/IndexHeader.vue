<template>
<header>
  <!--主页的头部-->
  <router-link to="/">
    <div class="header_nav">主页</div>
  </router-link>
  <router-link to="/movieList">
    <div class="header_nav">电影</div>
  </router-link>
</header>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style scoped>
  header{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    color: #000;
    background-color: #a5a5a5;
    border-bottom: 2px solid #000;
  }
  .header_nav{
    padding-left: 60px;
    padding-top: 20px;
    float: left;
    color: #fff;
  }
</style>
