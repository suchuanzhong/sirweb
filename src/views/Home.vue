<template>
  <div>
      <Banner  @istransform="istransform"/>
      <div class="lefttime" :style="is_left?{transform:'translateX(225px)'}:{transform:'translateX(0)'}">
        <HomeCarousel class="homepart" :screenh="screenHeight" :screenw="screenWidth" :showBol="screenshow"/>
        <div>
          <div class="titlebox" :class="{'m_titlebox':!screenshow}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>深耕行业,永不停歇逐梦步伐</p>
          </div>
          <div class="part1" :class="{m_part1:!screenshow}" :style="screenWidth>1200?{width:'1200px'}:{width:'100%'}">
            <div class="boxonepic">
              <div class="imgbox">
                <img v-if="screenshow" src="../../static/img/pic1_03.jpg" alt="">
                <img v-else src="../../static/img/mhome1.jpg" alt="">
              </div>
            </div>
            <div class="part1_text" v-if="screenshow">
              <p class="part1_title">国内领先文旅商地产整合咨询平台</p>
              <p>上百个文旅地产实操经验，服务与研究多个成熟项目，</p>
              <p>与多个文旅IP品牌建立长期战略合作关系，通过严谨评审机制，多维创新方法，海量数据研判提供一站式系统解决方案。</p>
              <p class="part1_title">西南最大商业地产招商落地呈现团队</p>
              <p>25年成功经验，15000+商家资源，网状复合招商模式，</p>
              <p>以及全球首个基于线下全系支撑的不动产租赁网络服务平台——阿拉丁云图。</p>
              <p class="part1_title">西南一流服务式高端公寓营销专家</p>
              <p>销冠营销体系 全链条资源整合 运营前置销售思维</p>
              <p>独特的 “5D” +“5S”商旅地产整合营销模式， “3456”销售原则，保障项目强劲发展。</p>
            </div>
            <div class="part1_text" v-else>
              <p class="part1_title">国内领先文旅商地产整合咨询平台</p>
              <p style="letter-spacing:-0.4px">上百个文旅地产实操经验，服务与研究多个成熟项目，与多个文旅IP品牌建立长期战略合作关系，通过严谨评审机制，多维创新方法，海量数据研判提供一站式系统解决方案。</p>
              <p class="part1_title">西南最大商业地产招商落地呈现团队</p>
              <p>25年成功经验，15000+商家资源，网状复合招商模式，以及全球首个基于线下全系支撑的不动产租赁网络服务平台——阿拉丁云图。</p>
              <p class="part1_title">西南一流服务式高端公寓营销专家</p>
              <p>销冠营销体系 全链条资源整合 运营前置销售思维独特的 “5D” +“5S”商旅地产整合营销模式， “3456”销售原则，保障项目强劲发展。</p>
            </div>
          </div>
          <div class="numandservice" :class="{'m_nas':!screenshow}">
            <!-- 数据部分 -->
            <div class="numdata">
              <p class="times">截止2019.12</p>
              <ul class="servicedata slg_servicedata xxs_servicedata" :class="{'m_servicedata':!screenshow}">
                <li class="lg_number slg_number md_number sm_number xs_number">
                    <p class="lg_number_title slg_number_title md_number_title sm_number_title xs_number_title">服务城市</p>
                    <Numbergrow :value="50" :showBol="screenshow"/>
                    <span class="addcls">+</span>
                </li>
                <li class="lg_number slg_number md_number sm_number xs_number">
                    <p class="lg_number_title slg_number_title md_number_title sm_number_title xs_number_title">服务项目</p>
                    <Numbergrow :value="200" :showBol="screenshow"/>
                    <span class="addcls">+</span>
                </li>
                <li class="lg_number slg_number md_number sm_number xs_number">
                    <p v-if="screenshow" class="lg_number_title slg_number_title md_number_title sm_number_title xs_number_title">服务面积(m²)</p>
                    <p v-else class="lg_number_title slg_number_title md_number_title sm_number_title xs_number_title">服务面积(万m²)</p>
                    <Numbergrow :value="screenshow?50000000:5000" :showBol="screenshow"/>
                    <span class="addcls" v-if="!screenshow">{{screenshow?'':'+'}}</span>
                </li>
                <li style="border-right:none;" class="lg_number slg_number md_number sm_number xs_number">
                    <p class="lg_number_title slg_number_title md_number_title sm_number_title xs_number_title">服务品牌</p>
                    <Numbergrow :value="60" :showBol="screenshow"/>
                    <span class="addcls">+</span>
                </li>
              </ul>
            </div>
            <!-- 思睿研究 -->
            <div class="titlebox clearfloat servicetitle" :class="{'m_titlebox':!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>探索实践,不断创造商旅新价值</p>
            </div>
            <div class="slidercontant">
                <Homeslider :screenw="screenWidth" :showBol="screenshow" :screenh="screenHeight" tipstext="精选项目" :sliderdata="sliderdata[0]"/>
                <Homeslider class="servicetop" :screenw="screenWidth" :showBol="screenshow" :screenh="screenHeight" tipstext="思睿研究" :sliderdata="sliderdata[1]"/>
            </div>
          </div>
        </div>
        <!-- 文旅地产 -->
        <div class="brigade" :class="{m_brigade:!screenshow}">
          <div class="titlebox" :class="{'m_titlebox':!screenshow}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>文旅商地产一站式系统解决方案</p>
          </div>
          <Homeservice class="homepart" :showBol="screenshow" :screenw="screenWidth"/>
        </div>
        <div class="logopart"  :class="{'m_logopart':!screenshow}">
          <div class="titlebox" :class="{'m_titlebox':!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>业界巨擘的共同选择</p>
            </div>
            <Logoslider :screenw=" Math.round(screenWidth)" :showBol="screenshow" :screenh="screenHeight"/>
            <!-- <Logoslider :screenw=" Math.round(screenWidth*0.8)" :showBol="screenshow" :screenh="screenHeight"/> -->
        </div>
        <div class="footercls">
            <Footer :showBol="screenshow"/>
        </div>
      </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner'
