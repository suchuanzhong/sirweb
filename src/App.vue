<template>
  <div id="app">
    <!-- //需要缓存时 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive" exclude="banner"></router-view>
    </keep-alive>
    <!-- //不需要缓存时 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.$store.state.screenval = document.documentElement.clientWidth // 窗口宽度
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",Arial,sans-serif;
}
</style>
