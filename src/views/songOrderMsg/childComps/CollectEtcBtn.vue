<template>
  <div class="collect-etc-btn">
    <div class="btn">
      <img src="~assets/img/collectcommentshare/collect.svg" alt="">
      <span>{{realSubscribedCount}}</span>
    </div>
    <div class="divide"></div>
    <div class="btn">
      <img src="~assets/img/collectcommentshare/comment.svg" alt="">
      <span>{{realCommentCount}}</span>
    </div>
    <div class="divide"></div>
    <div class="btn">
      <img src="~assets/img/collectcommentshare/share.svg" alt="">
      <span>{{realShareCount}}</span>
    </div>
  </div>
</template>

<script>
import { adjustCount } from "common/utils";
export default {
  name:'CollectEtcBtn',
  props: {
    commentCount: {
      type: Number,
      default: 0
    },
    subscribedCount: {
      type: Number,
      default: 0
    },
    shareCount: {
      type: Number,
      default: 0
    },
  },
  computed: {
    realCommentCount() {
      return adjustCount(this.commentCount);
    },
    realSubscribedCount() {
      return adjustCount(this.subscribedCount);
    },
    realShareCount() {
      return adjustCount(this.shareCount);
    },
  },
}
</script>

<style scoped>
.collect-etc-btn {
  width: 92%;
  height: 50px;
  background-color: #fff;
  display: flex;
  padding: 8px 25px;
  border-radius: 25px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
}
.btn {
  display: flex;
  align-items: center;
}
.btn img {
  width: 25px;
  height: 25px;
  margin-right: 8px;
}
.divide {
  width: 2px;
  height: 30px;
  background-color: #e5e5e5;
}
</style>