<template>
  <div>
    <router-link v-show="showAbs" to="/" tag="div" class="header-abs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <router-link :style="opacityStyle" v-show="!showAbs" to="/" tag="div" class="header-fixed">
      <span class="iconfont header-fixed-back">&#xe624;</span>
      景点详情
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle : {
        opacity: 0
      }
    }
  },
  methods:{
    handleScroll () {
      const top = document.documentElement.scrollTop
      if(top > 60) {
        const opacity = top / 140
        this.opacityStyle = {
          opacity,
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .6rem
    height .6rem
    line-height .6rem
    text-align center
    border-radius .4rem
    background rgba(0,0,0,.2)
    .header-abs-back
      color #fff
      font-size .3rem
  .header-fixed
    position fixed
    top 0
    width 100%
    height .65rem
    line-height .65rem
    text-align center
    color #fff
    background $bgColor
    .header-fixed-back
      position absolute
      left .2rem
      font-size .3rem
    
</style>