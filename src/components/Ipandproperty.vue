<template>
    <!-- IP -->
      <div class="contant">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>IP场景打造</p>
        </div>
        <div class="ipmain" :class="{m_ipmain:!showBol}">
          <div>
            <p class="iptitle">以文化力驱动城市空间美学品质</p>
            <p class="ipdes">思睿提供商业场景空间的内容挖掘、场景设计及效果制作服务，彰显商业主题定位，展示其景观价值、文化价值和体验价值。</p>
            <div class="deal" v-if="showBol">
              <div class="active" @click="prev">
                <img src="../../static/img/left1.png" alt="">
              </div>
              <div @click="next">
                <img src="../../static/img/right1.png" alt="">
              </div>
            </div>
          </div>
          <div class="scene" v-for="(item, index) in scene" :key="index" @mouseenter="enter(index, 1)" @mouseleave="leave(index)">
              <div class="sceneimg">
                <img :src="item.urlstr" alt="">
              </div>
              <p class="scenetitle">{{item.textnum}}</p>
              <p class="scenetext" v-for="(item, idx) in item.texttwo" :key="idx"><span></span> {{item}}</p>
              <div class="mask" v-if="item.bol&&showBol">
                <p class="scenetitle">{{item.textnum}}</p>
                <p class="scenetext" v-for="(item, idx) in item.texttwo" :key="idx">{{item}}</p>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol'],
  data () {
    return {
      scene: [
        {textnum: '三目标', urlstr: '../../static/img/IP1.png', texttwo: ['主题彰显', '有效运营', '人气提升'], bol: false},
        {textnum: '四步骤', urlstr: '../../static/img/IP2.png', texttwo: ['商业策划', '主题确定', '场景设计', '效果制作'], bol: false},
        {textnum: 'N主题', urlstr: '../../static/img/IP3.jpg', texttwo: ['艺术动漫类', '抽象概念类', '历史文化类', '生态自然类', '亲子体验类'], bol: false}
      ],
      idx: -1
    }
  },
  methods: {
    enter (num, n) {
      this.scene.map((item, index) => {
        num === index ? item.bol = true : item.bol = false
      })
      if (n === 1) {
        this.idx = -1
      }
    },
    leave (num) {
      this.scene.map((item, index) => {
        item.bol = false
      })
    },
    next () {
      this.idx === 2 ? this.idx = 0 : this.idx++
      this.enter(this.idx)
    },
    prev () {
      this.idx === 0 ? this.idx = 2 : this.idx--
      this.enter(this.idx)
    }
  }
}
</script>
<style scoped>
    .contant{
        background-color: #fff;
        overflow: hidden;
    }
    .titlebox{
      font-size: 24px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 90px;
      line-height: 24px;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:70px auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    /* ip */
    .ipmain{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding-bottom: 80px;
    }
    .ipmain>div{
      width: 25%;
    }
    .iptitle{
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 30px;
      padding-right: 120px;
    }
    .ipdes{
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin: 17px 0 43px;
      padding-right: 43px;
    }
    .deal{
      display: flex;
      justify-content: flex-start;
    }
    .deal div{
      width: 50px;
      height: 50px;
      border: 1px solid #d6d6d6;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1px;
    }
    .scene{
      padding: 30px;
      text-align: center;
      border: 1px solid #e4e4e4;
      position: relative;
    }
    .sceneimg, .sceneimg img{
      width: 100%;
    }
    .scenetitle{
      font-size: 20px;
      color: #333;
      font-weight: bold;
      line-height: 20px;
      margin: 20px 0 15px;
    }
    .scenetext{
      font-size: 16px;
      color: #666;
      line-height: 26px;
    }
    .scenetext span{
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #d62c28;
      vertical-align: middle;
    }
    /* 蒙版 */
    .mask{
      width: 100%;
      height: 100%;
      background-color: #d62c28;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 10px 10px 5px rgba(221,221,221,.75);
    }
    .mask p{
      color: #fff !important;
    }
    /* moblie */
    .m_titlebox{
      padding: 1px 30px 0;
      margin:0 auto 30px;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
    /* ip */
    .m_ipmain{
      width: 100%;
      padding: 0 30px;
      flex-wrap: wrap;
    }
    .m_ipmain>div{
      width: 100%;
    }
    .m_ipmain .iptitle{
      font-size: 16px;
      line-height: 16px;
      padding: 0;
    }
    .m_ipmain .ipdes{
      font-size: 14px;
      line-height: 22px;
      margin: 16px 0 30px;
      padding: 0;
    }
    .m_ipmain .scenetitle{
      font-size: 16px;
      line-height: 16px;
      margin: 15px 0 16px;
    }
    .m_ipmain .scenetext{
      display: inline-block;
      float: left;
      font-size: 14px;
      line-height: 22px;
      width: 50%;
    }
</style>
