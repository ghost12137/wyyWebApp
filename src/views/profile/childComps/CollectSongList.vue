<template>
  <div class="collect-song-list">
    <div class="top">
      <span>收藏歌单</span>
      <div></div>
      <img src="~assets/img/base/more.svg" alt="">
    </div>
    <list-item class="song-list" 
      v-for="item in collectSongList" :list-item="item"
      :key="item.id"/>
    <div class="no-list" v-if="isEmpty">暂无收藏的歌单</div>
  </div>
</template>

<script>
import ListItem from './ListItem';
export default {
  components: { ListItem },
  name: 'CollectSongList',
  props: {
    collectSongList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    isEmpty() {
      return this.collectSongList.length==0?true:false
    },
  },
}
</script>

<style scoped>
.collect-song-list {
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.top {
  display: flex;
  font-size: 15px;
  align-items: center;
}
.top div {
  flex: 1;
}
.top img {
  width: 15px;
}
.no-list {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}
</style>