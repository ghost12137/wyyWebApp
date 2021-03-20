<template>
  <div class="music-list-item">
    <div class="play">
      <img src="~assets/img/musiclist/play.svg" alt="">
      <span>{{itemPlayCount}}</span>
    </div>
    <img v-lazy="itemImage">
    <span>{{itemTitle}}</span>
  </div>
</template>

<script>
export default {
  name:'MusicListItem',
  props: {
    musicItem: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  computed: {
    itemImage() {
      return this.musicItem.uiElement.image.imageUrl;
    },
    itemTitle() {
      return this.musicItem.uiElement.mainTitle.title;
    },
    itemPlayCount() {
      return this.musicItem.resources!=null?this.musicItem.resources[0].resourceExtInfo.playCount:this.musicItem.creativeExtInfoVO.playCount;
    },
  },
}
</script>

<style scoped>
.music-list-item {
  position: relative;
  font-size: 10px;
}
.music-list-item img {
  margin-top: 20px;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-bottom: 5px;
}
.play {
  position: absolute;
  width: 63px;
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
}
.play img {
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 7px;
}
</style>