<template>
  <div class="search">
    <img src="~assets/img//find/search.svg" alt="">
    <span class="text">{{placeHolder}}</span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    placeHolder: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>
img {
  width: 25px;
  vertical-align: middle;
  margin-right: 8px;
}
.search {
  background-color: #fff;
  text-align: left;
  border-radius: 22px;
  padding-left: 22px;
}
</style>