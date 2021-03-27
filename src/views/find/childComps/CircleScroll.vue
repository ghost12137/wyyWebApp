<template>
  <scroll class="circle-scroll" :scrollByX="scrollByX">
    <div class="content">
      <div v-for="(item, index) in circleBtns" 
        :key="item.id"
        @click.stop="circleClick(index)"
        class="scroll-item">
        <img v-lazy="item.iconUrl" />
        <span>{{item.name}}</span>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import { Toast } from 'vant';

export default {
  name: 'CircleScroll',
  components: {
    Scroll,
  },
  data() {
    return {
      scrollByX: true, //判断是否横向滚动
      currentIndex: -1, //点击的index
    };
  },
  props: {
    circleBtns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    circleClick(index) {
      // this.$emit('circleClick', index);
      if (!this.$store.state.isLogin)
        Toast.fail('请先登录');
      else 
        this.$router.replace('/dailyrecommend');
    },
  },
}
</script>

<style scoped>
.circle-scroll {
  /* width: 100% !important; */
  display: flex;
  margin-left: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.content {
  display: flex;
  overflow: hidden;
}
.scroll-item {
  margin-right: 10px;
  font-size: 10px;
  text-align: center;
}
.scroll-item img {
  height: 55px;
  width: 55px;
  background-color: #fff1f1;
  border-radius: 50%;
  margin-bottom: 2px;
}
</style>