<template>
    <div :class="{m_slider:!showBol}">
        <div v-if="showBol" class="brandslidermain">
            <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}">
                <div class="contant" :style="{width:countwidth+'px',height:screenhval+'px'}">
                    <div class="contantimg" :style="{width:countwidth+'px',height:screenhval+'px'}" @click="toinfo($event)" :data-idx="newsliderdata[bigidx].id">
                        <img :style="{width:countwidth+'px'}"  :src="newsliderdata[bigidx].imgs" alt="">
                        <div class="mask" :class="{m_mask:!showBol}" :style="{width:countwidth+'px',height:'auto'}">
                            <p class="imgtitle sm_imgtitle xs_imgtitle" :class="{m_imgtitle:!showBol}">{{newsliderdata[bigidx].title.split('：')[0].substring(0,18)}}</p>
                            <p class="imgtext sm_imgtext xs_imgtext" :class="{m_imgtext:!showBol}">{{newsliderdata[bigidx].title.indexOf('：')!=-1?newsliderdata[bigidx].title.split('：')[1].substring(0,24):''}}</p>
                        </div>
                    </div>
                </div>
            </div>
              <div v-if="showBol"  class="sliderbox">
                <div class="sliderlist">
                  <div class="slideritem"
                  v-for="(item,index) in newsliderdata"
                  :key="index"
                  :data-num="item.num"
                  @click="toimg2(index)"
                  @mouseleave="autofuc"
                  @mouseenter="clern"
                  :class="{active:item.bol}">
                    <div class="itemimg"><img :src="item.imgs" alt=""></div>
                    <div class="slidertext">
                      <p class="slidertitle1">{{item.title.split('：')[0].substring(0,18)}}</p>
                      <p class="slidertitle2">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div v-else class="brandslidermain" >
            <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}">
                <div class="contant" :style="{left:leftval+'px',width:countwidth*11+'px',height:screenhval+'px'}">
                    <div class="contantimg"
                    :style="{width:countwidth+'px',height:screenhval+'px'}"
                    v-for="(item,index) in bigdata"
                    :key="index"
                    :data-idx="item.id" @click="toinfo($event)">
                        <img :style="{width:countwidth+'px'}"  :src="item.imgs" alt="">
                        <div class="mask" :class="{m_mask:!showBol}" :style="{width:countwidth+'px',height:'auto'}">
                            <p class="imgtitle sm_imgtitle xs_imgtitle" :class="{m_imgtitle:!showBol}">{{item.title.split('：')[0].substring(0,18)}}</p>
                            <p class="imgtext sm_imgtext xs_imgtext" :class="{m_imgtext:!showBol}">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                        </div>
                    </div>
                </div>
                <div class='leftcls' v-if="showBol" @click="prev" @mouseleave="autofuc" @mouseenter="clern"></div>
                <img class='m_leftcls' v-else  src="../../static/img/right2.png" alt="" @click="prev" >
                <div class='rightcls' v-if="showBol" @click="next" @mouseleave="autofuc" @mouseenter="clern"></div>
                <img class='m_rightcls' v-else  src="../../static/img/right2.png" alt="" @click="next" >
            </div>
            <div v-if="showBol" class="sliderpart">
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh', 'sliderdata', 'bigdata'],
  data () {
    return {
      leftval: -750,
      idx: 3,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: 750,
      screenhval: 450,
      topval: -495,
      bigidx: 0,
      newsliderdata: []
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
        this.leftval = -Math.round(this.screenw * 0.3941)
        this.screenwval = Math.round(this.screenw * 0.3941)
        this.screenhval = Math.round(this.screenw * 0.2365)
      } else {
        this.leftval = -Math.round(this.screenw)
        this.screenwval = Math.round(this.screenw)
        this.screenhval = 200
      }
    },
    'sliderdata': function (val) {
      this.newsliderdata = val
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
    toimg2 (a) {
      let num = a
      let data0 = this.newsliderdata[0]
      let newarr = []
      this.newsliderdata.map((item, index) => {
        if (index === num) {
          newarr.unshift(item)
        } else if (item.title !== data0.title) {
          newarr.push(item)
        }
      })
      newarr.push(data0)
      // console.log(newarr)
      this.newsliderdata = newarr
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
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenwval * (this.bigdata.length - 2 + 1))) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * (this.bigdata.length - 2))
          }
          this.animated = false
        }
      }
      go()
    },
    prev () {
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
    .sliderbox{
      width: 400px;
      height: auto;
       margin-top: -30px;
      overflow: hidden;
    }
    .sliderlist{
        width: 400px;
        margin-top: -134px;
        overflow: hidden;
    }
    .slideritem{
      width: 400px;
      margin-bottom: 45px;
      overflow: hidden;
    }
    .itemimg{
        width: 120px !important;
        height: 120px !important;
        float: left;
    }
    .slideritem img{
        width: 100%;
        height: 100%;
    }
    .slidertext{
      width: 68%;
      height: 120px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
      float: left;
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
        background-color: rgba(0,0,0,.4);
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
