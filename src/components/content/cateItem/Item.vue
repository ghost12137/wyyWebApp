<template>
  <div class="item">
    <!-- <div class="play">
      <img src="~assets/img/musiclist/play.svg" alt="">
      <span>{{itemPlayCount}}</span>
    </div> -->
    <img class="image" v-lazy="itemImage">
    <span class="title">{{itemTitle}}</span>
  </div>
</template>

<script>
export default {
  name:'MusicListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  computed: {
    itemImage() {
      return this.item.picUrl;
    },
    itemTitle() {
      return this.item.name;
    },
    itemPlayCount() {
      return this.item.subCount;
    },
  },
}
</script>

<style scoped>
.item {
  position: relative;
  font-size: 10px;
  margin-right: 10px;
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
.image{
  margin-top: 20px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 5px;
}
.title {
  display: block;
  width: 80px;
  text-align: center;
}
</style>