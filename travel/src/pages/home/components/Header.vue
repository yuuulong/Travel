<template>
  <div  class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe61e;</span>

    </div>

  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl';
  .header
    display : flex 
    background $bgColor
    line-height: .86rem
    color: #fff
    .header-left
      width: .64rem
      height: .64rem
      margin-left : .3rem
    .header-input
       flex:1   
       background #fff
       height : .64rem
       line-height : .64rem
       color: #ccc
       margin-top :.12rem
       margin-left :.2rem
       padding-left :.2rem
       border-radius : .1rem
    .header-right
      width: 1.24rem
      text-align :center


  
</style>