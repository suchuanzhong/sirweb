<template>
<div class="number-grow-warp">
   <span ref="numberGrow" :data-time="time" class="number-grow" :class="{'m_number-grow':!showBol}" :data-value="value">0</span>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 10
    },
    showBol: {
      type: Boolean
    }
  },
  data () {
    return {
      bol: false
    }
  },
  methods: {
    numberGrow (ele) {
      let _this = this

      let step = (_this.value * 10) / (_this.time * 10)
      let current = 0
      let start = 0
      let t = setInterval(function () {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start
        ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
      }, 110)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.bol) {
        return
      }
      if (scrollTop > document.documentElement.clientHeight * 0.7 || !this.showBol) {
        this.bol = true
        this.numberGrow(this.$refs.numberGrow)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true) // 监听（绑定）滚轮滚动事件
  }
}
</script>
<style scoped>
@font-face {
  font-family: "Impact";
  src: url('../../static/Impact.ttf');
}
.number-grow-warp{
  transform: translateZ(0);
  display: inline-block;
}
.number-grow {
  font-family:Impact ;
  color: #fff;
  display: block;
}
/* mobile */
.m_number-grow{
  font-size: 22px;
  line-height: 22px;
}
</style>
