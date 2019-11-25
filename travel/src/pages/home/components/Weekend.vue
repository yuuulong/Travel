<template>
  <div>
    <div class="title">周末去哪儿玩</div>
    <div class="item-img-wrapper">
      <ul>
        <li class="item" v-for="item of weekendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  }
};
</script>
<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.4rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper
  padding .1rem
.item-img {
  border-radius: 0.2rem;
  width: 100%;
  height: 4rem;
}

.item-info {
  min-width: 0;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  }

</style>