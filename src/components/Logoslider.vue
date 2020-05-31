<template>
  <div>
    <div v-if="showBol" class="logolist" :class="{m_logolist:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}">
      <div class="imgbox" :class="{m_imgbox:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}" >
        <div class="contant" :style="{width:countwidth*4+'px',left:leftval+'px',height:screenhval+'px'}">
          <div class="contantimg" ref="logoboxheight" :class="{m_contantimg:!showBol}" :style="!showBol?{width:screenwval+'px',padding:0}:{width:countwidth+'px'}" v-for="(item,index) in logopic" :key="index">
            <div class="logobox" :style="{width:Math.round(screenw*0.63058)+'px'}"  v-for="(item,index) in item.children" :key="index">
              <img  :src="item.imgsrc" alt="">
            </div>
          </div>
        </div>
      </div>
      <img class='leftcls' :class="{m_leftcls:!showBol}" src="../../static/img/left.jpg" alt="" @click="prev" >
      <img class='rightcls' :class="{m_rightcls:!showBol}" src="../../static/img/right.jpg" alt="" @click="next" >
    </div>
    <div v-else class="logolist" :class="{m_logolist:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}">
      <div class="imgbox" :class="{m_imgbox:!showBol}" :style="{width:countwidth+'px',height:screenhval+'px'}" >
        <div class="contant" :style="{width:countwidth*4+'px',left:leftval+'px',height:screenhval+'px'}">
          <div class="contantimg" ref="logoboxheight" :class="{m_contantimg:!showBol}" :style="!showBol?{width:screenwval+'px',padding:0}:{width:countwidth+'px'}" v-for="(item,index) in logopic" :key="index">
            <div class="logobox" :style="{width:Math.round(screenw*0.70058)+'px'}"  v-for="(item,index) in item.children" :key="index">
              <img  :src="item.imgsrc" alt="">
            </div>
          </div>
        </div>
      </div>
      <img class='leftcls' :class="{m_leftcls:!showBol}" src="../../static/img/left.jpg" alt="" @click="prev" >
      <img class='rightcls' :class="{m_rightcls:!showBol}" src="../../static/img/right.jpg" alt="" @click="next" >
    </div>
  </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh'],
  data () {
    return {
      logopic: [],
      imgdata: [
        {id: 0, text: 'logo1', children: [{imgsrc: './static/img/logoall01.jpg', urlStr: ''}]},
        {id: 1, text: 'logo2', children: [{imgsrc: './static/img/logoall02.jpg', urlStr: ''}]}
      ],
      imgdata2: [
        {id: 0, text: 'logo1', children: [{imgsrc: './static/img/alllogo2.jpg', urlStr: ''}]},
        {id: 1, text: 'logo2', children: [{imgsrc: './static/img/logoall02.jpg', urlStr: ''}]}
      ],
      leftval: -1480,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: this.screenw,
      // screenwval: 1480,
      screenhval: 494
    }
  },
  computed: {
    countwidth () {
      return this.screenw
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      this.screenhval = Math.round(val * 0.20258)
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
      // mobile初始化数据
      if (!this.showBol) {
        this.screenhval = 100
        this.logopic = this.imgdata2
        this.logopic.push(this.imgdata2[0])
        this.logopic.unshift(this.imgdata2[1])
      } else {
        this.logopic = this.imgdata
        this.logopic.push(this.imgdata[0])
        this.logopic.unshift(this.imgdata[1])
      }
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
      background-color: #fff;
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
        padding:10px 140px 0;
        float: left;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

    }
    .logobox{
        width:1200px;
        height: 100%;
        margin: auto;
    }
    .contantimg img{
        width: 100%;
        height: 100%;
    }
    .leftcls{
        width:60px;
        height: 60px;
        position: absolute;
        top: 50%;
        margin-top: -30px;
        left: 5%;
        z-index: 1;
    }
    .leftcls img{
      width: 100%;
    }
    .rightcls{
        width:60px;
        height:60px;
        position: absolute;
        top:50%;
        margin-top: -30px;
        right: 5%;
        z-index: 1;
    }
    /* moblie */
    .m_logolist{
      margin: -10px auto 30px;
    }
    .m_imgbox{
      height: 100% !important;
      margin-top: 0;
    }
    .m_leftcls{
        width: 24px;
        height: 24px;
        /* left: 30px; */
        margin-top: -12px;
    }
    .m_rightcls{
        width: 24px;
        height: 24px;
        /* right: 30px; */
        margin-top: -12px;
    }
</style>
