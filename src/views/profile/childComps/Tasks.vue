<template>
  <div class="tasks">
    <div class="item">
      <img src="~assets/img/profile/tasks/local.svg" alt="">
      <span>本地/下载</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/yunpan.svg" alt="">
      <span>云盘</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/buyed.svg" alt="">
      <span>已购</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/recentplay.svg" alt="">
      <span>最近播放</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/friend.svg" alt="">
      <span>我的好友</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/collect.svg" alt="">
      <span>收藏和赞</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/myplayer.svg" alt="">
      <span>我的博客</span>
    </div>
    <div class="item">
      <img src="../../../assets/img/profile/tasks/more.svg" alt="">
      <span>音乐应用</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks'
}
</script>

<style scoped>
.tasks {
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.item {
  margin-top: 5px;
  width: calc((100% - 50px)/4);
  text-align: center;
  vertical-align: middle;
}
.item img {
  width: 40px;
  height: 40px;
}
.item span {
  display: block;
  font-size: 15px;
}
</style>