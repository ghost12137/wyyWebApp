<template>
  <div class="message">
    <van-cell class="van-cell" title="我的消息" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/envelope.svg" alt="">
      </template>
    </van-cell>
    <van-cell class="van-cell" title="云贝中心" is-link>
      <template #icon>
        <img src="~assets/img/leftpopup/shell.svg" alt="">
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style scoped>
.message {
  margin: 10px 0;
}
.message .van-cell:first-child {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.message .van-cell:last-child {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
img {
  width: 20px;
}
</style>