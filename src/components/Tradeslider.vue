<template>
  <div class="logolist" :class="{m_logolist:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}">
    <div class="imgbox" :class="{m_imgbox:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}" >
      <div class="contant" :style="{width:countwidth*4+'px',left:leftval+'px',height:screenhval+'px'}">
        <div class="contantimg" ref="logoboxheight" :style="!showBol?{width:countwidth+'px',padding:0}:{width:countwidth+'px'}" v-for="(item,index) in logopic" :key="index">
          <div class="logobox" :class="{m_logobox:!showBol}" :style="!showBol?{width:90+'%'}:{width:Math.round(screenw*0.63058)+'px'}"  >
            <!-- <div > -->
              <div  class="itemcls"  v-for="(item,index) in item.children" :key="index"  :style="item.text==='六维一体'?{width:'31.666%'}:{width:'18.5%'}">
                <p class="clstext1">{{item.text1}}</p>
                <p class="clstext2">{{item.text2}}</p>
                <p class="clstext">{{item.text}}</p>
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <img class='leftcls' v-if="showBol"  src="../../static/img/left.jpg" alt="" @click="prev" >
    <img class='m_leftcls' v-else  src="../../static/img/right2.png" alt="" @click="prev" >
    <img class='rightcls' v-if="showBol" src="../../static/img/right.jpg" alt="" @click="next" >
    <img class='m_rightcls' v-else  src="../../static/img/right2.png" alt="" @click="next" >
  </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh'],
  data () {
    return {
      logopic: [],
      imgdata: [
        {id: 'one',
          children: [
            {id: 0, text: '六维一体', text1: '产业策划', text2: '战略咨询、产业规划、品牌策略'},
            {id: 1, text: '六维一体', text1: '文化创意', text2: 'IP开发、主题包装、视觉设计'},
            {id: 2, text: '六维一体', text1: '业态创新', text2: '内容体验、交互体验、空间体验'},
            {id: 3, text: '六维一体', text1: '设计指导', text2: '平面指导、空间构想、指标建议'},
            {id: 4, text: '六维一体', text1: '投资评估', text2: '投资测算、资产评估、动态监测'},
            {id: 5, text: '六维一体', text1: '资产运营', text2: '资产管理、业态招商、运营模式'}
          ]
        },
        {id: 'two',
          children: [
            {id: 0, text: '五态合一', text1: '文态（内涵/外延）', text2: '挖掘保护'},
            {id: 1, text: '五态合一', text1: '动态（系统性的行动）', text2: '运营管理'},
            {id: 2, text: '五态合一', text1: '业态（产业、商家）', text2: '相互依存'},
            {id: 3, text: '五态合一', text1: '生态（自然资源）', text2: '因地制宜'},
            {id: 4, text: '五态合一', text1: '形态（建筑/景观）', text2: '创新利用'}
          ]
        }
      ],
      leftval: -1480,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: this.screenw,
      // screenwval: 1480,
      screenhval: 0
    }
  },
  computed: {
    countwidth () {
      return this.screenw
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      if (this.showBol) {
        this.screenhval = Math.round(val * 0.21258)
      } else {
        this.screenhval = 550
      }
      this.leftval = -Math.round(val)
    }
  },
  mounted () {
    // this.timer();
    this.initdata()
  },
  methods: {
    initdata () {
      this.leftval = -this.screenw
      this.screenwval = this.screenw
      this.screenhval = this.screenh + 60
      // console.log(this.screenh)
      // mobile初始化数据
      this.logopic = this.imgdata
      this.logopic.push(this.imgdata[0])
      this.logopic.unshift(this.imgdata[1])
      // }
    },
    paly (offset) {
      if (!this.screenwidth) {
        this.screenwidth = this.screenw
        this.leftval = -this.screenw
      }
      var speed = offset / 10
      var leftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > leftval) || (speed > 0 && Math.round(this.leftval) < leftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) < -(this.screenw * (this.logopic.length - 2))) {
            this.leftval = -(this.screenw)
          } else if (Math.round(this.leftval) > -this.screenw) {
            this.leftval = -(this.screenw * (this.logopic.length - 2))
          }
          this.animated = false
        }
      }
      go()
    },
    prev () {
      if (this.idx === 1) {
        this.idx = 4
      } else {
        this.idx--
      }
      this.paly(this.screenw)
    },
    next () {
      if (this.idx === 4) {
        this.idx = 1
      } else {
        this.idx++
      }
      this.paly(-this.screenw)
    }
  }
}
</script>
<style scoped>
    .logolist{
      /* background-color: #fff; */
      margin:100px auto 0;
      position: relative;
    }
    .imgbox{
        position: relative;
        overflow: hidden;
        margin-top: -40px
    }
    .contant{
        position: absolute;
    }
    .contantimg{
      height: 100%;
        padding:0 140px 0;
        float: left;
        /* background-color: #fff; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .logobox{
        width:1200px;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    .itemcls{
      /* width: 380px; */
      height: 160px;
      padding: 30px 0 0 20px;
      background-color: #fff;
      border-radius: 4px;
      border-bottom: 4px solid #dd342c;
      margin-bottom: 27px;;
    }
    .clstext1{
      font-size: 18px;
      line-height: 18px;
      color: #333;
      margin-bottom: 28px;
      font-weight: bold;
    }
    .clstext2{
      font-size: 16px;
      line-height: 16px;
      color: #666;
      margin-bottom: 28px;
    }
    .clstext{
      font-size: 14px;
      line-height: 14px;
      color: #dd342c;
      margin-bottom: 24px;
      font-weight: bold;
    }
    .contantimg img{
        width: 100%;
        height: 100%;
    }
    .leftcls{
        width:70px;
        height: 70px;
        position: absolute;
        top: 50%;
        margin-top: -35px;
        left: 5%;
        z-index: 1;
    }
    .leftcls img{
      width: 100%;
    }
    .rightcls{
        width:70px;
        height:70px;
        position: absolute;
        top:50%;
        margin-top: -35px;
        right: 5%;
        z-index: 1;
    }
    /* moblie */
    .m_logolist{
      margin: 0 auto 10px;
      height: 518px !important;
    }
    .m_imgbox{
      height: 518px !important;
      margin-top: 0;
    }
    .m_imgbox .contant{
      height: auto !important;
    }
    .m_imgbox .itemcls{
      width: 46% !important;
      height: 146px;
      padding: 20px 0 0 20px;
      margin-bottom: 30px;
    }
    .m_imgbox .clstext1{
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 16px;
    }
    .m_imgbox .clstext2{
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }
    .m_imgbox .clstext{
      margin-bottom: 16px;
    }
    .m_logobox{
      align-items: unset;
    }
    .m_leftcls{
      width: 24px;
      height: 34px;
      background: url(../../static/img/right2.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      margin-top: -12%;
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
      margin-top: -12%;
      right: 0;
      z-index: 2;
    }
</style>
