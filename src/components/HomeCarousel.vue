<template>
  <div id="slider" :class="{m_main:!showBol}" :style="{width:screenw+'px',height:screenh+'px'}">
    <div class="window"  :style="{width:screenw+'px',height:screenh+'px'}" @mouseover="stop" @mouseleave="play">
      <ul class="container "  :style="{transform: `translate3d(${distance}px, 0, 0)`}">
        <li>
          <img :style="{width:screenw+'px',height:screenh+'px'}" :src="imgarr[imgarr.length - 1].imgs" :data-url="imgarr[imgarr.length - 1].urlstr" :data-ids="imgarr[imgarr.length - 1].otherid" @click="toinfo($event)" alt="">
           <div class="mbtext">
              <p class="mbtext1">{{imgarr[imgarr.length - 1].text1}}</p>
              <p class="mbtext2">{{imgarr[imgarr.length - 1].text2}}</p>
              <p class="mbtext3" v-if="imgarr[imgarr.length - 1].text3&&showBol" @click="toabout">{{imgarr[imgarr.length - 1].text3}}</p>
            </div>
        </li>
        <li  v-for="(item, index) in imgarr"  :key="index">
          <img :style="{width:screenw+'px',height:screenh+'px'}"
            :src="item.imgs"
            :data-url="item.urlstr"
            :data-ids="item.otherid"
            :data-text="item.text1"
            @click="toinfo($event)"
            alt="">
            <div class="mbtext">
              <p class="mbtext1">{{item.text1}}</p>
              <p class="mbtext2">{{item.text2}}</p>
              <p class="mbtext3" v-if="item.text3&&showBol" @click="toabout">{{item.text3}}</p>
            </div>
        </li>
        <li>
          <img :style="{width:screenw+'px',height:screenh+'px'}" :src="imgarr[0].imgs" :data-url="imgarr[0].urlstr" :data-ids="imgarr[0].otherid" @click="toinfo($event)" alt="">
          <div class="mbtext" >
              <p class="mbtext1">{{imgarr[0].text1}}</p>
              <p class="mbtext2">{{imgarr[0].text2}}</p>
              <p class="mbtext3" v-if="imgarr[0].text3&&showBol" @click="toabout">{{imgarr[0].text3}}</p>
            </div>
        </li>
      </ul>
      <ul class="dots slg_dot" :class="{m_dot:!showBol}">
        <li v-for="(dot, i) in imgarr" :key="i"
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        </li>
      </ul>
    </div>
     <div class='leftcls' v-if="showBol" :class="{m_leftcls:!showBol}" @click="prev" ><img src="../../static/img/left1.png" alt=""></div>
    <div class='rightcls' v-if="showBol" :class="{m_rightcls:!showBol}" @click="next" ><img src="../../static/img/right1.png" alt=""></div>
  </div>
