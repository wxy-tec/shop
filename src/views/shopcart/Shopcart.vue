<template>
  <div>
    <!-- 顶部导航条 -->
    <nav-bar class="nav-home">
      <div class="nav-left" slot="left" @click="goHome">
        <img src="~assets/img/detail/return.png" />
        返回
      </div>
      <div slot="center">购物车</div>
    </nav-bar>
    <shop-head></shop-head>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
// 引入商品信息
import ShopHead from "../shopcart/childShopcart/ShopHead.vue";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    ShopHead
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.nav-home {
  background-color: rgb(248, 94, 73);
  color: #fff;
}
.nav-home div img {
  width: 25px;
  position: relative;
  top: 6px;
}
.nav-left {
  margin-left: 10px;
}
</style>