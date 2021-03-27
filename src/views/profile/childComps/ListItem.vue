<template>
  <div class="list-item">
    <img v-lazy="listItem.coverImgUrl" class="cover-img">
    <div class="msg">
      <span class="name">{{listItem.name}}</span>
      <span class="count">{{listItem.trackCount}}首</span>
    </div>
    <img src="~assets/img/base/more.svg" class="more">
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.msg {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name {
  color: var(--color-high-text);
  font-size: 16px;
}
.count {
  display: block;
  font-size: 13px;
}
.cover-img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
}
.more {
  width: 15px;
  margin-left: 15px;
}
</style>