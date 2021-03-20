import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick';
import {Toast, Swipe, SwipeItem, Lazyload } from 'vant';



Vue.config.productionTip = false
//解决移动端300ms延迟
FastClick.attach(document.body);


/**
 * Vue导入vant库
 */
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
//使用懒加载图片
Vue.use(Lazyload, {
  // 占位图
  // loading: require('assets/img/common/placeholder.png')
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
