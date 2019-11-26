<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wraper">
          <div class="button">沈阳</div>
        </div>
        
      </div>
    </div>
    
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wraper" v-for="item of hotCities" :key="item.id">
          <div class="button">{{item.name}}</div>
        </div>
        
      </div>
    </div>
    <div class="area" v-for="(items, key) of cities" :key="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="item of items" :key="item.id">{{item.name}}</div>
      
      </div>
      
    </div>
    </div>
  </div>
</template>
<script>
// 引入城市选择字母插件
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom, .border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}
.list
  position absolute
  overflow hidden
  top 1.58rem
  bottom 0
  left 0
  right 0
.title {
  line-height: 0.4rem;
  background: #eee;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wraper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}
.item-list
  .item
    line-height .54rem
    padding-left .2rem

</style>