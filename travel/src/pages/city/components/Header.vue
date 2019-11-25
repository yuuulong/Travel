<template>
  <div class="header">
    <router-link to="/">
    <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    <div class="header-change">
    城市选择

    </div>
  </div>

</template>
<script>
// import axios from "axios";

export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header 
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  color: #fff;
  background: $bgColor
  font-size .32rem
  clear left 
  .header-back
    position absolute
    margin-left .3rem
    color #fff
  .header-change
    text-align: center;

</style>