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
      scroll: null,
    };
  },
  props: {
    scrollByX: {
      type: Boolean,
      default: false
    },
    isListen: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    //创建scroll对象
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.isListen,   //是否监听滚动条
        scrollX: this.scrollByX,  //横向滚动
        scrollY: !this.scrollByX, //纵向滚动
        click: false,              //支持鼠标点击
        preventDefault: false,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
        observeDOM: true,
        observeImage: true,
        pullUpLoad: this.pullUpLoad,
      });
      this.scroll.hasHorizontalScroll = this.scrollByX;
    } else {
      this.scroll.refresh();
    }
    //监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position);
    });

    if (this.pullUpLoad) {
      //3、监听上拉事件
      this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
    });
    }

    // console.log(this.scroll);
    this.scroll.refresh();
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x,y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log('-----------');
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
}
</script>

<style scoped>
.wrapper {
  height: calc(100%);
  position: relative;
}
</style>