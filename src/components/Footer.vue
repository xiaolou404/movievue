<template>
  <div class="footer">
    <p>网页底部</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  border-bottom: 2px solod #ccc;
  background-color: #000;
}
.footer p{
  font-size: 10px;
  color: #fff;
  text-align: center;
}
</style>
