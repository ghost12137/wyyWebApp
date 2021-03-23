<template>
  <div class="business-card">
    <div class="firstRow">
      <span class="buyVIP">开通黑胶VIP</span>
      <div></div>
      <span class="VIPCenter">会员中心</span>
    </div>
    <span>立享超17项专属特权</span>
    <div class="divider"></div>
    <div class="third-row">
      <span>黑胶VIP仅2.8元! 立即点击购买</span>
      <div></div>
      <span class="discount">2.1折</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessCard'
}
</script>

<style scoped>
.business-card {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 13px;
  background-image: linear-gradient(to right, #8a8a8a, #b5b5b5);
  color: #d2d2d2;
  font-size: 13px;
}
.firstRow {
  display: flex;
  margin-bottom: 10px;
}
.firstRow div {
  flex: 1;
}
.buyVIP {
  color: #fff;
  display: block;
  font-size: 17px;
  font-weight: bolder;
  padding: 3px 0;
}
.VIPCenter {
  font-size: 13px;
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  padding: 3px 5px;
  border-radius: 8px;
}
.divider {
  margin-top: 15px;
  height: 1px;
  background-color: #d2d2d2;
  transform: scale(1, 0.5);
  margin-bottom: 10px;
}
.third-row {
  font-size: 10px;
  display: flex;
}
.third-row span {
  padding: 3px 0;
}
.third-row div {
  flex: 1;
}
.discount {
  color: #f00;
  background-color: #ff989c;
}
</style>