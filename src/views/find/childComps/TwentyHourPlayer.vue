<template>
  <div class="twenty-hour">
    <span class="titles" 
      @click="titleClick(index)"
      :class="currentIndex==index?'activeIndex':''"
      v-for="(item, index) in titles" 
      :key="item">
      {{item}} | 
    </span>
    <player :list="twentyHourPlayer"/>
  </div>  
</template>

<script>
import Player from 'components/content/Player/Player.vue';
export default {
  components: { Player },
  name: 'TwentyHourPlayer',
  props: {
    twentyHourPlayer: {
      type: Array,
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 1,
    }
  },
  methods: {
    //点击标题切换
    titleClick(index) {
      this.currentIndex = index;
    },
  },
}
</script>

<style scoped>
.twenty-hour {
  padding: 10px 0 20px 18px;
  background-color: #fff;
}
.titles {
  color: #999999;
  font-size: 18px;
  font-weight: bolder;
}
.activeIndex {
  color: #000;
}
</style>