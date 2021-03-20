<template>
  <div class="new-music-etc">
    <span class="titles" 
      @click="titleClick(index)"
      :class="currentIndex==index?'activeIndex':''"
      v-for="(item, index) in titles" 
      :key="index"
      >{{ item }} |
    </span>
    <div class="more right">
      更多<img src="~assets/img/base/arrow.svg" alt="" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NewMusicEtc',
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
  methods: {
    //点击标题切换
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', this.titles[index]);
    },
  },
}
</script>

<style scoped>
.new-music-etc {
  background-color: #fff;
  padding: 10px 0 20px 18px;
}
.titles {
  color: #999999;
  font-size: 18px;
  font-weight: bolder;
}
.activeIndex {
  color: #000;
}
.more {
  display: flex;
  font-size: 12px;
  line-height: 20px;
  width: 60px;
  height: 20px;
  border: 1px solid #e7e7e7;
  margin-right: 18px;
  border-radius: 10px;
  padding-left: 10px;
}
.more img {
  margin-left: 5px;
  width: 14px;
}
</style>