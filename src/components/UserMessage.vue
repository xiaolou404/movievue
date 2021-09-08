<template>
<div class="header">
  <!--用于向用户展示登录链接-->
  <router-link to="/login">
    <div class="header_nav">登录</div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'UserMessage'
}
</script>

<style scoped>
.header{
  width: 103%;
  height: 30px;
  top: 0;
  left: 0;
  color: #000;
  background-color: #C3BD5C;
}
.header_nav{
  padding-right: 60px;
  padding-top: 10px;
  float: right;
  color: #fff;
  font-size: 8px;
}
</style>
