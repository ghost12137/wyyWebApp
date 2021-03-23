import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick';
import {
  Toast,
  Swipe,
  SwipeItem,
  Lazyload,
  Popup,
  Cell,
  CellGroup,
  Button,
  Field
} from 'vant';



Vue.config.productionTip = false
//解决移动端300ms延迟
FastClick.attach(document.body);


/**
 * Vue导入vant库
 */
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
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
