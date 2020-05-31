<template>
    <div :class="{m_slider:!showBol}">
        <div class="brandslidermain" :style="{width:countwidth+'px'}">
            <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}">
                <div class="contant" :style="{left:leftval+'px',width:countwidth*7+'px',height:screenhval+'px'}">
                    <div class="contantimg"
                    :style="{width:countwidth+'px',height:screenhval+'px'}"
                    v-for="(item,index) in sliderdata"
                    :key="index"
                    :data-idx="item.id" >
                        <img :style="{width:countwidth+'px'}"  :src="item.imgs" alt="">
                        <div class="mask" :class="{m_mask:!showBol}" :style="{width:countwidth+'px',height:'auto'}">
                            <p class="imgtitle sm_imgtitle xs_imgtitle" :class="{m_imgtitle:!showBol}">{{item.title.split('：')[0].substring(0,18)}}</p>
                            <p class="imgtext sm_imgtext xs_imgtext" :class="{m_imgtext:!showBol}">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                        </div>
                    </div>
                </div>
                <div class='leftcls' @click="prev" @mouseleave="autofuc" @mouseenter="clern"></div>
                <div class='rightcls' @click="next" @mouseleave="autofuc" @mouseenter="clern"></div>
            </div>
            <div class="sliderlist" v-if="showBol">
                <div class="slideritem"
                v-for="(item,index) in bigdata"
                :key="index"
                :data-num="index+1"
                @click="toimg($event)"
                @mouseleave="autofuc"
                @mouseenter="clern"
                :class="{active:item.bol}">
                    <img :src="item.imgs" alt="">
                </div>
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
      leftval: 0,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: 1200,
      screenhval: 600
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
      this.screenhval = Math.round(this.screenw * 0.666)
    }
  },
  mounted () {
    this.timer()
  },
  methods: {
    toimg (event) {
      let num = parseInt(event.currentTarget.dataset.num)
      let offset = num - this.idx
      this.idx = num
      if (offset > 0) {
        this.paly(-this.screenwval * offset, num)
      } else if (offset < 0) {
        this.paly(this.screenwval * (-offset), num)
      }
    },
    paly (offset, num) {
      if (!this.screenwidth && this.showBol) {
        this.screenwidth = this.screenwval
        this.screenwval = this.screenw
        this.leftval = -this.screenw
      }
      this.bigdata.map((item, index) => {
        item.bol = (num - 1) === index
      })
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenwval * 6)) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * 5)
          }
          this.animated = false
        }
      }
      go()
    },
    prev () {
      if (this.idx === 1) {
        this.idx = 5
      } else {
        this.idx--
      }
      this.paly(this.screenwval, this.idx)
    },
    next () {
      if (this.idx === 5) {
        this.idx = 1
      } else {
        this.idx++
      }
      this.paly(-this.screenwval, this.idx)
    },
    timer () {
      this.Timer = setInterval(() => {
        if (this.idx === 5) {
          this.idx = 1
        } else {
          this.idx++
        }
        this.paly(-this.screenwval, this.idx)
      }, 5000)
    },
    clern () {
      clearInterval(this.Timer)
    },
    autofuc () {
      this.timer()
    }
  }
}
</script>
<style scoped>
    .brandslidermain{
        width: 1200px;
        margin: auto;
    }
    .imgbox{
        width: 1200px;
        height: 600px;
        position: relative;
        overflow: hidden;
    }
    .mask{
        width:100%;
        padding: 15px 0;
        box-sizing: content-box;
        background-color: rgba(0,0,0,.15);
        color: #fff;
        position: absolute;
        text-indent: 30px;
        text-align: start;
        bottom: 0;
        z-index: 2;
    }
    .imgtitle{
        font-size: 26px;
        line-height: 26px;
        margin: 0 0 10px 0;
        font-weight: bold;
        color: rgba(255,255,255,.91)
    }
    .imgtext{
        font-size: 20px;
        line-height: 20px;
    }
    .contant{
        position: absolute;
    }
    .contantimg{
        float: left;
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
        top: 50%;
        left: 0;
        z-index: 2;
    }
    .rightcls{
        width: 6%;
        padding-bottom: 9%;
        background: url('../../static/img/right.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        right: 0;
        z-index: 2;
    }
    .sliderlist{
        width: 1200px;
        padding: 30px 0 0;
        display: flex;
        justify-content: space-between;
    }
    .slideritem{
        width: 200px;
        height: 200px;
    }
    .slideritem img{
        width: 100%;
        height: 100%;
    }
    .active{
        border: 2px solid #da251c;
    }
    /* moblie */
    .m_slider{
        margin-bottom: 30px;
    }
    .m_tips{
        width: 51px;
        height: 51px;
        font-size: 14px;
        padding: 5px;
        top: -25px;
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
</style>
