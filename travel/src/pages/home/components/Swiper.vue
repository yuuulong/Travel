<template>
  <div class="wraper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          // type: 'fraction',
        },
        loop:true,
        autoplay: true
      },
     
      
    };
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet {
  background: #fff;
}

.wraper {
  width: 100%;

  .swiper-img {
    width: 100%;
  }
  .swiper-pagination {
    color #fff
  }
}
</style>