// 具体的导航栏信息
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 引入tabbar组件
import TabBar from "components/common/tabbar/TabBar";
// 引入tabbaritem组件
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>