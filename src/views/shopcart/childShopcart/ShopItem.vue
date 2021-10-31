<template>
  <div>
    <tbody v-for="(item, index) in goodsList" :key="index">
      <tr>
        <td class="title">{{ item.introduce }}</td>
        <td>￥{{ item.price }}</td>
        <td>
          <button @click="sub(index)" :disabled="dis">-</button>
          <span>{{ item.counter }}</span>
          <button @click="add(index)">+</button>
        </td>
        <td>￥{{ item.counter * item.price }}</td>
        <td>
          <button class="delete" @click="detele(index)">删除</button>
        </td>
      </tr>
    </tbody>
    <div class="total">
      <div class="totalMoney">总计（不含运费）</div>
      <div class="money">
        已加入购物车商品
        <span>{{num}}件</span>,
        总价格:
        <span>￥{{money}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  data() {
    // 获取store的state中的cart中的商品数据
    return {
      goodsList: this.$store.state.cart,
      dis: false
    };
  },
  computed: {
    money() {
      return this.$store.state.cart
        .filter(item => {
          return item.id;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.counter;
        }, 0);
    },
    num() {
      return this.$store.state.cart
        .filter(item => {
          return item.id;
        })
        .reduce((preValue, item) => {
          return preValue + item.counter;
        }, 0);
    }
  },
  methods: {
    add(index) {
      this.goodsList[index].counter++;
      if (this.goodsList[index].counter > 0) {
        this.dis = false;
      }
    },
    sub(index) {
      this.goodsList[index].counter--;
      if (this.goodsList[index].counter == 0) {
        this.goodsList.splice(index, 1);
      }
    },
    detele(index) {
      // arr.splice(下标，长度)
      this.goodsList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
tbody {
  display: block;
  height: 88px;
  line-height: 88px;
  border-bottom: solid 1px #000;
  text-align: center;
}
.title {
  width: 500px;
}
td {
  width: 200px;
}
td button {
  width: 20px;
}
td span {
  margin-left: 10px;
  margin-right: 10px;
}
.delete {
  width: 60px;
}
.total {
  text-align: center;
  background-color: #eee;
  padding-top: 10px;
  padding-bottom: 20px;
}
.totalMoney {
  font-size: 30px;
}
.money {
  font-size: 20px;
  margin-top: 10px;
}
.money span {
  color: #f00;
}
</style>