import HomeCarousel from '@/components/HomeCarousel'
import Homeservice from '@/components/Homeservice'
import Numbergrow from '@/components/Numbergrow'
import Homeslider from '@/components/Homeslider'
import Logoslider from '@/components/Logoslider'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, HomeCarousel, Footer, Numbergrow, Homeservice, Homeslider, Logoslider},
  data () {
    return {
      screenHeight: 0,
      screenWidth: 0,
      screenshow: true,
      sliderdata: [],
      is_left: false
    }
  },
  beforeMount () {
    this.showscreen()
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      this.screenWidth = val
    }
  },
  mounted () {
    this.screenHeightFuc()
    this.initaxios()
  },
  methods: {
    initaxios () {
      const baseUrl = process.env.API_ROOT
      let p1 = new Promise((resolve, reject) => {
        this.axios.post(baseUrl + '/procet/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, isindex: 20}).then((res) => {
          let dataarr = res.data.slice(0, 3)
          dataarr.map(item => {
            item.imgs = Unit.URL + item.imgs
          })
          if (!this.screenshow) {
            dataarr.push(dataarr[0])
            dataarr.unshift(dataarr[2])
          }
          resolve(dataarr)
        })
      })
      let p2 = new Promise((resolve, reject) => {
        this.axios.post(baseUrl + '/study/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, isindex: 20}).then((res) => {
          res.data.slice(0, 3)
          res.data.map(item => {
            item.imgs = Unit.URL + item.imgs
          })
          if (!this.screenshow) {
            res.data.push(res.data[0])
            res.data.unshift(res.data[2])
          }
          resolve(res.data)
        })
      })
      Promise.all([p1, p2]).then((rest) => {
        this.sliderdata = rest
        // console.log(rest)
        // this.initdata(rest)
      })
    },
    istransform (data) {
      this.is_left = data
    },
    // initdata (data) {
    //   if (this.screenshow) {
    //     this.sliderdata = data
    //   } else {
    //     this.sliderdata[0] = [data[0][0]]
    //     this.sliderdata[1] = [data[1][0]]
    //     console.log(this.screenshow, this.sliderdata)
    //   }
    // },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
        this.screenHeight = document.documentElement.clientHeight // 窗口高度
        this.screenWidth = document.documentElement.offsetWidth // 窗口宽度
        this.screenHeight = (this.screenHeight / 2.5)
      }
    },
    screenHeightFuc () {
      if (document.documentElement.clientWidth > 767) {
        this.screenHeight = document.documentElement.clientHeight * 0.6191195 // 窗口高度
      }
      this.screenWidth = document.documentElement.offsetWidth // 窗口宽度
    }
  }
}
</script>
<style scoped>
    /* ... */
    .lefttime{
      /* position: absolute; */
      transition: all ease-in-out 0.3s;
    }
    .homepart{
        position: relative;
    }
    .clearfloat{
      clear: both;
    }
    /* new2.0 */
    .titlebox{
      font-size: 34px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 80px;;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:60px auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    /* part1 */
    .part1{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .boxonepic{
      width: 536px;
      height: 520px;
      background-color: #e6e6e6;
    }
    .imgbox{
      width: 520px;
      height: 520px;
    }
    .imgbox img{
      width: 100%;
      height: 100%;
    }
    .part1_text{
      width: 50%;
      font-size: 14px;
      color: #333;
      line-height: 20px;
    }
    .part1_text p:nth-child(3n){
      margin-bottom: 33px;
    }
    .part1_title{
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
      margin-bottom: 19px;
    }
    /* 数字研究部分 */
    .numandservice{
      height: auto;
      background: url('../../static/img/homenumbj.jpg') no-repeat;
      background-size: 100% 700px;
      margin:-140px auto 0;
    }
    .numdata{
      width: 68.16%;
      height: 280px;
        float: right;
      background-color: #d62c28;
    }
    .servicedata{
      width: 100%;
      height: 190px;
        display: flex;
        justify-content:center;
        align-items: flex-start;
        flex-wrap: wrap;
        padding-top: 20px;;
    }
    .servicedata li{
        list-style: none;
        color: #fff;
        padding:0 4%;
    }
    .servicedata li:nth-child(1){
      margin-left: 18%;
    }
    .servicedata li p{
        font-weight: normal;
    }
    .times{
      display: block;
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 20px;
      color: #333;
      background-color: #ffdf4c;
      float: right;
      margin: 30px 70px 10px 0;
    }
    /* 研究 */
    .servicetitle{
      padding-top: 1px;
    }
    .slidercontant{
        /* width: 1200px; */
        height: 100%;
        /* display: flex;
        justify-content:space-between;
        flex-wrap: wrap; */
        margin: auto;
    }
    .servicetop{
      margin-top: 110px;
    }
    /* 文旅 */
    .brigade{
      background: url('../../static/img/homebj2.jpg');
      /* background-size: 100% 100%; */
      overflow: hidden;
      margin-top: 110px;
      padding-bottom: 20px;
    }
    .brigade .titlebox{
      color: #fff;
    }
    .logopart{
        background-color: #fff;
        padding: 0;
        margin-bottom: 100px;
    }
    /* --- */
    .addcls{
      margin-left: -5px;
      vertical-align: top;
    }
    /* mobile */
    .m_titlebox{
      font-size: 18px;
      margin-bottom: 40px;
      line-height: 18px;
      /* font-weight: normal; */
    }
    .m_titlebox .com_dot{
      margin: 20px auto 20px;
    }
    /* 深耕部分 */
    .m_part1{
      width: 100%;
      padding:0 30px;
      flex-wrap: wrap;
    }
    .m_part1 .boxonepic,
    .m_part1 .imgbox,
    .m_part1 .part1_text{
      width:100%;
      height: 100%;
      overflow: hidden;
      background-color: #fff;
    }
    .m_part1 .boxonepic{
      margin-top: -12px;
    }
    .m_part1 .imgbox img{
      width: 100%;
      height: 150px;
    }
    .m_part1 .part1_title{
      font-size: 16px;
      line-height: 16px;
      margin-top: 21px;
      margin-bottom: 17px !important;
      /* font-weight: normal; */
      color: #333;
    }
    .m_part1 .part1_text p[data-v-fae5bece]:nth-child(3n) {
        margin-bottom: 28px;
    }
    /* 数据部分 */
    .m_nas{
      width: 100%;
      margin: 0 auto;
      background: url('');
    }
    .m_nas .numdata{
      width: 100%;
      height:160px;
    }
    .m_nas .times{
      width: 96px;
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      margin: 20px 30px 0 0
    }
    .m_servicedata{
      width: 100%;
      padding: 20px 30px 40px;
      justify-content: space-between;
      height: auto;
    }
    .m_servicedata li:nth-child(1){
      margin-left: 0;
    }
    .m_servicedata p{
        font-size: 14px !important;
        margin-bottom: 2px;
    }
    .m_servicedata li{
        font-size: 20px !important;
        padding:0 14px ;
    }
    /* 探索实践 */
    .m_nas .slidercontant{
      width: 100%;
    }
    .m_nas .servicetop{
      margin-top: 30px;
    }
    /* 文旅地产 */
    .m_brigade{
      margin-top: 10px;
    }
    /* 业界 */
     .m_logopart{
      padding: 0 0 10px;
      margin-bottom: 0;
    }
    /* --- */
</style>
