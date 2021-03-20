<template>
  <div class="recommend-vedio">
    <span class="main-title">精选音乐视频</span>
    <div class="more right">
      更多<img src="~assets/img/base/arrow.svg" alt="" />
    </div>
    <scroll class="recommend-vedio-scroll" :scrollByX="scrollByX">
      <div class="vedio-conent">
        <div
          class="vedio-item"
          v-for="(item, index) in recommendVedio"
          :key="index"
        >
          <div class="play">
            <img src="~assets/img/musiclist/play.svg" alt="" />
            <span>{{ getPlayCount(item) }}</span>
          </div>
          <img v-lazy="getImageUrl(item)" />
          <span>{{ getTitle(item) }}</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
export default {
  components: { Scroll },
  name: 'RecommendVedio',
  props: {
    recommendVedio: {
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
    //获取图片
    getImageUrl(item) {
      return item.resource.mlogBaseData.coverUrl;
    },
    //获取标题
    getTitle(item) {
      return item.resource.mlogBaseData.text;
    },
    //获取播放量
    getPlayCount(item) {
      return item.resource.mlogExtVO.playCount;
    }
  },
}
</script>

<style scoped>
.recommend-vedio {
  padding-top: 10px;
  border-radius: 15px;
  background-color: #fff;
  padding-bottom: 20px;
}
.main-title {
  margin-left: 18px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
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
.recommend-vedio-scroll {
  display: flex;
  margin-top: 10px;
}
.vedio-conent {
  display: flex;
  margin-left: 18px;
}
.vedio-item img {
  width: 220px;
  height: 160px;
  /* display: block; */
  margin-right: 10px;
  border-radius: 15px;
}
.vedio-item span {
  color: #000;
  font-size: 13px;
  display: block;
  width: 220px;
  text-align: center;
}
.play {
  position: absolute;
  width: 63px;
  height: 15px;
  background-color: rgba(150, 150, 150, 0.5);
  margin-top: 10px;
  margin-left: 150px;
  border-radius: 7px;
  display: flex;
  font-size: 8px;
  vertical-align: middle;
  line-height: 15px;
  color: #fff;
  /* overflow: hidden; */
  text-overflow: ellipsis;
}
.play img {
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 7px;
  margin-right: 1px;
}
.play span {
  width: 31px;
  font-size: 11px;
  color: #fff;
}
</style>