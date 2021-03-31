<template>
  <div id="find">
    <nav-bar class="nav-bar">
      <div slot="left" @click="leftPopClick" class="left-pop">
        <img src="~assets/img/navbar/category.svg" alt="" />
      </div>
      <div slot="center">
        <search class="search" :placeHolder="searchPlaceHolder" />
      </div>
      <div slot="right"><img src="~assets/img/navbar/micro.svg" alt="" /></div>
    </nav-bar>
    <!-- 个人信息等左弹出层 -->
    <van-popup
      class="left-van-popup"
      position="left"
      :style="{height: '100vh',width: '70%'}" 
      v-model="leftPopUp">
      <left-pop @logoutBtnClick="changePopStatus"/>
    </van-popup>
    <scroll class="find-wrapper">
      <!-- 首页轮播图 -->
      <find-swiper :banners="banners" />
      <!-- 圆形按钮 -->
      <circle-scroll :circle-btns="circleBtns" />
      <!-- 推荐歌单 -->
      <music-list
        :music-list="recommendMusicList"
        :mainTitle="'推荐歌单'"
        class="music-list"
      />
      <!-- 私人订制 -->
      <persional-tailor-list class="persional-tailor-list"
        :personal-title="personalTitle"
        >
        <personal-list :personal-list="personalTailor.creatives" />
      </persional-tailor-list>
      <!-- 精选音乐视频 -->
      <recommend-vedio class="recommend-vedio"
        :recommend-vedio="recommendVedio"/>
      <!-- 雷达歌单 -->
      <music-list
        :music-list="radarSongList"
        :mainTitle="'雷达歌单'"
        class="music-list radar-list"
      />
      <!-- 音乐日历 -->
      <music-calendar class="music-calendar"
        :music-calendar="musicCalendar"
      />
      <!-- 专属场景歌单 -->
      <music-list 
        :music-list="exclusiveSceneSongList"
        :mainTitle="'专属场景歌单'"/>
      <!-- 新歌、新碟等 -->
      <new-music-etc
        class="new-music-etc" 
        :titles="['新歌', '新碟', '数字专辑']" 
        @titleClick="newMusicDJClick">
        <personal-list :personal-list="newMusicEtcArray" :key="newMusicEtcTitle"/>
      </new-music-etc>
      <!-- 二十四小时播客 -->
      <twenty-hour-player class="twenty-hour-player" 
        :twenty-hour-player="twentyHourPlayer"
        :titles="['广播电台', '二十四小时播客']"/>
        <!-- 博客合集 -->
        <music-list class="player-collection" 
          :music-list="playerCollection"
          :mainTitle="'播客合集'"/>
        <!-- 视频合集 -->
        <music-list class="vedio-collection" 
          :music-list="vedioCollection"
          :mainTitle="'视频合集'"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';
import MusicList from 'components/content/musicList/MusicList';
import PersonalList from 'components/content/PersionalList/PersonalList';

import Search from './childComps/Search'
import FindSwiper from './childComps/FindSwiper';
import CircleScroll from './childComps/CircleScroll';
import PersionalTailorList from './childComps/PersionalTailorList';
import RecommendVedio from './childComps/RecommendVedio';
import MusicCalendar from './childComps/MusicCalendar';
import NewMusicEtc from './childComps/NewMusicEtc';
import TwentyHourPlayer from './childComps/TwentyHourPlayer';

import LeftPop from '../leftpop/LeftPop.vue';

import { getFindMultiData, getFindCircleData } from 'network/find';
import { Toast } from 'vant';

