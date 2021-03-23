<template>
  <div id="profile">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: { NavBar },
  name: 'Profile',
  data() {
    return {};
  },
  methods: {},
}
</script>

<style scoped>
#profile {
  background-color: #f6f6f4;
  height: calc(100vh - 50px);
  overflow: hidden;
}
</style>