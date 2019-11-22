<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            require('../imgs/lunbo1.jpg')
        },
        {
          id: "002",
          imgUrl:
          require('../imgs/lunbo2.jpg')
        },
        {
          id: "003",
          imgUrl:
          require('../imgs/lunbo3.jpg')
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wraper {
  width: 100%;

  .swiper-img {
    width: 100%;
  }
}
</style>