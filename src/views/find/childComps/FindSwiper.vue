<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="2000">
      <van-swipe-item v-for="(item, index) in banners" :key="index" class="swipe-item">
        <img v-lazy="item.pic">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'FindSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
}
</script>

<style scoped>
.my-swipe {
  /* width: 90%; */
  margin: 0 auto;
  height: 131.25px;
  width: 100vw;
}
.swipe-item {
  margin: 0 auto;
}
.my-swipe  img{
  width: 90%;
  border-radius: 20px;
  margin: 0 auto;
  margin-left: 18px;
}
</style>