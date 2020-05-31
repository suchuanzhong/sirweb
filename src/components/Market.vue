<template>
    <!-- 营销 -->
      <div class="contant">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>整合营销</p>
        </div>
        <div class="marketdes" :class="{m_investdes:!showBol}">
          <div class="destext">
            <p class="title">资源+资本的商业地产营销专家</p>
            <p class="des1">我们的做法，与普通营销代理有所不同。因为市场在变，游戏规则在变。</p>
            <p class="des2">思睿地产依托独特的 “5D” +“5S”商业地产整合营销模式，销冠营销体系，超10万的高端商业、住宅、商户客户资源，狼性营销团队、数十个成功案例，专注于商业地产（商业、公寓）、文旅地产、住宅、产业地产等四大核心板块的全程营销服务，包括定制销售、大户销售、包销、渠道销售、常规代理、渠道整合等服务形式，被业界誉为“商业地产营销专家”。</p>
          </div>
          <div class="desimg">
            <img src="../../static/img/market2.jpg" alt="">
            <div class='redbox' v-if="showBol"></div>
          </div>
        </div>
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>销冠营销体系</p>
        </div>
        <div class="marketmain" :class="{m_marketmain:!showBol}">
            <div class="itemcls" v-for="(item, index) in market" :key="index">
              <div class="mainicon"><img :src="item.urlstr1" alt=""></div>
                <p class="maintitle">{{item.textone}}</p>
                <span class="redbox2"></span>
                <div class="desbox">
                  <p class="maindes" v-for="(item, index) in item.texttwo" :key="index">{{item}}</p>
                </div>
            </div>
        </div>
        <div v-if="showBol" class="fiveimg" >
            <div v-for="(item, index) in market2" :key="index" class="imgbox">
              <img :src="item.urlstr1" alt="">
              <p class="slg_text">{{item.textone}}</p>
            </div>
        </div>
        <div v-else class="m_fiveimg" >
          <div class="m_fivebox">
            <div v-for="(item, index) in market2" :key="index" class="imgbox">
              <img :src="item.urlstr1" alt="">
              <p>{{item.textone}}</p>
            </div>
          </div>
        </div>
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>整合营销模式</p>
        </div>
        <div  class="fiveD" :class="{m_fiveD:!showBol}">
          <p v-if="showBol">独特的&nbsp;&nbsp;“&nbsp;&nbsp;5D&nbsp;&nbsp;”&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;“&nbsp;&nbsp;5S&nbsp;&nbsp;”&nbsp;&nbsp;商业地产整合营销模式</p>
          <p v-else>独特的&nbsp;&nbsp;“&nbsp;&nbsp;5D&nbsp;&nbsp;”&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;“&nbsp;&nbsp;5S&nbsp;&nbsp;”<br>&nbsp;&nbsp;商业地产整合营销模式</p>
          <div class="fivedimg" :class="{m_fivedimg:!showBol}">
            <div class="ds">
              <p>1D常规销售&nbsp;&nbsp;<br v-if="!showBol">2D渠道分销</p>
              <p>3D大户定制&nbsp;&nbsp;<br v-if="!showBol">4D基金投资</p>
              <p>5D股权交易<span v-if="showBol">/</span><br v-else>地产REITs</p>
            </div>
            <div class="dsimg"><img src="../../static/img/3_03.png" alt=""></div>
            <div class="ds">
              <p>资金支持&nbsp;&nbsp;<br v-if="!showBol">资产改造升级</p>
              <p>全程招商&nbsp;&nbsp;<br v-if="!showBol">运营管理</p>
              <p>二次出售</p>
            </div>
          </div>
        </div>
        <!-- 5板块 -->
        <div class="palte" :class="{m_palte:!showBol}">
          <div class="titlebox" :class="{m_titlebox:!showBol}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>服务内容</p>
          </div>
          <div  class="paltemain">
            <div v-for="(item, index) in platedata" :key="index" class="palteitem" :class="{m_palteitem:!showBol}">
                <img :src="item.urlstr" alt="">
                <p v-for="(item, index) in item.children" :key="index">{{item}}</p>
            </div>
          </div>
        </div>
        <!-- 案例 -->
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>数十个成功案例展示</p>
        </div>
        <Marketslider :showBol="showBol" :screenw="screenw" :sliderdata="brandsliderdata" :bigdata="bigdata"/>
    </div>
