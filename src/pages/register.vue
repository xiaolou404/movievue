<template>
  <fieldset>
    <!--用户注册页面-->
    <div class="box">
      <label for="email">邮 箱：</label>
      <input id="email" type="email" required v-model="email" placeholder="请输入邮箱"/>
    </div>
    <div class="box">
      <label for="username">用户名：</label>
      <input id="username" required v-model="username" placeholder="请输入用户名"/>
    </div>
    <div class="box">
      <label for="password">密  码：</label>
      <input id="password" required v-model="password" placeholder="请输入密码"/>
    </div>
    <div class="box">
      <label for="repassword">重复输入密码：</label>
      <input id="repassword" required v-model="repassword" placeholder="请重复输入密码"/>
    </div>
    <div class="box">
      <button @click="Register">注册</button>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    Register: function () {
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
