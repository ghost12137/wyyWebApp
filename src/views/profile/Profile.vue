<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="left" @click="leftPopClick" class="left-pop">
        <img src="~assets/img/navbar/category.svg" alt="" />
      </div>
      <div slot="center" v-if="showMsg">
        <img class="user-head" v-lazy="userHeadUrl" />
        <span>{{ userNickName }}</span>
      </div>
    </nav-bar>
    <!-- 个人信息等左弹出层 -->
    <van-popup
      class="left-van-popup"
      position="left"
      :style="{ height: '100vh', width: '70%' }"
      v-model="leftPopUp"
    >
      <left-pop @logoutBtnClick="changePopStatus" />
    </van-popup>
    <div class="container">
      <scroll
        class="prifile-scroll"
        ref="profileScroll"
        :isListen="2"
        @scroll="contentScroll"
      >
        <!-- 用户信息展示 -->
        <user-msg />
        <!-- 本地、播放等任务 -->
        <tasks />
        <!-- 我喜欢的音乐 -->
        <my-favorite-song :my-favorite-song="myFavoriteSong" />
        <!-- 创建歌单/收藏歌单按钮 -->
        <music-ctrl :titles="['创建歌单', '', '收藏歌单']" />
        <!-- 创建歌单 -->
        <create-song-list :create-song-list="createSongList" />
        <!-- 收藏歌单 -->
        <collect-song-list :collect-song-list="collectSongList"/>

      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';

import { getUserProfileMessge } from "network/profile";

import LeftPop from '../leftpop/LeftPop';

import UserMsg from './childComps/UserMsg';
import Tasks from './childComps/Tasks.vue';
import MyFavoriteSong from './childComps/MyFavoriteSong';
import MusicCtrl from './childComps/musicCtrl.vue';
import CreateSongList from './childComps/CreateSongList';
import CollectSongList from './childComps/CollectSongList.vue';

export default {
  components: {
    NavBar,
    LeftPop,
    UserMsg,
    Tasks,
    Scroll,
    MyFavoriteSong,
    MusicCtrl,
    CreateSongList,
    CollectSongList,
  },
  name: 'Profile',
  data() {
    return {
      leftPopUp: false,   //个人信息左弹出层显示
      showMsg: false,     //个人信息navbar弹出
      myFavoriteSong: {}, //我喜欢的音乐
      createSongList: [], //创建的歌单
      collectSongList: [],//收藏的歌单
    };
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    //点击左上角更多左弹出层显示事件
    leftPopClick() {
      // console.log('leftclick');
      this.leftPopUp = true;
    },
    //监听到退出点击事件，隐藏弹出层
    changePopStatus() {
      this.leftPopUp = false;
      //清空数据
      this.myFavoriteSong = {};
      this.createSongList = [];
      this.collectSongList = [];
    },
    //监听滚动
    contentScroll(position) {
      // console.log(position);
      if (Math.abs(position.y) > 80) {
        this.showMsg = true;
      } else {
        this.showMsg = false;
      }
    },
    /**
     * 网络请求相关方法
     */
    //获取用户歌单
    getUserProfileMessge(uid) {
      getUserProfileMessge(uid)
        .then(res => {
          console.log("user profile in profile", res);
          //喜欢的音乐
          this.myFavoriteSong = res.playlist[0];
          //创建的歌单
          this.createSongList = res.playlist.filter((item, index) => {
            if (index != 0 && item.userId == this.$store.state.uid) return item;
          });
          //收藏的歌单
          this.collectSongList = res.playlist.filter((item, index) => {
            if (index != 0 && item.userId != this.$store.state.uid) return item;
          });
        })
        .catch(err => {
          const statusCode = err.response.status;
          if (statusCode == 301) console.log('请先登录');
        })
    },
  },
  computed: {
    // 登录后获取用户头像
    userHeadUrl() {
      let url = this.$store.state.userProfile != null ? this.$store.state.userProfile.avatarUrl : require('assets/img/leftpopup/user.svg');
      return url;
    },
    // 登录后获取用户昵称
    userNickName() {
      let nickName = this.$store.state.userProfile != null ? this.$store.state.userProfile.nickname : '立即登录';
      return nickName;
    },
  },
  created() {
    const uid = this.$store.state.uid;
    //获取用户歌单
    if (uid != null)
      this.getUserProfileMessge(uid);
  },
}
</script>

<style scoped>
#profile {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.container {
  width: 90%;
  height: calc(100% - 49px);
  margin: 0 auto;
}
.nav-bar {
  background-color: #ffffff;
  z-index: 9;
  position: relative;
}
.nav-bar img {
  vertical-align: middle;
  width: 25px;
}
.prifile-scroll {
  height: 97%;
}
</style>