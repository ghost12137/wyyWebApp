import Vue from 'vue'
import VueRouter from 'vue-router'

// 底部导航栏
const Find = () => import('views/find/Find');
const Player = () => import('views/player/Player');
const Profile = () => import('views/profile/Profile');
const Sing = () => import('views/sing/Sing');
const Yuncun = () => import('views/yuncun/Yuncun');
// 登录
const Login = () => import('views/login/Login');
//每日推荐
const DailyRecommend = () => import('views/dailyrecommend/DailyRecommend');
//歌单广场
const SongSquare = () => import('views/songSquare/SongSquare');
//歌单详情
const SongOrderMsg = () => import('views/songOrderMsg/SongOrderMsg');

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/find',
  },
  { //首页
    path: '/find',
    name: 'find',
    component: Find,
  },
  { //播客
    path: '/player',
    name: 'player',
    component: Player,
  },
  { //我的
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  { //k歌
    path: '/sing',
    name: 'sing',
    component: Sing,
  },
  { //云村
    path: '/yuncun',
    name: 'yuncun',
    component: Yuncun,
  },
  { //登录
    path: '/login',
    name: 'login',
    component: Login
  },
  { //每日推荐
    path: '/dailyrecommend',
    name: 'dailyrecommend',
    component: DailyRecommend
  },
  { //歌单广场
    path: '/songsquare',
    name: 'songsquare',
    component: SongSquare
  },
  { //歌单详情
    path: '/songordermsg',
    name: 'songordermsg',
    component: SongOrderMsg
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router