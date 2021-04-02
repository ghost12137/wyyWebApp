<template>
  <div class="song-order-msg">
    <div class="play-all" :class="isFlow==true?'active':'none'">
        <img src="~assets/img/dailyrecommend/playall/play.svg" alt="">
        <span>播放全部</span>
    </div>
    <scroll class="songorder-scroll" 
      @scroll="contentScroll" 
      :isListen="2">
      <!-- 背景 -->
      <background 
        :play-count="playCount"
        :song-order-img="songOrderImg" 
        :name="name" 
        :description="description"/>
      <!-- 收藏等按钮 -->
      <collect-etc-btn 
        :commentCount="commentCount" :subscribedCount="subscribedCount" :shareCount="shareCount"/>
      <!-- 播放全部 -->
      <div class="play-all" ref="playAll">
        <img src="~assets/img/dailyrecommend/playall/play.svg" alt="">
        <span>播放全部</span>
      </div>

      <!-- 音乐列表 -->
      <music-item 
        v-for="item in songList" 
        :key="item.id"
        :music-item="item"/>
    </scroll>
  </div>
</template>

<script>
import { getSongOrderMsg } from "network/songOrderMsg";
import { Toast } from 'vant';
import Scroll from 'components/common/scroll/Scroll';
import MusicItem from 'components/content/musicItem/MusicItem';

import Background from './childComps/Background';
import CollectEtcBtn from './childComps/CollectEtcBtn';

export default {
  components: {
    Scroll,
    Background,
    CollectEtcBtn,
    MusicItem
  },
  name: 'SongOrderMsg',
  data() {
    return {
      id: '',   //歌单id
      isFlow: false,//播放全部栏是否吸顶
      songList: [],//歌单歌曲列表
      name: '', //歌单名称
      songOrderImg: '', //歌单图片
      description: '',  //歌单描述
      playCount: 0,     //歌单播放量
      commentCount: 0,  //评论量
      subscribedCount: 0,//收藏量
      shareCount: 0,    //分享量
    };
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    //监听滚动
    contentScroll(position) {
      // console.log(position.y);
      if (Math.abs(position.y) > this.$refs.playAll.offsetTop) {
        this.isFlow = true;
      } else {
        this.isFlow = false;
      }
    },
    /**
     * 网络请求相关方法
     */
    //获取歌单详情
    getSongOrderMsg(id) {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中'
      });
      getSongOrderMsg(id)
        .then(res => {
          console.log('res of song order msg in songordermsg: ', res);
          this.songList = res.playlist.tracks;
          this.name = res.playlist.name;
          this.songOrderImg = res.playlist.coverImgUrl;
          this.description = res.playlist.description;
          this.playCount = res.playlist.playCount;
          this.commentCount = res.playlist.commentCount;
          this.subscribedCount = res.playlist.subscribedCount;
          this.shareCount = res.playlist.shareCount;
        })
        .catch(err => {
          console.log('error of song order msg in songordermsg: ', err);
        })
        .finally(() => {
          Toast.clear();
        })
    }
  },
  created() {
    //获取传过来的id
    this.id = this.$route.query.id;
    this.getSongOrderMsg(this.id);
  },
}
</script>

<style scoped>
.song-order-msg {
  background-color: #f6f6f4;
  overflow: hidden;
  height: calc(100vh - 50px);
}
.play-all {
  display: flex;
  padding: 10px 10px;
  align-items: center;
  font-size: 16px;
  color: #000;
  font-weight: bolder;
  background-color: #f6f6f4;
  margin-top: 40px;
}
.play-all img {
  width: 30px;
  margin-right: 10px;
}
.active {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
}
.none {
  display: none;
}
</style>