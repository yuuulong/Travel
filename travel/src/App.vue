<template>
  <div id="app">
    <!-- 把路由中内容缓存到内存里，除了Detail这个页面 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
</style>
