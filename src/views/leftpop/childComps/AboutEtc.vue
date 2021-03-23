<template>
  <div class="about-etc">
    <van-cell class="van-cell" title="我的订单" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/order.svg" alt="">
      </template>
    </van-cell>
    <van-cell class="van-cell" title="优惠券" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/coupon.svg" alt="">
      </template>
    </van-cell>
    <van-cell class="van-cell" title="帮助与反馈" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/help.svg" alt="">
      </template>
    </van-cell>
    <van-cell class="van-cell" title="分享网易云音乐" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/share.svg" alt="">
      </template>
    </van-cell>
    <van-cell class="van-cell" title="关于" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/about.svg" alt="">
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'AboutEtc'
}
</script>

<style scoped>
.about-etc {
  margin: 10px 0;
}
.about-etc .van-cell:first-child {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.about-etc .van-cell:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
img {
  width: 15px;
}
</style>