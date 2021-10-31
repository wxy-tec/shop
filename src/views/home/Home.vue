<template>
  <div>
    <!-- 顶部导航条 -->
        <div class="header-right">
      <div class="header-user-con">
    <nav-bar class="nav-home">
      <div slot="center">首页</div>
      <img slot="right" src="~assets/img/tabbar/home.png" />
      
    </nav-bar>
    <el-dropdown class="user-name" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
<!--            <el-dropdown-item>退出登录</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
        </div>
    <category></category>
    <swiper></swiper>
    <recommend></recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Category from "../category/Category.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import Recommend from "../home/childComps/Recommend";
// import Header from "components/header.vue";

export default {
  name: "Home",
  components: {
    // Header,
    NavBar,
    Category,
    Swiper,
    Recommend
  },
  computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods: {
      // 用户名下拉菜单选择事件
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ms_username');
          this.$router.push('/login');
        }
      }
}
}
</script>

<style scoped>
.nav-home {
  background-color: rgb(248, 94, 73);
  width:1264px;
  color: #fff;
}
 .user-avator {
    margin-left: 20px;
  }
  .header-right {
    float: right;
    padding-right: 235px;
  }
  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
    background-color:rgb(248, 94, 73);
  }
</style>