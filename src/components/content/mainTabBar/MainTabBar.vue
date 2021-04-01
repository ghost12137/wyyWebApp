<template>
  <tab-bar id="tab-bar">
    <tab-bar-item path="/find">
      <img slot="item-icon" src="~assets/img/tabbar/find/find.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/find/find_active.svg" alt="">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/player">
      <img slot="item-icon" src="~assets/img/tabbar/player/player.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/player/player_active.svg" alt="">
      <div slot="item-text">播客</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <!-- <tab-bar-item path="/sing">
      <img slot="item-icon" src="~assets/img/tabbar/sing/sing.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/sing/sing_active.svg" alt="">
      <div slot="item-text">K歌</div>
    </tab-bar-item>
    <tab-bar-item path="/yuncun">
      <img slot="item-icon" src="~assets/img/tabbar/yuncun/yuncun.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/yuncun/yuncun_active.svg" alt="">
      <div slot="item-text">云村</div>
    </tab-bar-item> -->
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>