<template>
  <div>
    <!-- 导航条 -->
    <div>
      <nav-bar class="nav-details">
        <div class="nav-left" slot="left" @click="goHome">
          <img src="~assets/img/detail/return.png" />
          返回
        </div>
        <div slot="center">详情页</div>
      </nav-bar>
    </div>
    <!-- 图片 -->
    <div class="pic">
      <img :src="this.$store.state.goodsList[good_id - 1].image" />
    </div>
    <!-- 文字 -->
    <div class="fonts">
      <!-- 标题 -->
      <div class="titles">
        <h3 slot="titles">{{ this.$store.state.goodsList[good_id - 1].introduce }}</h3>
      </div>
      <!-- 价格 -->
      <div class="price">
        <h2 slot="price">￥{{ this.$store.state.goodsList[good_id - 1].price }}</h2>
      </div>
      <!-- 购买数量 -->
      <div class="num">
        <div>
          <button @click="sub(good_id)" :disabled="dis">-</button>  
          <span>
            购买数量：{{
            this.$store.state.goodsList[good_id - 1].counter
            }}
          <button @click="add(good_id)">+</button>
          </span>
          
        </div>
        <!-- 购物车 ，当商品数量大于0时，点击按钮加入购物车-->
        <button
          class="stopcart"
          :class="{ activeBgColor: isActive == true }"
          @click="addToCart"
        >加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Details",
  data() {
    return {
      isActive: false,
      // 通过首页recommend.vue组件中传入的params，获取点击商品的id
      good_id: this.$route.params.goodId,
      // 当点击+和-按钮时，购买数量不能少于0
      dis: true
    };
  },
  components: {
    NavBar
  },
  methods: {
    add(good_id) {
      this.$store.state.goodsList[good_id - 1].counter++;
      if (this.$store.state.goodsList[good_id - 1].counter >= 0) {
        this.dis = false;
      }
    },
    sub(good_id) {
      this.$store.state.goodsList[good_id - 1].counter--;
      if (this.$store.state.goodsList[good_id - 1].counter == 0) {
        this.dis = true;
      } else {
        this.dis = false;
      }
    },
    goHome() {
      this.$router.push("/home");
    },
    // 点击加入购物车，当cart中不存在次商品且商品数量大于0时，将商品信息添加到cart中，如果已经存在此商品，按钮变绿
    addToCart() {
      if (this.$store.state.goodsList[this.good_id - 1].counter >= 1) {
        this.isActive = true;
        //传入商品id
        const goodsListID = this.$store.state.goodsList[this.good_id - 1].id;
        const cart = this.$store.state.cart;
        const result = cart.find(ele => ele.id == goodsListID);
        if (result == undefined) {
          cart.push(this.$store.state.goodsList[this.good_id - 1]);
        } else {
          document.querySelector(".stopcart").innerHTML = "请勿重复添加";
        }
      }
    }
  }
};
</script>

<style scoped>
.nav-details {
  background-color: rgb(248, 94, 73);
  color: #fff;
}
.nav-details div img {
  width: 25px;
  position: relative;
  top: 6px;
}
.nav-left {
  margin-left: 10px;
}
.pic {
  text-align: center;
  margin-top: 20px;
}
.pic img {
  width: 300px;
  height: 300px;
}
.fonts {
  text-align: center;
  margin-top: 20px;
}

.price {
  color: #f00;
}
.num {
  margin-top: 6px;
  position: relative;
  /* margin-bottom: 100px; */
}
.num span {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
}
button {
  width: 30px;
}
.stopcart {
  width: 150px;
  height: 30px;
  margin-top: 10px;
  color: #fff;
  background-color: rgb(248, 94, 73);
}
.activeBgColor {
  background-color: rgb(90, 138, 76);
}
</style>
