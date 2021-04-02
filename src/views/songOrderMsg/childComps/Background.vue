<template>
  <div class="background">
        <div class="left-part">
          <img v-lazy="songOrderImg">
          <div class="play-count">
            <img src="~assets/img/base/playBtn_white.svg" alt="">
            <span>{{realPlayCount}}</span>
          </div>
        </div>
        <div class="right-part">
          <div class="desp">
            <div class="name">{{name}}</div>
            <div class="description">
              <div class="desp-msg">
                {{description}}
              </div>
              <img src="~/assets/img/base/arrow.svg" alt="">
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { adjustCount } from "common/utils";
export default {
  name:'Background',
  props: {
    playCount: {
      type: Number,
      default: 0
    },
    songOrderImg: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: ''
    },
  },
  computed: {
    realPlayCount() {
      return adjustCount(this.playCount);
    }
  },
}
</script>

<style scoped>
.background {
  width: 100vw;
  height: 200px;
  background-color: var(--color-back);
  /* margin-bottom: p; */
  display: flex;
}
.left-part {
  width: 45%;
  display: flex;
  align-items: center;
}
.left-part img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 20px;
}
.play-count {
  padding: 5px 5px;
  border-radius: 10px;
  display: flex;
  position: absolute;
  background-color: rgba(100, 100, 100,.5);
  left: 74px;
  top: 46px;
}
.play-count img {
  width: 10px;
  height: 10px;
  margin-right: 4px;
}
.play-count span {
  color: #fff;
  font-size: 8px;
}
.right-part {
  width: 55%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.desp {
  width: 90%;
  height: 120px;
  margin-right: 11px;
  position: relative;
}
.name {
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
}
.description {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
}
.desp-msg {
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
}
.description img {
  width: 18px;
  height: 18px;
}
</style>