export default {
  name: 'Find',
  components: {
    NavBar,
    Search,
    FindSwiper,
    Scroll,
    CircleScroll,
    MusicList,
    PersionalTailorList,
    PersonalList,
    RecommendVedio,
    MusicCalendar,
    NewMusicEtc,
    TwentyHourPlayer,
    LeftPop,
  },
  data() {
    return {
      searchPlaceHolder: '晚风 最近有点火哦',
      leftPopUp: false,   //个人信息左弹出层显示
      banners: [],  //首页轮播图
      circleBtns: [],//首页圆形按钮
      recommendMusicList: [], //首页推荐歌单
      personalTailor: {}, //首页私人订制
      recommendVedio: [],//首页推荐音乐视频
      radarSongList: [], //雷达歌单
      musicCalendar: {}, //音乐日历
      exclusiveSceneSongList: [], //专属场景歌单
      newMusicEtc: [],   //新歌、新碟、数字专辑
      newMusicEtcTitle: '新歌',//新歌、新碟等的标题
      twentyHourPlayer: [], //二十四小时播客
      playerCollection: [], //播客合集
      vedioCollection: [], //视频合集
    };
  },
  created() {
    //从服务器请求首页-发现的所有信息
    this.getFindMultiData();
    //请求首页圆形图标的数据
    this.getFindCircleData();

  },
  computed: {
    //返回私人订制的标题
    personalTitle() {
      if (Object.keys(this.personalTailor).length != 0) {
        return this.personalTailor.uiElement.subTitle != null ? this.personalTailor.uiElement.subTitle.title : '';
      }
    },
    //返回新歌、新碟等的信息数组
    newMusicEtcArray() {
      if (this.newMusicEtc.length != 0) {
        let array = [];
        array = this.newMusicEtc.filter(item => item.uiElement.mainTitle.title == this.newMusicEtcTitle);
        return array;
      }
    },
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
    //新歌、新碟标题点击事件
    newMusicDJClick(title) {
      this.newMusicEtcTitle = title;
    },
    /**
     * 网络请求相关方法
     */
    //请求首页全部信息
    getFindMultiData() {
      Toast.loading({
        duration: 0, //持续加载loading
        forbidClick: true,  //是否禁止背景点击
        message: '加载中'
      });
      getFindMultiData()
        .then(res => {
          if (res.code == 200) {
            console.log("resdata in find：", res.data);
            //将请求的数据放入data中
            for (let i = 0; i < res.data.blocks.length; ++i) {
              switch (i) {
                case 0: 
                  //轮播图
                  this.banners = res.data.blocks[0].extInfo.banners;
                  break;
                case 1:
                  //推荐歌单
                  this.recommendMusicList = res.data.blocks[1].creatives;
                  break;
                case 3:
                  //私人订制
                  this.personalTailor = res.data.blocks[3];
                  break;
              }
            }
            /* //推荐音乐视频
            this.recommendVedio = res.data.blocks[2].extInfo;
            //雷达歌单
            this.radarSongList = res.data.blocks[3].creatives;
            //音乐日历
            this.musicCalendar = res.data.blocks[4];
            //专属场景歌单
            this.exclusiveSceneSongList = res.data.blocks[6].creatives;
            //新歌、新碟、数字专辑
            this.newMusicEtc = res.data.blocks[7].creatives;
            //二十四小时播客
            this.twentyHourPlayer = res.data.blocks[9].creatives;
            //播客合集
            this.playerCollection = res.data.blocks[10].creatives;
            //视频合集
            this.vedioCollection = res.data.blocks[11].creatives; */
            Toast.clear();
          }
        })
        .catch(err => {
          Toast.clear();
          Toast.fail('url等错误');
          console.log('getFindMultiData ERROR in Find.vue: ', err);
        });
    },
    //请求首页圆形图标的数据
    getFindCircleData() {
      Toast.loading({
        duration: 0, //持续加载loading
        forbidClick: true,  //是否禁止背景点击
        message: '加载中'
      });
      getFindCircleData()
        .then(res => {
          this.circleBtns = res.data;
          Toast.clear();
        })
        .catch(err => {
          Toast.clear();
          Toast.fail('url等错误');
          console.log('getFindCircleData ERROR in Find.vue: ', err);
        });
    },
  },
}
</script>

<style scoped>
#find {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.left-van-popup {
  background-color: #f5f5f5;
}
.find-wrapper {
  /* overflow: hidden; */
  width: 100%;
  /* margin: 0 auto; */
  background-color: #f5f5f5;
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
.music-list {
  background-color: #fff;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.persional-tailor-list {
  margin-bottom: 20px;
}
.recommend-vedio {
  margin-bottom: 20px;
}
.radar-list {
  border-radius: 15px;
}
.music-calendar {
  border-radius: 15px;
  margin-bottom: 20px;
}
.new-music-etc {
  border-radius: 15px;
  margin-bottom: 20px;
}
.twenty-hour-player {
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>
