<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe61e;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city']),
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  background: $bgColor;
  line-height: 0.86rem;
  color: #fff;

  .header-left {
    width: 0.64rem;
    height: 0.64rem;
    margin-left: 0.3rem;
  }

  .header-input {
    flex: 1;
    background: #fff;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #ccc;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem
    text-align: center;
    color  #fff
  }
  
}
</style>