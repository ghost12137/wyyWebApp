<template>
  <div class="song-square">
    <!-- 标题滚条 -->
    <title-scroll :title-list="titleList" @titleClick="titleClick" />

    <scroll
      class="song-scroll"
      :pull-up-load="true"
      ref="songScroll"
      @pullingUp="loadMore"
    >
      <div class="song-content">
        <song-item
          v-for="item in SongList" 
          :key="item.id" 
          :item="item" />
      </div>
    </scroll>
  </div>
</template>

<script>
import { getSongTitleList, getFineWorkList, getHotWorkList } from "network/songsquare";
import Scroll from 'components/common/scroll/Scroll';

import TitleScroll from './childComps/TitleScroll';
import SongItem from './childComps/SongItem.vue';
import { Toast } from 'vant';

export default {
  name: 'SongSquare',
  components: {
    TitleScroll,
    Scroll,
    SongItem,
  },
  data() {
    return {
      titleList: [],  //标题列表，推荐等
      currentIndex: 0,//当前显示内容
      SongList: [],   //歌单列表，所以
      before: '',      //before参数
      page: 0,
    };
  },
  methods: {
    /**
     * 事件响应相关方法
     */
    //点击标题切换内容
    titleClick(index) {
      this.currentIndex = index;
      //清空数据
      this.SongList = [];
      this.before = '';
      this.page = 0;
      if (index === 0) {
        this.getFineWorkList(this.titleList[index].id, 30);
      } else {
        this.getHotWorkList(this.titleList[index].name, 30, this.page);
      }
    },
    //上拉加载更多
    loadMore() {
      if (this.currentIndex === 0) {
        this.getFineWorkList(0, 15, this.before);
      } else {
        this.getHotWorkList(this.titleList[this.currentIndex].name, 9, this.page);
      }
    },
    /**
     * 网络请求相关方法
     */
    //获取歌单标题
    getSongTitleList() {
      getSongTitleList()
        .then(res => {
          // console.log("res of song title in songsquare: ", res);
          this.titleList = res.tags.slice(0, 5);
          let recommend = {
            name: '精品',
            id: 0
          };
          this.titleList.unshift(recommend);
        })
        .catch(err => {
          console.log('error of song title in songsquare:', err);
        })
    },
    //获取精品歌单
    getFineWorkList(type, limit, before) {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中'
      });
      getFineWorkList(type, limit, before)
        .then(res => {
          // console.log('res of fine work in titlescroll: ', res);
          this.SongList.push(...res.playlists);
          this.before = res.lasttime;
          if (typeof (before) != 'undefined') {
            this.$refs.songScroll.finishPullUp();
          }
        })
        .catch(err => {
          console.log('error of fine work in titlescroll: ', err);
        })
        .finally(() => {
          Toast.clear();
        })
    },
    // 获取热门歌单
    getHotWorkList(cat, limit, offset) {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中'
      });
      getHotWorkList(cat, limit, offset)
        .then(res => {
          // console.log('res of hot work list in songsquare:', res);
          this.SongList.push(...res.playlists);
          if (this.page == 0) {
            this.page = 30;
          } else {
            this.page += 9;
          }
          if (this.page) {
            this.$refs.songScroll.finishPullUp();
          }
        })
        .catch(err => {
          console.log('error of hot work list in songsquare:', err);
        })
        .finally(() => {
          Toast.clear();
        });
    },
  },
  created() {
    //获取歌单标题
    this.getSongTitleList();
    //获取精品歌单
    this.getFineWorkList(0, 30);
  },
}
</script>

<style scoped>
.song-square {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.song-scroll {
  margin-top: 40px;
  height: calc(100% - 50px);
  overflow: hidden;
}
.song-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: calc(100% - 50px);
}
</style>