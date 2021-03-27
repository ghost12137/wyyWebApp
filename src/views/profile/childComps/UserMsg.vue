<template>
  <div class="user-msg">
    <img class="user-head" v-lazy="userHeadUrl">
    <div class="nick-name-etc" @click="goToLogin">
      <span>{{userNickName}}</span>
      <img v-if="!$store.state.isLogin" class="arrow" src="../../../assets/img/base/arrow.svg" />
    </div>
    <img v-if="$store.state.isLogin" class="arrow" src="../../../assets/img/base/arrow.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'UserMsg',
  computed: {
    // 登录后获取用户头像
    userHeadUrl() {
      let url = this.$store.state.userProfile!=null? this.$store.state.userProfile.avatarUrl : require('assets/img/leftpopup/user.svg');
      return url;
    },
    // 登录后获取用户昵称
    userNickName() {
      let nickName = this.$store.state.userProfile!=null?this.$store.state.userProfile.nickname : '立即登录';
      return nickName;
    },
  },
  methods: {
    /**
     * 事件监听的方法
     */
    //跳转到登录界面
    goToLogin() {
      // console.log(this.$store.state.isLogin);
      if (!this.$store.state.isLogin) {
        this.$router.push('/login');
      }
    },
  },
}
</script>

<style scoped>
.user-msg {
  margin-top: 20px;
  padding-top: 1px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}
.user-head {
  width: 40px;
  margin-right: 15px;
}
.nick-name-etc {
  flex: 1;
  display: flex;
  color: #000;
  font-weight: bolder;
  font-size: 17px;
  /* line-height: 40px;
  vertical-align: middle;
  padding: 1px; */
  align-items: center;
}
.arrow {
  width: 20px;
}
</style>