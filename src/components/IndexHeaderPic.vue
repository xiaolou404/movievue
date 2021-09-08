<template>
<div class="headerPic">
  <!--用于主页图片推荐-->
  <div>
    <p class="imgTilte">{{recommendTitle}}</p>
    <a href="baidu.com">
      <img src="图片地址" class="headerImg"/>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexHeaderPic'
}
</script>

<style scoped>
.headerPic{
  height: 300px;
  width: 100%;
  background-color: antiquewhite;
}
.headerImg{
  height: 300px;
  width: 100%;
}
.imgTilte{
  z-index: 2;
  padding-left: 45%;
  padding-top: 230px;
  position: absolute;
  color: #fff;
  font-size: 20px;
}
</style>
