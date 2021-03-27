<template>
  <div class="my-favorite-song">
    <div class="love">
      <img v-lazy="imgUrl" alt="">
    </div>
    <div class="text">
      <span>我喜欢的音乐</span>
      <span class="count">{{count}}首</span>
    </div>
    <div class="heart">
      <img src="~assets/img/profile/myfavoritesong/heartbeat.svg" alt="">
      <span>心动指数</span>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'MyFavoriteSong',
  props: {
    myFavoriteSong: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    imgUrl() {
      let imgUrl = Object.keys(this.myFavoriteSong).length!=0 ? this.myFavoriteSong.coverImgUrl : require('assets/img/profile/myfavoritesong/love.svg');
      return imgUrl;
    },
    count() {
      let count = Object.keys(this.myFavoriteSong).length!=0 ? this.myFavoriteSong.trackCount : 0;
      return count;
    },
  },
}
</script>

<style scoped>
.my-favorite-song {
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.love {
  background-color: #9b9b9b;
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 10px;
  margin-right: 10px;
}
.text {
  flex: 1;
  color: #353535;
  font-weight: bolder;
  font-size: 16px;
}
.text span {
  display: block;
  margin-bottom: 5px;
}
.count {
  color: #9a9a9a;
  font-size: 14px;
}
.heart img {
  width: 20px;
}
.heart {
  border: 1px solid #9a9a9a;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
}
</style>