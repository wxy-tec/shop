// 把顶部导航栏封装成一个单独的组件
<template>
  <div class="nav-bar">
    <!-- 在slot外面包一层div，用来定义样式，如果直接在slot上面定义样式会产生各种各样的问题 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  /* 一般导航栏的高度都为44px，如果加状态栏的话为64px */
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 100px;
}
.nav-bar img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.center {
  flex: 1;
}
</style>