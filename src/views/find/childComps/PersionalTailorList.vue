<template>
  <div class="personal-tailor">
    <span class="main-title">私人订制</span>
    <div class="second-title">
      <span>{{ personalTitle }}</span>
      <div class="playBtn right">
        <img src="~assets/img/base/playBtn.svg" alt="" />
        播放
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersionalTailorList',
  props: {
    personalTitle: {  //私人订制标题
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
.personal-tailor {
  background-color: #fff;
  border-radius: 15px;
  padding-bottom: 10px;
}
.main-title {
  font-size: 13px;
  margin-left: 18px;
}
.second-title {
  margin-top: 5px;
}
.second-title span {
  font-size: 15px;
  margin-left: 18px;
  color: #000;
  font-weight: bolder;
}
.playBtn {
  display: flex;
  font-size: 12px;
  line-height: 20px;
  width: 60px;
  height: 20px;
  border: 1px solid #e7e7e7;
  margin-right: 18px;
  border-radius: 10px;
  padding-left: 6px;
}
.playBtn img {
  margin-right: 2px;
  width: 14px;
}
</style>
