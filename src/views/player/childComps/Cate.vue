<template>
  <div class="cate">
    <div class="cate-list" 
      v-for="item in cateList"
      :key="item.id"
      >
      <div class="cate-item">
        <img v-lazy="item.pic56x56Url">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cate',
  props: {
    cateList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
}
</script>

<style scoped>
.cate {
  padding: 10px 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cate-item {
  text-align: center;
  font-size: 12px;
}
.cate-item img{
  width: 70px;
}
.cate-item span {
  display: block;
  text-align: center;
}
</style>