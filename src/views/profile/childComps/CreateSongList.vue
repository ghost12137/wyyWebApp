<template>
  <div class="create-song-list">
    <div class="top">
      <span>创建歌单</span>
      <div></div>
      <img class="add-list" src="~assets/img/base/add.svg" alt="">
      <img src="~assets/img/base/more.svg" alt="">
    </div>
    <list-item class="song-list" 
      v-for="item in createSongList" :list-item="item"
      :key="item.id"/>
    <div class="daoru-music">
      <div class="daoru-img">
        <img src="~assets/img/profile/createsonglist/daoru.svg" alt="">
      </div>
      <span>一键导入外部音乐</span>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';
export default {
  components: { ListItem },
  name: 'CreateSongList',
  props: {
    createSongList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 事件监听相关方法
     */
  },
}
</script>

<style scoped>
.create-song-list {
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
.add-list {
  margin-right: 20px;
}

.daoru-music {
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: var(--color-high-text);
}
.daoru-img {
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 10px;
  margin-right: 10px;
}
.daoru-img img {
  width: 30px;
  margin: 0 auto;
}
</style>