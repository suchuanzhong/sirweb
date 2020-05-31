<template>
  <div>
      <Icon type="ios-arrow-up" class="top" @click="totop" v-if="top>400"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      top: 0
    }
  },
  methods: {
    totop () {
      var scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop
        this.top = top
        var speed = top / 4
        if (document.body.scrollTop !== 0) {
          document.body.scrollTop -= speed
        } else {
          document.documentElement.scrollTop -= speed
        }
        if (top === 0) {
          clearInterval(scrollToptimer)
        }
      }, 30)
    }
  }
}
</script>
<style scoped>
  .top{
    font-size: 30px;
    position: fixed;
    right: 5%;
    bottom: 5%;
  }
</style>
