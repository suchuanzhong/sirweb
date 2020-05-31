<template>
    <div >
        <!-- <div class="imgbox" :style="{width:screenw+'px',height:screenh+'px'}">
            <div class="contant" :style="{left:leftval+'px',width:screenw*5+'px',height:screenh+'px'}">
                <img :style="{width:screenw+'px'}"
                    v-for="(item,index) in imgarr"
                    :key="index"
                    :src="item.imgs" alt=""
                    :data-url="item.urlstr"
                    :data-ids="item.otherid"
                    @click="toinfo($event)">
            </div>
             <p class="about" :class="{'m_about':!showBol}" v-if="idx==1" @click="toabout">了解思睿</p>
             <div class="dot" @mouseenter="clernfuc" @mouseleave="autofuc">
                <span v-for="item in dotArr" :key="item.id" :data-index="item.id" :class="{dotbj:item.bol}" @click="dotimg"></span>
            </div>
        </div> -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in imgarr" :key="index">
                  <img :src="item.imgs">
              </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
import Unit from '@/unit'
import Swiper from 'swiper'
export default {
  props: ['screenh', 'screenw', 'showBol'],
  data () {
    return {
      imgarr: [],
      dotArr: [{id: 1, bol: true}, {id: 2, bol: false}, {id: 3, bol: false}],
      leftval: -document.documentElement.offsetWidth,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenw,
      abc: this.screenw
    }
  },
  computed: {
    countwidth () {
      return Math.round(this.screenw)
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      this.leftval = -Math.round(this.screenw)
      this.screenwval = Math.round(this.screenw)
      this.screenhval = Math.round(this.screenwval)
    }
  },
  mounted () {
    // this.timer()
    this.testaxios()
    if (!this.screenwidth) {
      this.leftval = -document.documentElement.offsetWidth
    }
    this.inits()
  },
  methods: {
    inits () {
      let swiper = new Swiper('.swiper-container', {
        autoplay: 2000, // 自动滑动
        speed: 500, // 自动滑动开始到结束的时间（单位ms）
        loop: true, // 开启循环
        loopedSlides: 5, // 在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
        slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
        effect: 'coverflow', // 可以实现3D效果的轮播,
        pagination: '.swiper-pagination', // 分页器
        centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
        coverflow: {
          rotate: 0, // slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 100, // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 150, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: false // 开启slide阴影。默认 true。
        }
      })
    },
    testaxios () {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/banner/getlist', {token: 'yxD9NyznUkP5cDsi'}).then((res) => {
        res.data.map((item, index) => {
          item.urlstr = index === 0 ? 'About' : this.addroutefuc(item.type)
          item.imgs = Unit.URL + item.imgs
        })
        this.imgarr = res.data
        this.imgarr.push(res.data[0])
        this.imgarr.unshift(this.imgarr[this.imgarr.length - 2])
      })
    },
    toinfo (event) {
      let urlstr = event.currentTarget.dataset.url
      let ids = parseInt(event.currentTarget.dataset.ids)
      this.$router.push({
        name: urlstr,
        params: {id: ids}
      })
    },
    toabout () {
      this.$router.push({
        name: 'About',
        params: {id: ''}
      })
    },
    // 添加路由
    addroutefuc (ids) {
      let urlstr = ''
      if (ids === 46) {
        // 跳转项目
        urlstr = 'Projectinfo'
      } else if (ids === 47) {
        // 跳转研究
        urlstr = 'Reseachinfo'
      } else if (ids === 48) {
        // 跳转动态
        urlstr = 'Trendsinfo'
      }
      return urlstr
    },
    paly (offset) {
      console.log('off', offset)
      if (!this.screenwidth) {
        this.screenwidth = this.screenw
        this.leftval = -this.screenw
      }
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          console.log(this.screenw, this.leftval)
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenw * 4)) {
            this.leftval = -(this.screenw)
          } else if (Math.round(this.leftval) >= -this.screenw) {
            this.leftval = -(this.screenw * 4)
          }
          this.animated = false
        }
      }
      go()
    },
    showdot (num) {
      this.dotArr.map((item) => {
        if (item.id === num) {
          item.bol = !item.bol
        } else {
          item.bol = false
        }
      })
    },
    dotimg (e) {
      if (!this.animated) {
        var num = parseInt(e.target.dataset.index)
        if (num - this.idx === -2) {
          this.idx = 0
        }
        var newleft = -this.screenw * (num - this.idx)
        // console.log(num, newleft)
        this.idx = num
        this.showdot(num)
        this.paly(newleft)
      }
    },
    timer () {
      this.Timer = setInterval(() => {
        if (this.idx === 3) {
          this.idx = 1
        } else {
          this.idx++
        }
        this.showdot(this.idx)
        this.paly(-this.screenw)
      }, 5000)
    },
    clern () {
      // clearInterval(this.Timer)
    },
    autofuc () {
      // this.timer()
    },
    clernfuc () {
      // this.clern()
    }
  }
}
</script>
<style scoped>
    .imgbox{
        /* width: 4000px; */
        width: 800px;
        height: 400px;
        position: relative;
        overflow: hidden;
    }
    .mask{
        background-color: rgba(0,0,0,.2);
        position: absolute;
        top: 0;
        z-index: 1;
    }
    .contant{
        /* width: 4000px; */
        position: absolute;
    }
    .contant:hover,.about:hover{
      cursor: pointer;
    }
    img{
        /* width: 800px; */
        height: 100%;
        float: left;
    }
    .about{
        display: inline-block;
        width:140px;
        height: 50px;
        font-size: 20px;
        color: #fff;
        line-height: 50px;
        background-color: #d5281f;
        text-align: center;
        position: absolute;
        left: 50%;
        bottom:25%;
        margin-left: -70px;
        z-index: 3;
    }
    .dot{
        width: 214px;
        position: absolute;
        left: 50%;
        bottom: 10%;
        margin-left: -107px;
        z-index: 3;
        text-align: center;
    }
    .dot span{
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #fff;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 10px;
    }
    .dotbj{
        width: 20px !important;
        height: 20px !important;
        background-color: transparent !important;
    }
    /* mobile */
    .m_about{
        width: 150px !important;
        height: 36px !important;
        font-size: 20px !important;
         line-height: 36px !important;
        margin-left: -75px !important;
    }
</style>
