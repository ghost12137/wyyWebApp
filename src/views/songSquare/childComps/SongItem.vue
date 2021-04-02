<template>
  <div class="song-item" @click="goToSongOrder(item.id)">
    <div class="play">
      <img src="~assets/img/musiclist/play.svg" alt="" />
      <span>{{ itemPlayCount }}</span>
    </div>
    <img v-lazy="itemImage" />
    <span class="name">{{ itemTitle }}</span>
  </div>
</template>

<script>
import { adjustCount } from "common/utils";
export default {
  name: 'SongItem',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    itemPlayCount() {
      return adjustCount(this.item.playCount);
    },
    itemImage() {
      return this.item.coverImgUrl;
    },
    itemTitle() {
      return this.item.name;
    },
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    //跳转到对应歌单详情
    goToSongOrder(id) {
      this.$router.push({path: '/songordermsg', query: {id}});
    },
  },
}
</script>

<style scoped>
.song-item {
  font-size: 10px;
}
.song-item img {
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 5px;
}
.name {
  display: block;
  width: 100px;
}
.play {
  position: absolute;
  width: 47px;
  height: 15px;
  background-color: rgba(150, 150, 150, 0.5);
  margin-top: 25px;
  margin-left: 50px;
  border-radius: 7px;
  display: flex;
  font-size: 8px;
  vertical-align: middle;
  line-height: 15px;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.play img {
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 7px;
}
</style>