<template>
  <div class="music-item">
    <img class="pic" v-lazy="musicItem.al.picUrl">
    <div class="music-msg">
      <span>{{musicItem.name}}</span>
      <span>{{musicItem.ar[0].name}}-{{musicItem.al.name}}</span>
    </div>
    <img class="play" src="~assets/img/base/playBtn.svg">
    <img class="more" src="~assets/img/base/more.svg">
  </div>
</template>

<script>
export default {
  name: 'MusicItem',
  props: {
    musicItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
}
</script>

<style scoped>
.music-item {
  width: 100vw;
  padding: 0 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.pic {
  width: 50px;
  margin-right: 10px;
}
.music-msg {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.music-msg span {
  display: block;
}
.music-msg span:first-child {
  color: #000;
  font-size: 15px;
  font-weight: bolder;
}
.music-msg span:last-child {
  font-size: 12px;
}
.play, .more {
  width: 20px;
  margin-left: 10px;
}
</style>