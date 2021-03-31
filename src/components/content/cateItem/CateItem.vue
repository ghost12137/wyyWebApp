<template>
  <div class="cate-item" v-if="itemList.length > 0">
    <div class="head">
      <span>{{subTtile}}</span>
      <div class="space"></div>
      <div class="more">更多<img src="~/assets/img/base/arrow.svg" alt=""></div>
    </div>
    <scroll :scrollByX="scrollByX" class="cate-scroll">
      <div class="item-list">
        <item 
          v-for="item in itemList" 
          :key="item.id" 
          :item="item"/>
      </div>
    </scroll>
    
  </div>
</template>

<script>
import Scroll from '../../common/scroll/Scroll.vue';
import Item from "./Item.vue"

export default 
{
  name: 'CateItem',
  components: { 
    Item, 
    Scroll 
  },
  data() {
    return {
      scrollByX: true
    };
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    subTtile() {
      return this.itemList.length>0?this.itemList[0].category:'';
    },
  },
}
</script>

<style scoped>
.cate-item {
  margin-bottom: 30px;
}
.head {
  display: flex;
  font-size: 16px;
  color: #000;
  font-weight: bolder;
}
.head span {
  margin-left: 8px;
}
.space {
  flex: 1;
}
.more {
 display: flex;
  font-size: 12px;
  line-height: 20px;
  width: 60px;
  height: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  padding-left: 10px;
  font-weight: normal;
}
.more img {
  width: 12px;
}
.cate-scroll {
  display: flex;
}
.item-list {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
</style>