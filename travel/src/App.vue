<template>
  <div id="app">
    <!-- 把路由中内容放到内存里 -->
    <keep-alive>
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
