import Vue from 'vue'
import VueRouter from 'vue-router'

const Find = () => import('views/find/Find');
const Player = () => import('views/player/Player');
const Profile = () => import('views/profile/Profile');
const Sing = () => import('views/sing/Sing');
const Yuncun = () => import('views/yuncun/Yuncun');


Vue.use(VueRouter)

const routes = [
 {
   path: '',
   redirect: '/find',
 },
 {//首页
   path: '/find',
   name: 'find',
   component: Find,
 },
 {//播客
   path: '/player',
   name: 'player',
   component: Player,
 },
 {//我的
   path: '/profile',
   name: 'profile',
   component: Profile,
 },
 {//k歌
   path: '/sing',
   name: 'sing',
   component: Sing,
 },
 {//云村
   path: '/yuncun',
   name: 'yuncun',
   component: Yuncun,
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
