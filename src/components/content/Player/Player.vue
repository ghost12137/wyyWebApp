<template>
  <div class="player">
    <scroll class="list-scroll"
      :scrollByX="scrollByX">
      <div class="list-content">
        <player-item 
          class="player-item"
          v-for="(item, index) in list"  
          :key="getKey(item, index)"
          :list-item="item"
        />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../common/scroll/Scroll';
import PlayerItem from './PlayerItem';
export default {
  components: { Scroll, PlayerItem },
  name: 'Player',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      scrollByX: true,
    };
  },
  methods: {
    //获取v-for的key值
    getKey(item, index) {
      return item.uiElement!=null?item.uiElement.mainTitle.title+index:index;
    },
  }
}
</script>

<style scoped>
.list-scroll {
  display: flex;
}
.list-content {
  margin-top: 10px;
  display: flex;
}
</style>