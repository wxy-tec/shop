// 注册使用组件，实现页面之间的跳转
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/bace.css";
</style>
