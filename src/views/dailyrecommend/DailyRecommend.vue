<template>
  <div class="daily-recommend">
    <div class="play-all" :class="isFlow==true?'active':'none'">
        <img src="~assets/img/dailyrecommend/playall/play.svg" alt="">
        <span>播放全部</span>
      </div>
    <scroll class="daily-scroll"
      @scroll="contentScroll" 
      :isListen="2">
      <!-- 背景 -->
      <div class="background">
        <span class="day">{{day}}</span>
        <span class="month">/{{month}}</span>
      </div>
      <!-- 播放全部 -->
      <div class="play-all" ref="playAll">
        <img src="~assets/img/dailyrecommend/playall/play.svg" alt="">
        <span>播放全部</span>
      </div>
      <!-- 音乐列表 -->
      <music-item 
        v-for="item in songList" 
        :key="item.id"
        :music-item="item"
      />

    </scroll>
  </div>
</template>

<script>
import { getDailyRecommendList } from "network/dailyRecommend";
import Scroll from 'components/common/scroll/Scroll';
import MusicItem from '../../components/content/musicItem/MusicItem.vue';
import { Toast } from 'vant';

export default {
  components: { 
    Scroll,
    MusicItem 
  },
  name: 'DailyRecommend',
  data() {
    return {
      songList: [], //推荐歌曲列表
      isFlow: false,//播放全部栏是否吸顶
    };
  },
  computed: {
    //获取当时天
    day() {
      return (new Date()).getDate();
    },
    //获取当时月
    month() {
      return (new Date()).getMonth() + 1;
    },
  },
  methods: {
    /**
     * 监听点击相关方法
     */
    //监听滚动
    contentScroll(position) {
      // console.log(this.$refs.playAll.offsetTop);
      if (Math.abs(position.y) > this.$refs.playAll.offsetTop) {
        console.log(true);
        this.isFlow = true;
      } else {
        console.log(false);
        this.isFlow = false;
      }
    },
    /**
     * 网络请求相关方法
     */
    //获取每日推荐歌曲
    getDailyRecommendList() {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中'
      });
      //获取每日推荐歌曲
      getDailyRecommendList()
      .then(res => {
        console.log(res);
        this.songList = res.data.dailySongs;
        Toast.clear();
      })
      .catch(err => {
        Toast.clear();
        Toast.fail('加载失败');
        console.log('getDailyRecommendList error in dailyRecommend', err);
      })
    }
  },
  created() {
    //获取每日推荐歌曲
    this.getDailyRecommendList();
  },
}
</script>

<style scoped>
.daily-recommend {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.background {
  width: 100vw;
  height: 200px;
  background-color: var(--color-back);
  line-height: 350px;
  margin-bottom: 5px;
}
.background span {
  color: #ffff;
  font-weight: bolder;
}
.day {
  font-size: 30px;
}
.play-all {
  display: flex;
  padding: 10px 10px;
  align-items: center;
  font-size: 16px;
  color: #000;
  font-weight: bolder;
  background-color: #f6f6f4;
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
}
.none {
  display: none;
}
</style>