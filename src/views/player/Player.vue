<template>
  <div id="player">
    <nav-bar class="nav-bar">
      <div slot="left" @click="leftPopClick">
        <img src="~assets/img/navbar/category.svg" alt="">
      </div>
      <div slot="right">
        <img src="~assets/img/base/search.svg" alt="">
      </div>
    </nav-bar>
    <van-popup 
      class="left-van-popup"
      position="left"
      :style="{height: '100vh',width: '70%'}" 
      v-model="leftPopUp">
      <left-pop @logoutBtnClick="changePopStatus"/>
    </van-popup>
    <div class="container">
      <scroll class="player-scroll">
        <!-- 显示分类图标 -->
        <cate :cate-list="cateList"/>
        <!-- 显示具体分类的电台 -->
        <cate-item 
          v-for="item in cateItem"
          :key="item.id"
          :item-list="item"/>

    </scroll>
    </div>
  </div>
</template>

<script>
import { getCateList, getCateItemList } from "network/player";
import { Toast } from 'vant';
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';
import CateItem from 'components/content/cateItem/CateItem';

import LeftPop from '../leftpop/LeftPop';

import Cate from './childComps/Cate';

export default {
  components: { 
    NavBar,
    LeftPop,
    Scroll,
    Cate,
    CateItem,
  },
  name: 'Player',
  data() {
    return {
      leftPopUp: false,   //个人信息左弹出层显示
      cateList: [],       //分类的图标
      cateItem: [],       //存放具体分类的信息
    };
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    //点击左上角更多左弹出层显示事件
    leftPopClick() {
      // console.log('leftclick');
      this.leftPopUp = true;
    },
    //监听到退出点击事件，隐藏弹出层
    changePopStatus() {
      this.leftPopUp = false;
    },
    /**
     * 网络请求相关方法
     */
    //请求播客分类数据
    async getCateList() {
      await getCateList()
      .then(res => {
        this.cateList = res.categories;

        this.getCateItemList();
      })
      .catch(err => {
        console.log("getCateList in player: ", err);
      })
    },
    //获取具体分类推荐
    getCateItemList() {
      if (this.cateList.length == 0) return;
      for (let item of this.cateList) {
        let type = item.id;
        getCateItemList(type)
        .then(res => {
          this.cateItem.push(res.djRadios);
        })
        .catch(err => {
          console.log('getCateItemList in player: ', err);
        })
      }
    },
  },
  async created() {
    Toast.loading({
      duration: 0, //持续加载loading
        forbidClick: true,  //是否禁止背景点击
        message: '加载中'
    });
    //请求播客分类数据
    await this.getCateList();
    //获取具体分类推荐
    // this.getCateItemList();
    Toast.clear();
  },
}
</script>

<style scoped>
#player {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.nav-bar {
  background-color: #ffffff;
  z-index: 9;
  position: relative;
}
.nav-bar img {
  vertical-align: middle;
  width: 25px;
}
.container {
  width: 90%;
  height: calc(100% - 46px);
  margin: 0 auto;
  /* overflow: hidden; */
}
.player-scroll {
  width: 100%;
  background-color: #f5f5f5;
}
</style>
