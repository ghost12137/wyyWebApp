<template>
  <div class="title-scroll">
    <scroll class="scroll" :scrollByX="scrollByX"></scroll>
    <div class="category">
      <img src="" alt="">
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
      scrollByX: true
    };
  },
}
</script>

<style scoped>
.title-scroll {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex
}
.scroll {
  flex: 1;
}
</style>