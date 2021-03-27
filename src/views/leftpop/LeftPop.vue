<template>
  <div class="left-pop">
    <scroll class="leftpop-wrapper" :scrollByX="false">
      <div class="login-scan">
        <div class="leftMsg" @click="goToLogin">
          <img class="userHead" v-lazy="userHeadUrl" alt="" />
          <span>{{userNickName}}</span>
          <img class="arrow" src="~assets/img/base/arrow.svg" alt="" />
        </div>
        <img class="scan" src="~assets/img/leftpopup/scan.svg" alt="" />
      </div>
      <!-- 名片部分 -->
      <business-card />
      <!-- 消息部分 -->
      <message />
      <!-- 音乐服务部分 -->
      <music-service />
      <!-- 其他 -->
      <others />
      <!-- 关于等 -->
      <about-etc />
      <!-- 退出按钮 -->
      <van-button class="sign-out" type="default" size="large" @click="logOutBtn">退出</van-button>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import {logOut} from 'network/login';

import BusinessCard from './childComps/BusinessCard'
import Message from './childComps/Message'
import MusicService from './childComps/MusicService'
import Others from './childComps/Others'
import AboutEtc from './childComps/AboutEtc'
import { Toast } from 'vant';
export default {
  components: {
    BusinessCard,
    Scroll,
    Message,
    MusicService,
    Others,
    AboutEtc,
  },
  name: 'LeftPop',
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
    //退出登录
    logOutBtn() {
      if (this.$store.state.isLogin) {
        logOut().then(res => {
        console.log(res);
        this.$store.dispatch('setUser');
        Toast.success('退出成功');
        setTimeout(() => {
          this.$emit('logoutBtnClick', true);
        }, 1000);
      })
      }
    },
  },
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
}
</script>

<style scoped>
.left-pop {
  height: 98vh;
}
.leftpop-wrapper {
  margin: 0 auto;
  width: 90%;
  /* height: 98vh; */
}
.login-scan {
  margin-top: 10px;
  display: flex;
  color: #000;
  font-size: 13px;
}
.leftMsg {
  display: flex;
  line-height: 30px;
  flex: 1;
}
.userHead {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}
.arrow {
  width: 18px;
}
.scan {
  width: 25px;
}
.sign-out {
  border-radius: 15px;
  color: #f00;
}
</style>