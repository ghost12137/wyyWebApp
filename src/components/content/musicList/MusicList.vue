<template>
  <div class="music-list">
    <span class="main-title">{{ mainTitle }}</span>
    <div class="more right">
      更多<img src="~assets/img/base/arrow.svg" alt="" />
    </div>
    <scroll :scrollByX="scrollByX" class="music-scroll">
      <div class="music-list-scroll">
        <music-list-item
          v-for="(item, index) in musicList"
          :key="index"
          :music-item="item"
          class="list-item"
        />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../common/scroll/Scroll.vue';
import MusicListItem from './MusicListItem.vue';
export default {
  components: { MusicListItem, Scroll },
  name: 'MusicList',
  data() {
    return {
      scrollByX: true,
    };
  },
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    musicList: {
      type: Array,
      default() {
        return [];
      },
    }
  },
}
</script>

<style scoped>
.music-list {
  padding-top: 10px;
}
.main-title {
  margin-left: 18px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
}
.music-scroll {
  display: flex;
}
.music-list-scroll {
  margin-left: 18px;
  display: flex;
  /* overflow: hidden; */
}
.list-item {
  margin-right: 10px;
}
.more {
  display: flex;
  font-size: 12px;
  line-height: 20px;
  width: 60px;
  height: 20px;
  border: 1px solid #e7e7e7;
  margin-right: 18px;
  border-radius: 10px;
  padding-left: 10px;
}
.more img {
  margin-left: 5px;
  width: 14px;
}
</style>