<template>
    <div>
        <!-- 2.0展示案例 -->
        <div v-if="showBol" class="homeslidermain" :class="{m_homeslidermain:!showBol}" :style="{width:countwidth2+'px'}">
           <div class="tips" :class="{m_tips:!showBol}"> <p>{{tipstext}}</p></div>
           <!-- <div class="morebox" :style="!is_more?{height:moreheight+'px'}:{height:moreheight*3+'px'}"> -->
            <div v-for="(item,index) in sliderdata" :key="index" class="servicebox" :data-idx="item.id" @click="toinfo($event)">
              <div class="morebox" v-show="showBol||is_more?'true':index===0">
                <img :src="item.imgs" alt="">
                <div class="mask">
                    <p class="imgtitle">{{item.title.split('：')[0].substring(0,18)}}</p>
                    <p class="imgtext" v-if="tipstext === '精选项目'">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,22):''}}</p>
                    <!-- <p class="imgtext" v-if="tipstext === '思睿研究'">{{item.title}}</p> -->
                </div>
              </div>
            </div>
          <!-- </div> -->
          <div class="more" @click="getmore" v-if="!showBol"><span>查看更多</span> <img :style="is_more?{transform: 'rotate(180deg)'}:{transform: 'rotate(0deg)'}" src="../../static/img/down.png" alt=""></div>
        </div>
        <!-- ----- -->
        <div v-else class="homeslidermain" :class="{m_homeslidermain:!showBol}">
            <div class="tips" :class="{m_tips:!showBol}"> <p>{{tipstext}}</p></div>
            <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}">
                <div class="contant" :style="{left:leftval+'px',width:countwidth*5+'px'}">
                    <div class="contantimg servicebox"
                    :style="{width:countwidth+'px',height:screenhval+'px'}"
                    v-for="(item,index) in sliderdata"
                    :key="index"
                    :data-idx="item.id"
                    @click="toinfo($event)">
                        <img :style="{width:countwidth+'px'}"  :src="item.imgs" alt="">
                        <div class="mask" :style="showBol?{width:countwidth+'px',height:Math.round(screenhval/4.6) +'px'}:{width:countwidth-20+'px',height:Math.round(screenhval/4.2) +'px'}">
                            <p class="imgtitle">{{item.title.split('：')[0].substring(0,18)}}</p>
                            <p class="imgtext" v-if="tipstext === '精选项目'">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,22):''}}</p>
                        </div>
                    </div>
                </div>
                <div class='leftcls' @click="prev" @mouseleave="autofuc" @mouseenter="clern"></div>
                <div class='rightcls' @click="next" @mouseleave="autofuc" @mouseenter="clern"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh', 'tipstext', 'sliderdata'],
  data () {
    return {
      leftval: -670,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: 670,
      screenhval: 494,
      newdata: [],
      is_more: false, // 展示更多布尔值
      moreidx: 0
    }
  },
  computed: {
    countwidth2 () {
      if (this.screenw > 1200) {
        return 1200
      } else {
        return this.screenw
      }
    },
    countwidth () {
      if (this.showBol) {
        return Math.round(this.screenw * 0.26274)
      } else {
        console.log(1, Math.round(this.screenw - 30))
        return Math.round(this.screenw - 30)
        // return Math.round(this.screenw * 0.724637)
      }
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      this.leftval = -Math.round(this.screenw * 0.26274)
      this.screenwval = Math.round(this.screenw * 0.26274)
      this.screenhval = Math.round(this.screenwval * 0.666)
    }
  },
  mounted () {
    this.initdata()
    // this.timer()
  },
  methods: {
    initdata () {
      this.leftval = -Math.round(this.screenw * 0.26274)
      // mobile初始化数据
      if (!this.showBol) {
        this.leftval = -Math.round(this.screenw - 30)
        // this.leftval = -Math.round(this.screenw * 0.724637)
        this.screenwval = Math.round(this.screenw - 30)
        this.screenhval = 257
        // this.screenhval = Math.round(this.screenwval * 0.67)
      }
    },
    toinfo (event) {
      'use strict'
      let ids = event.currentTarget.dataset.idx
      if (this.tipstext === '精选项目') {
        this.$router.push({
          name: 'Projectinfo',
          params: {id: ids, word: ''}
        })
      } else if (this.tipstext === '思睿研究') {
        this.$router.push({
          name: 'Reseachinfo',
          params: {id: ids, word: ''}
        })
      }
    },
    paly (offset) {
      // if (!this.screenwidth && this.showBol) {
      //   this.screenwidth = this.screenwval
      //   this.screenwval = Math.round(this.screenw * 0.26274)
      //   this.leftval = -Math.round(this.screenw * 0.26274)
      //   console.log(2, this.leftval)
      // }
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenwval * 4)) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * 3)
          }
          this.animated = false
        }
      }
      go()
    },
    prev () {
      'use strict'
      if (this.idx === 1) {
        this.idx = 3
      } else {
        this.idx--
      }
      this.paly(this.screenwval)
    },
    next () {
      'use strict'
      if (this.idx === 3) {
        this.idx = 1
      } else {
        this.idx++
      }
      this.paly(-this.screenwval)
    },
    timer () {
      this.Timer = setInterval(() => {
        if (this.idx === 3) {
          this.idx = 1
        } else {
          this.idx++
        }
        this.paly(-this.screenwval)
      }, 5000)
    },
    clern () {
      // clearInterval(this.Timer)
    },
    autofuc () {
      // this.timer()
    },
    // 移动端展开更多项目
    getmore () {
      this.is_more = !this.is_more
    }
  }
}
</script>
<style scoped>
    .homeslidermain{
      position: relative;
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .servicebox{
      width:32.5%;
      position: relative;
    }
    .servicebox:hover{
      cursor: pointer;
    }
    .servicebox:hover .imgtitle{
      color: #d62c28;
    }
    .homeslidermain .servicebox img{
      width: 100%;
      /* width: 390px; */
      height: 260px;
    }
    .mask{
        width:95%;
        height: 78px;
        /* box-sizing: content-box; */
        padding: 20px 0 0;
        background-color: #fff;
        text-align: center;
        position: absolute;
        right: 0;
        bottom: -55px;
        z-index: 2;
    }
    .imgtitle{
        font-size: 18px;
        line-height: 18px;
        margin: 0 0 18px 0;
        color: #000;
        font-weight: lighter;
    }
    .imgtext{
        font-size: 14px;
        line-height: 14px;
        color: #666;
    }
    .tips{
        width: 50px;
        height: 50px;
        background-color: #d5281f;
        color: #fff;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        padding: 10px 5px;
        position: absolute;
        left: 30px;
        top: -26px;
        z-index: 2;
    }
    /* mpblie */
     .contant{
        position: absolute;
    }
     /* .contantimg{
        float: left;
    } */
    .m_tips{
      width: 42px;
      height: 42px;
      font-size: 12px;
      padding: 5px;
      left: 50px;
      top: -9px;
    }
    .m_homeslidermain{
      width: 100%;
      padding: 10px 30px 0;
      flex-wrap: wrap;
    }
    .morebox{
      transition: all 2s ease;
    }
    .m_homeslidermain .servicebox{
      width: 100%;
      float: left;
      /* transition: all 2s ease; */
    }
    .m_homeslidermain .servicebox img{
      width: 100%;
      height: 200px;
    }
    .m_homeslidermain .mask{
      width: 100%;
      height: auto;
      padding: 0;
      /* margin-bottom: 20px; */
      position: static;
      text-align: start;
    }
    .m_homeslidermain .imgtitle{
      font-size: 16px;
      line-height: 16px;
      margin-top: 9px;
      margin-bottom: 10px;
      font-weight: normal;
    }
    .m_homeslidermain .more img{
      width: 10px;
    }
    .m_homeslidermain .more{
      opacity: 1;
      color: #666;
      text-align: right;
      font-size: 12px;
      line-height: 12px;
    }
    .more{
      width: 100%;
      align-items: center;
      text-align: center;
      opacity: .2;
    }
    .imgbox{
        width: 800px;
        border: 2px solid #fff;
        position: relative;
        overflow: hidden;
    }
    .leftcls{
        width:24px;
        height: 34px;
        background: url('../../static/img/right2.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        margin-top: -12%;
        left: 0;
        z-index: 2;
      transform: rotate(180deg);
    }
    .rightcls{
        width:24px;
        height: 34px;
        background: url('../../static/img/right2.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        margin-top: -12%;
        right: 0;
        z-index: 2;
    }
    /* .homeslidermain{
        position: relative;
    }
    .imgbox{
        width: 800px;
        border: 2px solid #fff;
        position: relative;
        overflow: hidden;
    }
    .tips{
        width: 50px;
        height: 50px;
        background-color: #d5281f;
        color: #fff;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        padding: 10px 5px;
        position: absolute;
        right: 36px;
        top: -26px;
        z-index: 2;
    }
    .mask{
        width:100%;
        box-sizing: content-box;
        background-color: rgba(0,0,0,.3);
        color: #fff;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        position: absolute;
        text-indent: 20px;
        text-align: start;
        bottom: 2px;
        z-index: 2;
    }
    .imgtitle{
        font-size: 18px;
        line-height: 18px;
        margin: 14px 0 8px 0;
        color: rgba(255,255,255,.91)
    }
    .imgtext{
        font-size: 14px;
        line-height: 14px;
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
        width:6%;
        padding-bottom: 9%;
        position: absolute;
        background: url('../../static/img/left.png') no-repeat;
        background-size: 100% 100%;
        top: 50%;
        margin-top: -4.5%;
        left: 0;
        z-index: 2;
    }
    .rightcls{
        width:6%;
        padding-bottom: 9%;
        background: url('../../static/img/right.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        margin-top: -4.5%;
        right: 0;
        z-index: 2;
    }
    .m_slider{
      margin: 30px auto ;
    }
    .m_tips{
        width: 42px;
        height: 42px;
        text-align: center;
        font-size: 12px;
        padding:6px 5px;
        top: -25px;
    }
    .m_mask{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-indent: 0;
      padding: 0 0 0 20px;
      overflow: hidden;
    }
    .m_imgtitle{
        font-size: 14px !important;
        line-height: 14px !important;
        margin:0 0 2px 0 !important;
         overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .m_imgtext{
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin:4px 0 0 0 !important;
    } */
</style>
