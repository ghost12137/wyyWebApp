<template>
  <div class="container">
    <span class="title">其他</span>
    <div class="divider"></div>
    <div class="others">
      <van-cell class="van-cell" title="设置" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/setting.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="夜间模式" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/moon.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="定时关闭" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/stopwatch.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="个性装扮" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/decorate.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="边听边存" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/listendownload.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="在线听歌免流量" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/listenonline.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="音乐黑名单" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/ban.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="青少年模式" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/teensmode.svg" alt="" />
        </template>
      </van-cell>
      <van-cell class="van-cell" title="音乐闹钟" is-link>
        <template #icon>
          <img src="~assets/img/leftpopup/alarmclock.svg" alt="" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Others'
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
.others .van-cell:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
img {
  width: 15px;
}
</style>