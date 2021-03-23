<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import MouseWheel from '@better-scroll/mouse-wheel';
import ObserveDOM from '@better-scroll/observe-dom';
import ObserveImage from '@better-scroll/observe-image';
BScroll.use(MouseWheel);
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);
export default {
  name: 'Scroll',
  data() {
    return {
      scorll: null,
    };
  },
  props: {
    scrollByX: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    //创建scroll对象
    if (!this.scorll) {
      this.scorll = new BScroll(this.$refs.wrapper, {
        probeType: 0,   //是否监听滚动条
        scrollX: this.scrollByX,  //横向滚动
        scrollY: !this.scrollByX, //纵向滚动
        click: true,              //支持鼠标点击
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
        observeDOM: true,
        observeImage: true,
      });
      this.scorll.hasHorizontalScroll = this.scrollByX;
    } else {
      this.scorll.refresh();
    }

    // console.log(this.scorll);
  },
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
</style>