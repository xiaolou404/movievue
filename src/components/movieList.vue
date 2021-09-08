<template>
<div class="movieList">
  <!--用于展示电影内容-->
  <div>
    <router-link :to="电影地址" class="good-list-link">
      <p>电影名称等内容</p>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'moviesList'
}
</script>

<style scoped>
.movieList{
  padding: 5px;
  border-bottom: 1px dashed #ababab;
}
</style>
