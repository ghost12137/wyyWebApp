<template>
  <div class="login">
    <div class="welcome-back">欢迎回来</div>
    <div class="input-style">
      <van-field
        class="van-field"
        type="tel"
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        :error-message="phoneErrorMsg"
      />
      <van-field
        class="van-field"
        type="password"
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        :error-message="passwordErrorMsg"
      />
    </div>
    <van-button type="default" class="login-btn" @click="loginBtn"
      >登录</van-button
    >
    <div class="forget-pwd">忘记密码?</div>
  </div>
</template>

<script>
import { login } from 'network/login';
import { Toast } from 'vant';

export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      phoneErrorMsg: '',
      password: '',
      passwordErrorMsg: '',
    };
  },
  methods: {
    /**
     * 事件监听的方法
     */
    loginBtn() {
      const phoneReg = /^1(3|5|7|8|9)\d{9}$/g;
      if (!phoneReg.test(this.phone)) {
        this.phoneErrorMsg = '手机号格式错误!';
        return;
      } else {
        this.phoneErrorMsg = '';
        let data = {
          phone: this.phone,
          password: this.password
        };
        login(data).then(res => {
          console.log(res);
          if (res.code) {
            switch (res.code) {
              case 200:
                this.phoneErrorMsg = "";
                this.passwordErrorMsg = "";
                const userMsg = {
                  token: res.token,
                  userAccount: res.account,
                  userProfile: res.profile
                };
                this.$store.dispatch('setUser', userMsg);
                Toast.success('登录成功');
                setTimeout(() => {
                  this.$router.go(-1);
                }, 1000);
                break;
              case 502:
                this.passwordErrorMsg = res.message;
                break;
              default:
                break;
            }
          }
        })
          .catch(err => {
            Toast.fail('登陆失败');
            console.log('loginError in login: ', err);
          })
      }
    },
  },
}
</script>

<style scoped>
.login {
  background-color: #dc2c1f;
  height: 100vh;
  padding-left: 18px;
  padding-top: 160px;
}
.welcome-back {
  font-size: 30px;
  color: #f8f8f8;
}
.input-style {
  margin-top: 100px;
  width: 90%;
}
.van-field:first-child {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.van-field:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.login-btn {
  margin-top: 20px;
  border-radius: 30px;
  width: 90%;
  color: #dc2c1f;
  font-size: 20px;
  font-weight: bolder;
}
.forget-pwd {
  color: #4399fc;
  margin: 20px 0;
  margin-left: 128px;
}
</style>