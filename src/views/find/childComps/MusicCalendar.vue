<template>
  <div class="music-calendar">
    <span class="main-title">{{ mainTitle }}</span>
    <div class="today right">
      {{ todayMsg }}
      <img src="~assets/img/base/arrow.svg" alt="" />
    </div>
    <div
      class="calendar-item"
      v-for="(item, index) in calendarItem"
      :key="index"
    >
      <div class="music-msg">
        <span class="calendarToday">{{ getTitle(item) }}</span>
        <span class="hot" :class="getTitle(item) == '今天' ? 'hotToday' : ''">
          {{ getsubTitle(item) }}
        </span>
        <div class="item-msg">
          {{ getItemMsg(item) }}
        </div>
      </div>
      <img v-lazy="getItemImage(item)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicCalendar',
  props: {
    musicCalendar: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    mainTitle() {
      if (this.isExistMusicCalendar()) {
        return this.musicCalendar.uiElement.subTitle.title;
      }
      else return "";
    },
    todayMsg() {
      if (this.isExistMusicCalendar()) {
        return this.musicCalendar.uiElement.button.text;
      } else return "";
    },
    calendarItem() {
      if (this.isExistMusicCalendar()) {
        return this.musicCalendar.creatives;
      } else return [];
    },
  },
  methods: {
    //判断是否存在音乐日历
    isExistMusicCalendar() {
      return Object.keys(this.musicCalendar).length != 0;
    },
    //获取得到的日历数组item的标题
    getTitle(item) {
      const date = new Date();
      let M = date.getMonth() + 1;
      M = M < 10 ? '0' + M : '' + M;
      let D = date.getDate();
      D = D < 10 ? '0' + D : '' + D;
      const day = M + '-' + D;
      return typeof (item.resources[0].uiElement.labelTexts) != "undefined" ? '今天' : day;
    },
    //获取得到的日历数组item的副标题
    getsubTitle(item) {
      let text = item.resources[0].uiElement.labelTexts;
      return typeof (text) != "undefined" ? text[0] : '预告';
    },
    //获取得到的日历数组item的内容
    getItemMsg(item) {
      return item.resources[0].uiElement.mainTitle.title;
    },
    //获取得到的日历数组item的图片
    getItemImage(item) {
      return item.resources[0].uiElement.image.imageUrl;
    },
  },
}
</script>

<style scoped>
.music-calendar {
  padding-top: 10px;
  background-color: #fff;
  padding-bottom: 20px;
}
.main-title {
  margin-left: 18px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
}
.today {
  display: flex;
  font-size: 10px;
  line-height: 20px;
  width: 74px;
  height: 20px;
  border: 1px solid #e7e7e7;
  margin-right: 18px;
  border-radius: 10px;
  padding-left: 10px;
}
.today img {
  margin-left: 5px;
  width: 14px;
}
.calendar-item {
  width: clac(100vw - 18px);
  margin-left: 18px;
  display: flex;
  margin-top: 4px;
}
.music-msg {
 flex: 1;
}
.calendar-item img {
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin-right: 15px;
}
.calendarToday {
  font-size: 14px;
  margin-right: 10px;
}
.hot {
  font-size: 12px;
  background-color: #f2f2f2;
  display: inline-block;
  padding: 4px;
  border-radius: 6px;
}
.hotToday {
  background-color: #fffcf7;
  color: #f5ac05;
}
.item-msg {
  width: 200px;
  overflow: hidden;
  height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 8px 0;
  color: #000;
}
</style>