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
import { adjustCount } from "common/utils";
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
      if (this.musicItem.resources!=null) {
        return adjustCount(this.musicItem.resources[0].resourceExtInfo.playCount);
      } else {
        return adjustCount(this.musicItem.creativeExtInfoVO.playCount);
      }
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
  padding: 5px 5px;
  height: 15px;
  background-color: rgba(150, 150, 150, 0.5);
  /* margin-top: 25px;
  margin-left: 50px; */
  border-radius: 7px;
  display: flex;
  font-size: 8px;
  align-items: center;
  line-height: 15px;
  color: #fff;
  left: 70px;
  top: 30px;
}
.play img {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  margin-right: 4px;
}
</style>