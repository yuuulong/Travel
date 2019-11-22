<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" 
             v-for="item of page" 
             :key="item.id">
          <img class="icon-img" :src="item.imgUrl"/>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data () {
    return {
      iconList: [
        {
          id: "001",
          imgUrl: require("../imgs/piao.png"),
          desc: '景点门票'
        },
        {
          id: "002",
          imgUrl: require("../imgs/flight.png"),
          desc: '滑雪季'
        },
        {
          id: "003",
          imgUrl: require("../imgs/hotel.png"),
          desc: '泡温泉'
        },
        {
          id: "004",
          imgUrl: require("../imgs/package.png"),
          desc: '动植物园'
        },
        {
          id: "005",
          imgUrl: require("../imgs/piao.png"),
          desc: '景点门票'
        },
        {
          id: "006",
          imgUrl: require("../imgs/hotel.png"),
          desc: '农家院'
        },
        {
          id: "007",
          imgUrl: require("../imgs/train.png"),
          desc: '景点门票'
        },
        {
          id: "008",
          imgUrl: require("../imgs/flight.png"),
          desc: '冰雪世界'
        },{
          id: "009",
          imgUrl: require("../imgs/package.png"),
          desc: '中餐厅'
        },{
          id: "010",
          imgUrl: require("../imgs/train.png"),
          desc: '一日游'
        },
      ]
    };
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.icons {
  // overflow hidden
  // height 0
  // padding-bottom 50%
  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-top: 3%;
    padding-bottom: 20%;

    .icon-img {
      display: block;
      width: 50%;
      margin: 0 auto;
    }
  }

  .icon-desc {
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
    overflow hidden;
    white-space nowrap;
    text-overflow ellipsis
  }
}
</style>