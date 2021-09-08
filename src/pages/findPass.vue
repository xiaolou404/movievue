<template>
  <fieldset>
    <!--用户找回密码页面，按理说应当需要往邮箱发邮件确认，先搁置不写-->
    <div class="box">
      <label for="email">邮 箱：</label>
      <input id="email" type="email" required v-model="email" placeholder="请输入邮箱"/>
    </div>
    <div class="box">
      <label for="username">用户名：</label>
      <input id="username" required v-model="username" placeholder="请输入用户名"/>
    </div>
    <div class="box">
      <label for="newpass">输入新密码：</label>
      <input id="newpass" required v-model="newpass" placeholder="请输入新密码"/>
    </div>
    <div class="box">
      <button @click="findPass">找回密码</button>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'findPass',
  data () {
    return {
      email: '',
      username: '',
      newpass: ''
    }
  },
  methods: {
    findPass: function () {
    }
  }
}
</script>

<style scoped>
  fieldset{
    width: 400px;
    margin: 0 auto;
    border: none;
  }
  .box{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 25px;
  }
  button{
    margin-right: 25px;
  }
</style>
