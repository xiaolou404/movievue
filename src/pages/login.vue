<template>
    <fieldset>
      <!--用户登录页面-->
      <div class="box">
        <label for="username">用户名：</label>
        <input id="username" required v-model="username" placeholder="请输入用户名"/>
      </div>
      <div class="box">
        <label for="password">密  码：</label>
        <input id="password" required v-model="password" placeholder="请输入密码"/>
      </div>
      <div class="box">
        <button @click="Login">登录</button>
        <button>注册</button>
        <button>忘记密码</button>
      </div>
    </fieldset>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    Login: function () {
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
