<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wraper">
          <div class="button">{{ this.currentCity }}</div>
        </div>
        
      </div>
    </div>
    
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div @click="handleCityClick(item.name)" class="button-wraper" v-for="item of hotCities" :key="item.id">
          <div class="button">{{item.name}}</div>
        </div>
        
      </div>
    </div>
    <div class="area" v-for="(items, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div @click="handleCityClick(item.name)" class="item border-bottom" v-for="item of items" :key="item.id">{{item.name}}</div>
      
      </div>
      
    </div>
    </div>
  </div>
</template>
<script>
// 引入城市选择字母插件
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    
    letter: String,
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  
  watch : {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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