<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {
    this.$store.getters.isLogin
  },
}
</script>

<style>
@import 'assets/css/base.css';
#app {
  height: 100vh;
}
</style>
