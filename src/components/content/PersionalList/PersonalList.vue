<template>
  <div class="personal-list">
    <scroll :scrollByX="scrollByX" class="personal-scroll" v-if="personalList.length>0">
      <div class="personal-content">
        <personal-list-item v-for="(item, index) in personalList" :key="getKey(item, index)" :personal-list-item="item"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../common/scroll/Scroll'
import PersonalListItem from './PersonalListItem.vue';
export default {
  name: 'PersonalList',
  components: {
    Scroll,
    PersonalListItem,
  },
  data() {
    return {
      scrollByX: true,
    };
  },
  props: {
    personalList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //获取v-for的key值
    getKey(item, index) {
      return item.mainTitle!=null?item.mainTitle.title+index:index;
    },
  },
}
</script>

<style scoped>
.personal-list {
  padding-top: 10px;
}
.personal-scroll {
  display: flex;
  /* width: 100%; */
}
.personal-content {
  display: flex;
  margin-left: 18px;
}
</style>