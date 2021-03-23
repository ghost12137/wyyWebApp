<template>
  <div class="container">
    <span class="title">音乐服务</span>
    <div class="divider"></div>
    <div class="music-service">
      <van-cell class="van-cell" title="云村有票" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/ticket.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="商城" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/cart.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="游戏专区" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/game.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="口袋彩铃" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/bell.svg" alt="" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicService'
}
</script>

<style scoped>
.container {
  margin: 15px 0;
  padding-top: 5px;
  background-color: #fff;
  border-radius: 15px;
}
.title {
  font-size: 13px;
  margin-left: 15px;
}
.divider {
  margin: 3px auto;
  width: 90%;
  height: 1px;
  background-color: #d2d2d2;
  transform: scale(1, 0.5);
}
.music-service .van-cell:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
img {
  width: 15px;
}
</style>