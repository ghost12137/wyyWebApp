<template>
  <div class="pesonal-list-item">
    <div class="single-item" v-for="(item, index) in itemList" :key="index">
      <img v-lazy="itemImage(item)" />
      <div class="single-item-explain">
        <span>{{ itemMainTile(item) }}</span> -
        {{ itemSubTitle(item) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalListItem',
  props: {
    personalListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      itemList: [],
    };
  },
  methods: {
    itemImage(item) {
      return item.uiElement.image != null ? item.uiElement.image.imageUrl : '';
    },
    itemMainTile(item) {
      return item.uiElement.mainTitle != null ? item.uiElement.mainTitle.title : '';
    },
    itemSubTitle(item) {
      return item.uiElement.subTitle != null ? item.uiElement.subTitle.title : '';
    }
  },
  created() {
    this.itemList = this.personalListItem.resources;
  },
}
</script>

<style scoped>
.pesonal-list-item {
  width: 325px;
}
.single-item {
  display: flex;
  margin-bottom: 10px;
}
.single-item img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: block;
}
.single-item-explain {
  flex: 1;
  font-size: 11px;
  /* line-height: 60px; */
  margin-top: 20px;
  margin-left: 3px;
}
.single-item-explain span {
  font-size: 13px;
  color: #000;
  font-weight: 700;
}
</style>