</template>
<script>
import Unit from '@/unit'
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 100
    },
    initialInterval: {
      type: Number,
      default: 5
    },
    screenh: {
      type: Number
    },
    screenw: {
      type: Number
    },
    showBol: {
      type: Boolean
    }
  },
  data () {
    return {
      imgarr: [
        {id: 1, imgs: '../../static/img/homeimg.jpg', sort: 1, type: 45, otherid: null, text1: '商旅及城市运营综合平台服务商', text2: '专业集成，引领行业新生态', text3: '了解思睿'},
        {id: 1, imgs: '../../static/img/homeimg.jpg', sort: 1, type: 45, otherid: null, text1: '', text2: '', text3: ''},
        {id: 1, imgs: '../../static/img/homeimg.jpg', sort: 1, type: 45, otherid: null, text1: '', text2: '', text3: ''}
      ],
      imgWidth: this.screenw, // 600
      currentIndex: 1,
      distance: -this.screenw,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      this.distance = -Math.round(this.screenw)
      this.imgWidth = Math.round(this.screenw)
      this.screenhval = Math.round(this.screenwval)
    }
  },
  computed: {
    countwidth () {
      // this.distance = -Math.round(this.screenw)
      return Math.round(this.screenw)
    },
    interval () {
      return this.initialInterval * 1000
    }
  },
  mounted () {
    this.testaxios()
    // this.init()
  },
  methods: {
    testaxios () {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/banner/getlist', {token: 'yxD9NyznUkP5cDsi'}).then((res) => {
        res.data.map((item, index) => {
          if (index === 0) {
            item.text1 = '商旅及城市运营综合平台服务商'
            item.text2 = '专业集成，引领行业新生态'
            item.text3 = '了解思睿'
          } else {
            item.text1 = ''
            item.text2 = ''
            item.text3 = ''
          }
          item.urlstr = index === 0 ? 'About' : this.addroutefuc(item.type)
          item.imgs = Unit.URL + item.imgs
        })
        this.imgarr = res.data
      })
    },
    toabout () {
      this.$router.push({
        name: 'About',
        params: {id: ''}
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
    init () {
      this.play()
      window.onblur = function () { this.stop() }.bind(this)
      window.onfocus = function () { this.play() }.bind(this)
    },
    move (offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset / this.imgWidth : this.currentIndex -= offset / this.imgWidth
      if (this.currentIndex > 3) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 3

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate (des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp)
        this.temp = null
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -(this.imgWidth * 3)) this.distance = -this.imgWidth
          if (des > -this.imgWidth) this.distance = -(this.imgWidth * 3)
        }
      }, 20)
    },
    jump (index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * this.imgWidth
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
      this.move(offset, direction, jumpSpeed)
    },
    next () {
      this.move(this.imgWidth, -1, this.speed)
      if (this.currentIndex === 4) {
        this.currentIndex = 1
      }
    },
    prev () {
      this.move(this.imgWidth, 1, this.speed)
      if (this.currentIndex === -1) {
        this.currentIndex = 4
      }
    },
    play () {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(this.imgWidth, -1, this.speed)
      }, this.interval)
    },
    stop () {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style scoped>
      *{
        box-sizing: border-box;
        margin:0;
        padding:0;
      }
      ol,ul{
        list-style: none;
      }
      .window{
        position:relative;
        width:600px;
        height:400px;
        margin:0 auto;
        overflow:hidden;
      }
      .container{
        display:flex;
        position:absolute;
        width: 100%;
        height: 100%;
      }
      .mbtext{
        width:100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
        color: #fff;
      }
      .mbtext1{
        margin: 130px 0 20px 20%;
        font-size: 24px;
        line-height: 24px;
        text-shadow:0 2px 2px rgba(0,0,0,.2);
      }
      .mbtext2{
        margin-left: 20%;;
        font-size: 50px;
        line-height: 50px;
        font-weight: 600;
        text-shadow:0 3px 3px rgba(0,0,0,.2);
      }
      .mbtext3{
        display: block;
        width: 180px;
        height: 54px;
        font-size: 18px;
        line-height: 54px;
        text-align: center;
        border-radius: 4px;
        background-color: #d62c28;
        margin:75px 0 0 20%;;
      }
      .mbtext3:hover{
        cursor: pointer;
      }
      .dots{
        position:absolute;
        bottom:5%;
        left:50%;
        transform:translateX(-50%);
      }
      .dots li{
        display:inline-block;
        width:16px;
        height:16px;
        margin: 0 10px;
        border:1px solid #fff;
        border-radius:50%;
        background-color:#fff;
        cursor:pointer;
      }
      .dots .dotted{
        background-color:#d62c28;
        border: 1px solid #d62c28;
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
      .leftcls, .rightcls{
        width:60px;
        height: 60px;
        background-color: rgba(247,247,247,.4);
        position: absolute;
        top: 50%;
        margin-top: -30px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .leftcls{
        left: 5%;
      }
      .rightcls{
        right: 5%;
      }
    /* moblie */
    .m_main, .m_main .window{
      height: 200px !important;
    }
    .m_main .container img{
      height: 100% !important;
    }
    .m_main .mbtext{
      text-align: center;
    }
    .m_main .mbtext1{
      margin: 16% auto 10px;
      font-size: 14px;
      line-height: 14px;
    }
    .m_main .mbtext2{
      font-size: 18px;
      line-height: 22px;
      margin: auto;
    }
    .m_main .leftcls, .m_main .rightcls{
      width: 30px;
      height: 30px;
      margin-top: -15px;
    }
    .m_dot{
      bottom: 7%;
    }
    .m_dot li{
      width: 10px;
      height: 10px;
      margin: 0 9px;
    }
    /* 移动数据 */
</style>
