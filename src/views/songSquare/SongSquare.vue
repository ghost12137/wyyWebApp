<template>
  <div class="song-square">
    <!-- 标题滚条 -->
    <title-scroll :title-list="titleList"/>
  </div>
</template>

<script>
import { getSongTitleList } from "network/songsquare";

import TitleScroll from './childComps/TitleScroll';
export default {
  name: 'SongSquare',
  components: {
    TitleScroll,
  },
  data() {
    return {
      titleList: [],  //标题列表，推荐等
    };
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    //获取歌单标题
    getSongTitleList() {
      getSongTitleList()
      .then(res => {
        console.log("res of song title in songsquare: ", res);
        this.titleList = res.tags.slice(0, 5);
        let recommend = {
          name: '推荐'
        };
        this.titleList.unshift(recommend);
      })
      .catch(err => {
        console.log('error of song title in songsquare:', err);
      })
    },
  },
  created() {
    //获取歌单标题
    this.getSongTitleList();
  },
}
</script>

<style scoped>
.song-square {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
</style>