</template>
<script>
import Marketslider from './Marketslider'
import Unit from '@/unit'
export default {
  components: {Marketslider},
  props: ['screenw', 'showBol'],
  data () {
    return {
      market: [
        {id: 0, urlstr1: '../../static/img/market3.png', textone: '三大重点', texttwo: ['快速树立影响力', '提高产品吸引力', '提高现场感染力']},
        {id: 1, urlstr1: '../../static/img/market4.png', textone: '四大关键', texttwo: ['营销题材', '销售模式', '行销渠道', '管理执行']},
        {id: 2, urlstr1: '../../static/img/market5.png', textone: '五大工程', texttwo: ['价值工程', '形象工程', '希望工程', '信心工程', '放心工程']},
        {id: 3, urlstr1: '../../static/img/market6.png', textone: '六大系统', texttwo: ['价值梳理', '营销推广', '招商促进', '运营管理', '销售推盘', '案场管理']}
      ],
      market2: [
        {id: 0, urlstr1: '../../static/img/market7.png', textone: '超10万高端客户资源'},
        {id: 1, urlstr1: '../../static/img/market8.png', textone: '专注四大核心板块'},
        {id: 2, urlstr1: '../../static/img/market9.png', textone: '5种销售合作模式'},
        {id: 3, urlstr1: '../../static/img/market10.jpg', textone: '狼性营销团队'},
        {id: 4, urlstr1: '../../static/img/market11.jpg', textone: '大宗交易'}
      ],
      platedata: [
        {id: 0, text: '', urlstr: '../../static/img/plate3_1.png', children: ['项目交底', '团队组建', '项目发展战略建议']},
        {id: 1, text: '', urlstr: '../../static/img/plate3_2.png', children: ['招商及运营前置', '大客户定制', '定位及商业主题包装']},
        {id: 2, text: '', urlstr: '../../static/img/plate3_3.png', children: ['项目及产品优化', '制定营销策略', '制定推广策略']}
      ],
      brandsliderdata: [],
      bigdata: []
    }
  },
  mounted () {
    this.initbrand()
  },
  methods: {
    initbrand () {
      this.axios.post('api/procet/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, isbusiness: 70}).then((res) => {
        res.data.map((item, index) => {
          item.imgs = Unit.URL + item.imgs
          item.num = index
          index === 0 ? item.bol = true : item.bol = false
        })
        let dataarr = JSON.parse(JSON.stringify(res.data)).slice(9, 13)
        let newdata = dataarr
        newdata.push(dataarr[0])
        newdata.unshift(dataarr[3])
        this.bigdata = newdata
        this.brandsliderdata = JSON.parse(JSON.stringify(res.data)).slice(9, 13)
        // console.log(this.bigdata, this.brandsliderdata)
        // this.bigdata = JSON.parse(JSON.stringify(res.data)).slice(0, 9)
      })
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
    /* 营销介绍 */
    .marketdes{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .redbox{
      width: 20px;
      height: 60px;
      background-color: #d62c28;
      float: left;
      margin-left: 70px;
      margin-top: -30px;
    }
    .destext{
      width: 53%;
    }
    .title{
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 18px;
    }
    .des1{
      font-size: 16px;
      color: #333;
      line-height: 30px;
      margin: 24px 0 18px;
      /* letter-spacing: -2px; */
    }
    .des2{
      font-size: 16px;
      color: #666;
      line-height: 28px;
    }
    .desimg{
      width: 482px;
      height: 330px;
      background: url('../../static/img/market1.jpg') no-repeat;
    }
    .desimg img{
      float: right;
      width: 450px;
      height: 300px;
    }
    /* 4个模块 */
    .marketmain{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      margin:0 auto 90px;
    }
    .itemcls{
      width: 25%;
      padding: 24px 0 30px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .itemcls:hover{
      box-shadow: 6px 6px 20px rgba(191,191,191,.5)
    }
    .mainicon{
      width: 40px;
      height: 40px;
      /* display: flex; */
      /* align-items: center; */
    }
    .maintitle{
      font-size: 18px;
      line-height: 18px;
      margin: 24px 0 20px;
      font-weight: bold;
      color: #333;
    }
    .redbox2{
      display: block;
      width: 20px;
      height: 3px;
      background-color: #d62c28;
      margin-bottom: 18px;
    }
    .desbox{
      width: 74%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .itemcls:nth-child(2) .desbox,
    .itemcls:nth-child(3) .desbox{
      width: 60%;
    }
    .itemcls:nth-child(3) .desbox{
      justify-content: flex-start;
    }
    .itemcls:nth-child(3) .desbox p{
      width: 50%;
      text-align: center;
    }
    .maindes{
      font-size: 16px;
      line-height: 28px;
      color: #666;
    }
    /* 五大模块 */
    .fiveimg{
      display: flex;
      justify-content: flex-start;
    }
    .imgbox{
      width: 25%;
      height: 384px;
    }
    .imgbox img{
      width: 100%;
      /* height: 100%; */
    }
    .imgbox p{
      font-size: 22px;
      line-height: 22px;
      text-indent: 20px;
      color: #fff;
      margin-top: -62px;
    }
    /* 销冠 */
    .fiveD{
      font-size: 16px;
      color: #666;
      text-align: center;
    }
    .fivedimg{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: #666;
      padding-bottom: 80px;
    }
    .ds{
      height: 80px;
      line-height: 26px;
      text-align: start;
      margin-top: 176px;
    }
    .dsimg{
      margin:20px;
    }
    /* 50板块 */
    .palte{
      width: 100%;
      height: 680px;
      position: relative;
      margin-top: -50px;
      background: url('../../static/img/consultant6.jpg') no-repeat;
    }
    .palte .titlebox{
      padding-top: 30px;
      color: #fff;
    }
    .paltemain{
      width: 1200px;
      height: 100%;
      margin: auto;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
    }
    .palteitem{
      width:250px;
      height: 300px;
      padding: 40px 33px;
      border: 1px solid #fff;
      border-radius: 10px;
      text-align: center;
    }
    .palteitem img{
      margin:0 auto 54px;
    }
    .palteitem p{
      font-size: 18px;
      color: #fff;
      line-height: 30px;
      /* text-align: left; */
    }
    .palteimg{
      width: 100%;
    }
    .m_palteitem{
      width: 31%;
      padding: 20px 2px 0;
      height: 150px;
      border-radius: 6px;
    }
    .m_palteitem img{
      width: 15px;
      height: 15px;
      margin-bottom: 20px;
    }
    .m_palteitem p{
      font-size: 8px;
      line-height: 16px;
      text-align: center;
    }
    /* moblie */
    .m_titlebox{
      padding: 1px 30px 0 !important;
      margin:0 auto 30px;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
  /*  */
  .m_investdes{
    width: 100%;
    padding: 0 30px;
    flex-wrap: wrap;
  }
  .m_investdes .destext{
    width: 100%;
  }
  .m_investdes .title{
    font-size: 16px;
    line-height: 16px;
  }
  .m_investdes .des1{
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 10px;
  }
  .m_investdes .des2{
    font-size: 14px;
    line-height: 26px;
    text-align: justify;
  }
  .m_investdes .desimg{
    width:100%;
    height: 200px;
    margin-top: 24px;
  }
  .m_investdes .desimg img{
    width:100%;
    height:200px;
  }
  /* 销冠 */
  .m_marketmain{
    width: 100%;
    padding: 0 30px;
    margin: 30px 0 0;
    flex-wrap: wrap;
  }
  .m_marketmain .itemcls{
    width: 43%;
    padding: 0 0 26px;
    display: block;
    text-align: center;
  }
  .m_marketmain .desbox{
    width: 100% !important;
    justify-content: center;
  }
  .m_marketmain .itemcls:nth-child(1) .maindes{
    margin-right: 0;
    text-align: center;
  }
  .m_marketmain .itemcls:nth-child(3) .maindes{
    width: 50%;
    padding: 0 1%;
    margin: 0;
    text-align: center;
  }
  .m_marketmain .maindes{
    font-size: 14px;
    line-height: 22px;
  }
  .m_marketmain .maindes:nth-child(odd){
    margin-right: 16px;;
  }
  .m_marketmain .mainicon{
    display: block;
    width:28px;
    height: 28px;
    margin: auto;
  }
    .m_marketmain img{
    width:100%;
    height: 100%;
    /* margin-right: 1px; */
  }
  .m_marketmain .maintitle{
    margin: 16px 0 10px;
    font-size: 16px;
  }
  .m_marketmain .redbox2{
    margin:0 auto 13px;
  }
   /* 五模块 */
    .m_fiveimg{
      width: 100%;
      padding: 0 30px;
      overflow-y: auto;
    }
    .m_fivebox{
      overflow: hidden;
      width: 850px;
      display: flex;
      justify-content: flex-start;
    }
    .m_fivebox .imgbox{
      width: 150px;
      height: 150px;
      margin-right: 20px;;
    }
    .m_fivebox .imgbox p{
      font-size: 14px;
      text-indent: 0;
      text-align: center;
      margin-top: -30px;
    }
    /* 模式 */
    .m_fiveD{
      width:100%;
      padding: 0 30px;
      font-size: 10px;
      line-height: 16px;
    }
    .m_fiveD img{
      width:100%;
    }
    .m_fivedimg{
      width: 100%;
      font-size: 10px;
      padding:0 15px 0;
      justify-content: space-between;
      align-items: center;
    }
    .m_fivedimg .dsimg{
      width: 54%;
      /* margin:14px 14px 0 10px; */
      margin:14px 2px 0 0;
    }
    .m_fivedimg .ds{
      width: auto;
      height: auto;
      margin:0 0 0;
      line-height: 16px;
    }
    .m_fivedimg .dsimg img{
      width: 100%;
      /* height: 100%; */
    }
  /* 50 */
    .m_palte{
      width: 100%;
      padding: 0 30px 30px;
      height: auto;
      margin-top: 0;
    }
    .palteimg{
      width: 100%;
      height: auto;
    }
    .m_palte .paltemain{
      width: 100%;
      padding-left: 0;
      justify-content: space-between;
    }
    .m_palte .palte_right{
      width: 100%;
    }
    .m_palte .palte_title{
      font-size: 20px;
      line-height: 50px;
      padding-left: 0;
      text-align: center;
    }
    .m_palte .paltecont{
      width: 100%;
      padding: 0;
      font-size: 14px;
      line-height: 20px;
      border: none;
    }
    .m_palte .paltecont div{
      width: 33%;
      margin-right: 0;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    .m_palte .paltecont p{
      display: flex;
      height: 33.333%;
      align-items: center;
      margin-bottom: 0;
    }
</style>
