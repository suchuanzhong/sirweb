<template>
    <div :class="{m_slider:!showBol}">
        <div class="brandslidermain">
            <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}">
                <div class="contant" :style="{left:leftval+'px',width:countwidth*11+'px',height:screenhval+'px'}">
                    <div class="contantimg"
                    :style="{width:countwidth+'px',height:screenhval+'px'}"
                    v-for="(item,index) in sliderdata"
                    :key="index"
                    :data-idx="item.id" @click="toinfo($event)">
                        <img :style="{width:countwidth+'px'}"  :src="item.imgs" alt="">
                        <div class="mask" :class="{m_mask:!showBol}" :style="{width:countwidth+'px',height:'auto'}">
                            <p class="imgtitle sm_imgtitle xs_imgtitle" :class="{m_imgtitle:!showBol}">{{item.title.split('：')[0].substring(0,18)}}</p>
                            <p class="imgtext sm_imgtext xs_imgtext" :class="{m_imgtext:!showBol}">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                        </div>
                    </div>
                </div>
                <!-- <div class='leftcls' v-if="!showBol" @click="prev" @mouseleave="autofuc" @mouseenter="clern"></div> -->
                <img class='m_leftcls'   src="../../static/img/right2.png" alt="" @click="prev" >
                <!-- <div class='rightcls' v-if="!showBol" @click="next" @mouseleave="autofuc" @mouseenter="clern"></div> -->
                <img class='m_rightcls'   src="../../static/img/right2.png" alt="" @click="next" >
            </div>
            <div v-if="showBol" class="sliderpart">
              <div class=' leftcls1' @click="prev" > <img src="../../static/img/left1.png" alt=""></div>
              <div  class="sliderbox">
                <div class="sliderlist" :style="{top:topval+'px'}">
                  <div class="slideritem"
                  v-for="(item,index) in bigdata"
                  :key="index"
                  :data-num="item.num+1"
                  @click="toimg($event)"
                  @mouseleave="autofuc"
                  @mouseenter="clern"
                  :class="{active:item.bol}">
                      <img :src="item.imgs" alt="">
                      <div class="slidertext">
                        <p class="slidertitle1">{{item.title.split('：')[0].substring(0,18)}}</p>
                        <p class="slidertitle2">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                      </div>
                  </div>
                </div>
              </div>
              <div class=' rightcls1' @click="next"><img src="../../static/img/right1.png" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh', 'sliderdata', 'bigdata'],
  data () {
    return {
      imgdata: this.sliderdata,
      leftval: -750,
      idx: 3,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: 750,
      screenhval: 450,
      topval: -495
    }
  },
  computed: {
    countwidth () {
      if (this.showBol) {
        return Math.round(this.screenw * 0.3941)
      } else {
        return Math.round(this.screenw)
      }
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      if (this.showBol) {
        console.log(this.screenw)
        this.leftval = -Math.round(this.screenw * 0.3941)
        this.screenwval = Math.round(this.screenw * 0.3941)
        this.screenhval = Math.round(this.screenw * 0.2365)
      } else {
        this.leftval = -Math.round(this.screenw)
        this.screenwval = Math.round(this.screenw)
        this.screenhval = 200
      }
    }
  },
  mounted () {
    // this.timer()
  },
  methods: {
    toinfo (event) {
      let ids = event.currentTarget.dataset.idx
      this.$router.push({
        name: 'Projectinfo',
        params: {id: ids, word: ''}
      })
    },
    toimg (event) {
      let num = parseInt(event.currentTarget.dataset.num) + 2
      let offset = num - this.idx
      this.idx = num
      if (offset > 0) {
        this.paly(-this.screenwval * offset, num)
      } else if (offset < 0) {
        this.paly(this.screenwval * (-offset), num)
      }
    },
    paly (offset, num) {
      this.bigdata.map((item, index) => {
        item.bol = (num - 3) === item.num
      })
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenwval * (this.sliderdata.length - 2 + 1))) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * (this.sliderdata.length - 2))
          }
          this.animated = false
        }
      }
      go()
    },
    paly2 (offset, num) {
      // console.log(num)
      // this.bigdata.map((item, index) => {
      //   item.bol = (num - 1) === index
      // })
      // console.log(this.bigdata[num - 1].bol)
      var speed = offset / 10
      var newtopval = Math.round(this.topval + offset)
      var go2 = () => {
        if ((speed < 0 && Math.round(this.topval) > newtopval) || (speed > 0 && Math.round(this.topval) < newtopval)) {
          this.topval = this.topval + speed
          // console.log(newtopval, this.topval)
          setTimeout(go2, 30)
        } else {
          if (Math.round(this.topval) <= -(495 * 4)) {
            this.topval = -(495)
          } else if (Math.round(this.topval) > -495) {
            this.topval = -(495 * 3)
          }
        }
      }
      go2()
    },
    prev () {
      if (this.idx % 3 === 0) {
        // this.topval = this.topval - 495
        // console.log(this.topval)
        this.paly2(495, this.idx)
      }
      if (this.idx === 3) {
        this.idx = 11
      } else {
        this.idx--
      }
      this.paly(this.screenwval, this.idx)
    },
    next () {
      console.log('idx', this.idx)
      if (this.idx === 11) {
        this.idx = 3
      } else {
        this.idx++
      }
      if (this.idx % 3 === 0) {
        // this.topval = this.topval - 495
        // console.log(this.topval)
        this.paly2(-495, this.idx)
      }
      this.paly(-this.screenwval, this.idx)
    },
    timer () {
      this.Timer = setInterval(() => {
        if (this.idx === 9) {
          this.idx = 1
        } else {
          this.idx++
        }
        this.paly(-this.screenwval, this.idx)
      }, 5000)
    },
    clern () {
      // clearInterval(this.Timer)
    },
    autofuc () {
      // this.timer()
    }
  }
}
</script>
<style scoped>
    .brandslidermain{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-bottom: 50px;
    }
    .imgbox{
        width: 1200px;
        height: 600px;
        position: relative;
        overflow: hidden;
    }
    .mask{
        width:100%;
        padding: 12px 0;
        box-sizing: content-box;
        background-color: rgba(0,0,0,.15);
        color: #fff;
        position: absolute;
        text-indent: 20px;
        text-align: start;
        bottom: 0;
        z-index: 2;
    }
    .imgtitle{
        font-size: 18px;
        line-height: 18px;
        margin: 0 0 6px 0;
        font-weight: bold;
        color: rgba(255,255,255,.91)
    }
    .imgtext{
        font-size: 16px;
        line-height: 16px;
    }
    .contant{
        position: absolute;
    }
    .contantimg{
        float: left;
    }
    .contantimg:hover{
      cursor: pointer;
    }
    img{
        height: 100%;
    }
    .leftcls{
        width: 6%;
        padding-bottom: 9%;
        background: url('../../static/img/left.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 47%;
        left: 0;
        z-index: 2;
    }
    .rightcls{
        width: 6%;
        padding-bottom: 9%;
        background: url('../../static/img/right.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:47%;
        right: 0;
        z-index: 2;
    }
    .leftcls1{
        width: 50px;
        height: 20px !important;
        margin: 0 0 10px 35px;
        background-color: #e6e6e6;
    }
    .rightcls1{
      width: 50px;
      height: 20px !important;
      margin: 10px 0 0 35px;
      background-color: #e6e6e6;
    }
    .leftcls1 img, .rightcls1 img{
      width: 10px;
      height: 15px;
      margin-left: 19px;
      margin-top: 3px;
      transform: rotate(90deg);
    }
    .sliderpart{
      width: 420px;
      height: 510px;
      margin-top: -30px;
    }
    .sliderbox{
      width: 430px;
      height: 463px;
      overflow: hidden;
      position: relative;
      /* float: right; */
    }
    .sliderlist{
        width: 420px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        position: absolute;
        right: 10px;
    }
    .slideritem{
        width: 400px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 45px;
    }
    .slideritem img{
        width: 120px;
        height: 120px;
    }
    .active{
        /* border: 1px solid #da251c; */
        box-shadow: 10px 10px 5px rgba(221,221,221,.75);
    }
    .slidertext{
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
    }
    .slidertitle1{
      font-size: 18px;
      color: #333;
      line-height: 18px;
      margin-bottom: 20px;
    }
    .slidertitle2{
      font-size: 16px;
      color: #666;
      line-height: 20px;
    }
    /* moblie */
    .m_slider{
        margin-bottom: 30px;
        padding: 0 30px;
    }
    .m_slider .brandslidermain{
        width: 100%;
        padding-bottom: 0;
    }
    .m_mask{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 7px 0;
    }
      .m_imgtitle{
        font-size: 14px !important;
        line-height: 14px !important;
        margin:0 0 2px 0 !important;
    }
    .m_imgtext{
        font-size: 12px;
        line-height: 20px;
        margin:4px 0 0 0 !important;
    }
      .m_leftcls{
      width: 24px;
      height: 34px;
      background: url(../../static/img/right2.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      margin-top: -17px;
      left: 0;
      z-index: 2;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    .m_rightcls{
      width: 24px;
      height: 34px;
      background: url(../../static/img/right2.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      margin-top: -17px;
      right: 0;
      z-index: 2;
    }
</style>
