<template>
  <div>
    <table>
      <!-- 头部 -->
      <thead>
        <tr>
          <th class="title">商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>合计</th>
          <th>操作</th>
        </tr>
      </thead>
      <shop-item></shop-item>
    </table>
  </div>
</template>

<script>
import ShopItem from "../childShopcart/ShopItem.vue";
export default {
  name: "ShopHead",
  components: {
    ShopItem
  }
};
</script>

<style scoped>
table {
  margin-bottom: 74px;
}
/* 头部 */
thead {
  display: block;
  height: 44px;
  line-height: 44px;
  border-bottom: solid 1px #000;
}
/* .checkbox {
  width: 80px;
} */
.title {
  width: 500px;
}
th {
  width: 200px;
}
</style>
