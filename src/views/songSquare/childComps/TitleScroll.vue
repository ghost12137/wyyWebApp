<template>
  <div class="title-scroll">
    <scroll class="scroll" :scrollByX="scrollByX">
      <span 
        v-for="(item, index) in titleList"
        :key="item.name"
        @click="changeTitle(index)"
        :class="{'active': index==currentIndex}">
        {{item.name}}
      </span>
      <div class="background" ref="background"></div>
    </scroll>
    <div class="category">
      <img src="~assets/img/songsquare/titlescroll/category.svg">
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';

export default {
  components: { Scroll },
  name: 'TitleScroll',
  props: {
    titleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      scrollByX: true,
      currentIndex: 0,
      moveX: []  //图标移动位置
    };
  },
  methods: {
    /**
     * 事件响应相关方法
     */
    // 点击标题切换
    changeTitle(index) {
      this.currentIndex = index;
      let x = this.moveX[index];
      //动态添加移动动画
      let background = this.$refs.background;
      background.style.transform = `translateX(${x}px)`;
      this.$emit('titleClick', index);
    },
  },
  created() {
    //计算左移距离
    for (let i = 0; i < 6; ++i) {
      this.moveX.push(i * 79);
    }
  },
}
</script>

<style scoped>
.title-scroll {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  background-color: #fff;
  z-index: 10;
}
.scroll {
  flex: 1;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  line-height: 40px;
}
.scroll span {
  margin-right: 40px;
  font-size: 17px;
  font-weight: bolder;
}
.category {
  width: 50px;
  height: 40px;
  display: flex;
  box-shadow: -2px 0 2px rgba(0, 0, 0, 0.2);
}
.category img {
  width: 30px;
  margin: 0 auto;
}
.active {
  color: #000;
}
.background {
  background-image: linear-gradient(to right, #ff6b69 , #f83f3d);
  width: 30px;
  height: 10px;
  border-radius: 5px;
  position: fixed;
  left: 2px;
  top: 20px;
  z-index: -2;
  transition: transform .3s;
}
</style>