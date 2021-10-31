<template>
  <div>
    <ul>
      <li>       
        <a href="http://localhost:8085/recommend">女装</a>
        <a href="http://localhost:8085/recommend">家居</a>
        <a href="">母婴</a>
        <a href="">童装</a>
        <a href="">玩具</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    line-height: 32px;
    height: 50px;
    /* padding-left: 550px;
    padding-right: 400px; */
    padding-top: 10px;
    /* padding-bottom: 1px; */
    position: relative;
    font-size: 24px;
    /* font-weight: 400; */
    /* width: 1246px; */
    color: #666;
}
</style>