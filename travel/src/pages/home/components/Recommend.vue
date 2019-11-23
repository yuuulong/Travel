<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc}}</p>
          <button class="item-button">查看更多</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: require("../imgs/recommend4.jpg"),
          title: "欢迎参观庄严肃穆的沈阳故宫",
          desc: "不负嵊夏好时光，不负嵊夏好时光观皇家宫苑,赏珍宝文物"
        },
        {
          id: "0002",
          imgUrl: require("../imgs/recommend4.jpg"),
          title: "欢迎参观庄严肃穆的沈阳故宫",
          desc: "不负嵊夏好时光，不负嵊夏好时光观皇家宫苑,赏珍宝文物"
        },
        {
          id: "0003",
          imgUrl: require("../imgs/recommend4.jpg"),
          title: "欢迎参观庄严肃穆的沈阳故宫",
          desc: "不负嵊夏好时光，不负嵊夏好时光观皇家宫苑,赏珍宝文物"
        },
        {
          id: "0004",
          imgUrl: require("../imgs/recommend4.jpg"),
          title: "欢迎参观庄严肃穆的沈阳故宫",
          desc: "不负嵊夏好时光，不负嵊夏好时光观皇家宫苑,赏珍宝文物"
        }
      ]
    };
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

.item {
  display: flex;
  height: 1.9rem;

  .item-img {
    border-radius: 0.2rem;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    min-width: 0;
    flex: 1;
    padding: 0.1rem;

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

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      margin-top: 0.2rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>