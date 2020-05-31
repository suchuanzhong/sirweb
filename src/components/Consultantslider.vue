<template>
<div>
  <div v-if="showBol" class="logolist" :style="{width:countwidth+'px',height:screenhval+'px'}">
    <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}" >
      <div class="contant" :style="{width:(countwidth-361+50)*5+'px',left:leftval+'px',height:screenhval+'px'}">
        <div class="contantimg" :style="!showBol?{width:screenwval+'px',padding:0}:{width:Math.round(screenw)+'px'}" v-for="(item,index) in logopic" :key="index" @click="clickimg(index)">
          <!-- {{index}}---idx---{{idx}} -->
          <div class="logobox" :style="{width:Math.round(screenw)+'px'}"  v-for="(item,index) in item.children" :key="index">
            <img :src="item.imgsrc" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <img class='leftcls' src="../../static/img/xi-long-left.png" alt=""  @click="prev">
      <p><span>0{{idx}}</span>/<span>0{{logopic.length-2}}</span> </p>
      <img class='rightcls' src="../../static/img/xi-long-left.png" alt="" @click="next">
    </div>
  </div>
  <div v-else>
    <div class="imgslider">
      <img class="imgslider1" src="../../static/img/consultant8.jpg" alt="">
      <div class="imgsliderright">
        <img class="imgslider2" src="../../static/img/consultant9.jpg" alt="">
        <img class="imgslider3" src="../../static/img/consultant10.jpg" alt="">
      </div>
    </div>
  </div>
  <!-- 移动端 -->
  <div v-if="false" class="logolist" :style="{width:countwidth+'px',height:'auto'}">
    <div class="imgbox" :style="{width:countwidth+'px',height:screenhval+'px'}" >
      <div class="contant" :style="{width:(countwidth)*5+'px',left:leftval+'px',height:screenhval+'px'}">
        <div class="contantimg" :style="!showBol?{width:countwidth+'px','margin-right': 0}:{width:Math.round(countwidth)+'px'}" v-for="(item,index) in logopic" :key="index" @click="clickimg(index)">
          <div class="logobox" :style="{width:Math.round(countwidth)+'px'}"  v-for="(item,index) in item.children" :key="index">
            <img :src="item.imgsrc" alt="">
          </div>
        </div>
      </div>
    </div>
    <img class='mleftcls' src="../../static/img/left.jpg" alt="" @click="prev" >
    <img class='mrightcls' src="../../static/img/right.jpg" alt="" @click="next" >
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
        {id: 1, text: 'logo1', children: [{imgsrc: './static/img/consultant8.jpg', urlStr: ''}]},
        {id: 2, text: 'logo2', children: [{imgsrc: './static/img/consultant9.jpg', urlStr: ''}]},
        {id: 3, text: 'logo3', children: [{imgsrc: './static/img/consultant10.jpg', urlStr: ''}]}
      ],
      leftval: -1480,
      idx: 1,
      animated: false,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: this.screenw,
      screenhval: 494
    }
  },
  computed: {
    countwidth () {
      if (this.showBol) {
        return parseInt(this.screenw) + 361
      } else {
        return parseInt(this.screenw)
      }
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      if (this.showBol) {
        this.screenhval = Math.round(val * 0.34843)
        this.leftval = -Math.round(val) + 311
      } else {
        this.screenhval = 200
        this.leftval = -Math.round(val)
      }
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
      this.screenhval = parseInt(this.screenh)
      // mobile初始化数据
      if (!this.showBol) {
        this.screenhval = 140
      }
      this.logopic = this.imgdata
      this.logopic.push(this.imgdata[0])
      this.logopic.unshift(this.imgdata[2])
    },
    clickimg (num) {
      if (num - this.idx > 0) {
        this.paly(-this.screenw - 50)
        this.idx = num
        if (num === 4) {
          this.idx = 1
        }
      } else if (num - this.idx < 0) {
        this.paly(parseInt(this.screenw) + 50)
        this.idx = num
        if (num === 1) {
          this.idx = 4
        }
      }
    },
    paly (offset) {
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) < -(this.screenw * (this.logopic.length - 1))) {
            this.leftval = -(parseInt(this.screenw) + 50)
          } else if (Math.round(this.leftval) > -this.screenw * 1) {
            this.leftval = -((parseInt(this.screenw) + 50) * (this.logopic.length - 2))
          }
          this.animated = false
        }
      }
      go()
    },
    paly2 (offset) {
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) < -(this.screenw * (this.logopic.length - 2))) {
            this.leftval = -(parseInt(this.screenw))
          } else if (Math.round(this.leftval) > -this.screenw * 1) {
            this.leftval = -((parseInt(this.screenw)) * (this.logopic.length - 2))
          }
          this.animated = false
        }
      }
      go()
    },
    prev () {
      if (this.idx === 1) {
        this.idx = 3
      } else {
        this.idx--
      }
      if (this.showBol) {
        this.paly(parseInt(this.screenw) + 50)
      } else {
        this.paly2(parseInt(this.screenw))
      }
    },
    next () {
      if (this.idx === 3) {
        this.idx = 1
      } else {
        this.idx++
      }
      if (this.showBol) {
        this.paly(-this.screenw - 50)
      } else {
        this.paly2(-parseInt(this.screenw))
      }
    }
  }
}
</script>
<style scoped>
    .logolist{
      background-color: #fff;
      position: relative;
    }
    .imgbox{
        position: relative;
        overflow: hidden;
    }
    .contant{
        position: absolute;
    }
    .contantimg{
      height: 100%;
      float: left;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-right: 50px;
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
    .page{
      margin-top: 32px;
      margin-left: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .page p{
      font-size: 14px;
      line-height: 14px;
      margin: 0 16px;
      font-weight: bold;
      color: #666;
    }
    .page span:nth-child(1){
      color: #333;
    }
    .page img{
      width: 20px;
      height: 12px;
      filter: grayscale(100%);
    }
    .page img:hover{
      filter: grayscale(100%);
    }
    .rightcls{
        transform: rotate(180deg);
    }
    /* moblie */
    .m_page{
      margin: 20px auto 0 !important;
      justify-content: center;
    }
    .mleftcls{
         width: 15px;
        height: 25px;
        position: absolute;
        top: 50%;
        margin-top: -12.5px;
        left: 0;
        z-index: 1;
    }
    .mrightcls{
         width: 15px;
        height: 25px;
        position: absolute;
        top:50%;
        margin-top: -12.5px;
        right: 0;
        z-index: 1;
    }
    /* ---- */
    .imgslider{
      width: 100%;
      height: 200px;
      margin-top: 20px;
      display: flex;
      justify-content: flex-start;
      /* overflow: hidden; */
    }
    .imgsliderright{
      width: 43%;
    }
    .imgslider img{
      float: left;
    }
    .imgslider1{
      /* width: calc(100% - 150px);
      width: -webkit-calc(100% - 150px); */
      width: 57%;
      height: 200px;
      /* float: left; */
    }
    .imgslider2{
      /* width: 150px; */
      width: 100%;
      height: 50%;
    }
    .imgslider3{
      /* width: 150px; */
      width: 100%;
      height: 50%;
    }
</style>
