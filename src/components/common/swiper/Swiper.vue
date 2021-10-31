<template>
  <div
    class="banner"
    @mouseover="stopInv()"
    @mouseout="runInv()"
    @touchstart="stopInv()"
    @touchend="runInv()"
  >
  <!-- 自动播放图片 -->
    <div class="item">
      <img :src="dataList[currentIndex]" />
    </div>
    <div class="page" v-if="this.dataList.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li
          v-for="(item,index) in dataList"
          @click="gotoPage(index)"
          :class="{'current':currentIndex == index}"
          :key="index"
        >{{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      dataList: [
        "https://gdp.alicdn.com/imgextra/i4/2360209412/O1CN01KCQJCW2JOkTXAkXRJ_!!2360209412.jpg",
        "https://gdp.alicdn.com/imgextra/i2/2360209412/O1CN01CmE9UO2JOkONErqMm_!!2360209412.jpg",
        "https://gdp.alicdn.com/imgextra/i1/2360209412/O1CN01AE7M3M2JOkTtM4Zb2_!!2360209412.jpg"
      ],
      currentIndex: 0, //默认显示图片
      timer: null //定时器
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.runInv();
    });
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    // 鼠标移入停止自动播放，鼠标移出继续自动播放
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 2000);
    },
    stopInv() {
      clearInterval(this.timer);
    }
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  /* max-width: 1260px; */
  position: relative;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
</style>