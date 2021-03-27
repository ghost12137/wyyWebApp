<template>
  <div class="musicCtrl">
    <!-- <span>创建歌单</span>
    <div class="split"></div>
    <span>收藏歌单</span> -->
    <!-- <span v-for="(item, index) in titles" :key="index">
      {{item}}
    </span> -->
    <div 
      v-for="(item, index) in titles" 
      :key="index" 
      :class="{'split': index==1, 'active': currentIndex==index}"
      @click="indexChange(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'musicCtrl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    classType(index) {
      if (index == 1) return 'split';
    },
  },
  methods: {
    /**
     * 事件处理先关函数
     */
    //点击切换创建歌单
    indexChange(index) {
      this.currentIndex = index;
    },
  },
}
</script>

<style scoped>
.musicCtrl {
  display: flex;
  padding: 10px 20px;
  margin-bottom: 20px;
  justify-content: space-around;
  font-size: 17px;

}
.split {
  width: 1px;
  background-color: #d1d1d1;
}
.active {
  color: #000;
  font-size: 18px;
  font-weight: bolder;
}
</style>