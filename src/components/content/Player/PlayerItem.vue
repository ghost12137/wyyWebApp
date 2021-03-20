<template>
  <div class="player-item">
    <img v-lazy="itemImage">
    <img src="~assets/img/base//playBtn_white.svg" class="play-btn">
    <span>{{itemTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerItem',
  props: {
    listItem: {
      type:Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    itemImage() {
      return this.listItem.uiElement.image.imageUrl;
    },
    itemTitle() {
      return this.listItem.uiElement.mainTitle.title;
    },
  },
}
</script>

<style scoped>
.player-item {
  margin-right: 10px;
  text-align: center;
  font-size: 12px;
  position: relative;
}
.player-item img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 5px;
}
.player-item .play-btn {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 10;
  left: 40px;
  top: 40px;
  opacity: 0.6;
  /* mix-blend-mode: lighten; */
}
</style>