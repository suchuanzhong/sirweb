<template>
    <div>
        <Banner  @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(50%)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
          <div class="companymain" :class="{m_company:!screenshow}">
            <div class="com_title" :class="{'m_titlebox':!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>公司简介</p>
            </div>
            <div class="com  sm_company" >
              <div class="com_pic">
                <img src="../../static/img/company_031.jpg" alt="">
              </div>
              <div class="comtext">
                <p class="com_name">成都思睿地产顾问有限公司</p>
                <p class="com_textone"></p>
                <p class="com_textone"></p>
                <p class="com_texttwo">国内首屈一指的商业、文旅及城市运营综合平台服务商。以创新的“咨询+资源+创意”三核驱动，依托思睿跨界资源优势、核心团队超过25年丰富的实战经验、国际前沿视野、敏锐的市场洞察力、本地化的落地能力、全链条的专业能力以及专业团队。</p>
              </div>
              <div class="comtext1">
                <img src="../../static/img/company_032.jpg" alt="">
                <img src="../../static/img/company_033.jpg" alt="">
                <img src="../../static/img/company_034.jpg" alt="">
                <img src="../../static/img/company_035.jpg" alt="">
              </div>
              <div class="comtext2">
                <p class="com_texthree textcolor1">在商业咨询顾问、设计评审、场景营造、业态招商、整合营销、资产运营、物业管理、金融服务、开发管理9大领域建立起核心竞争力；</p>
                <p class="com_texthree textcolor2">并广泛涉足文旅、教育、康养、农业、影视等产业，成为“战略+资源+执行兼备”的专业团队，并借助互联网科技、大数据应用、金融服务等平台，全力构建商旅及城市运营全程服务生态圈。</p>
                <p class="com_textfour"> <span v-if="screenshow" class="spanline"></span> 为客户提供最高效完善的咨询服务、最专业的决策规划建议,挖掘项目最大的价值潜力，为客户提供咨询、研究、规划、投资、运营等全方位的综合解决方案。</p>
              </div>
            </div>
          </div>
          <!-- <div class="company slg_company md_company sm_company" :class="{m_company:!screenshow}" >
            <div class="companypic">
              <img  src="../../static/img/company_03.jpg" alt="">
            </div>
            <div class="companytext slg_companytext md_companytext sm_companytext" :class="{m_companytext:!screenshow}">
              <p v-if="!screenshow">成都思睿地产顾问有限公司成立于2012年,是国内首屈一指的商旅及城市运营综合平台服务商,在商业咨询顾问、设计评审、业态招商、整合营销等9大领域建立起核心竞争力,
                广泛涉足文旅、教育、康养等产业,借助互联网科技、大数据应用、金融服务等平台,全力构建商旅及城市运营全程服务生态圈。
              </p>
                <p v-if="screenshow">成都思睿地产顾问有限公司</p>
                <p v-if="screenshow">成立于2012年，是国内首屈一指的商旅及城市运营综合平台服务商。</p>
                <p v-if="screenshow">依托核心团队超过25年丰富的实战经验和国际前沿视野，思睿在商业咨询顾问、设计评审、场景营造、业态招商、整合营销、资产运营、物业
                  管理、金融服务、开发管理9大领域建立起核心竞争力，并广泛涉足文旅、教育、康养、农业、影视等产业，成为“战略与执行兼备”的团队，并借助互联网科技、大数
                  据应用、金融服务等平台，全力构建商旅及城市运营全程服务生态圈。</p>
                <p v-if="screenshow">成都 | 上海 | 深圳 | 昆明 | 旧金山 | 新加坡</p>
            </div>
          </div> -->
          <div class="main" :class="{m_main:!screenshow}">
              <div class="maintitle md_company sm_company" :class="{m_titlebox:!screenshow}">
                  <div class="com_dot"><i></i><i></i><i></i></div>
                  <p>核心团队</p>
                  <p v-if="screenshow">思睿的核心团队专注了解商旅地产行业情况与客户需求，我们凭借全球化的资源和丰富的本地化经验，<br>敏锐的市场洞悉力，成为行业内毋庸置疑的领导者。</p>
              </div>
              <Swipertemp :showBol="screenshow" :screenw="screenWidth"/>
          </div>
          <Footer :showBol="screenshow"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Bannertext from '@/components/Bannertext'
import Footer from '@/components/Footer'
import Swipertemp from '@/components/Swipertemp'
export default {
  components: {Banner, Footer, Bannertext, Swipertemp},
  data () {
    return {
      screenWidth: 0,
      teamWidth: 0,
      screenshow: true, // 屏幕大小显示
      bannerdata: {textone: '关于SIR', texttwo: '', urlstr: './static/img/aboutbj_01.jpg'},
      distance: 0, //
      count: 0,
      startindex: 0,
      lastindex: 3,
      animated: false,
      offset: 200,
      chilkbol: true,
      is_left: false
    }
  },
  beforeMount () {
    this.showscreen()
  },
  mounted () {
    this.screenHeightFuc()
    // this.init()
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      // console.log(val)
      if (val < 1200) {
        this.screenWidth = val
        this.teamWidth = val * 0.609563
      } else {
        this.screenWidth = 1903 * 0.63058
        this.teamWidth = 1903 * 0.609563
      }
    }
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      } else {
        this.screenshow = true
      }
    },
    screenHeightFuc () {
      if (document.documentElement.offsetWidth > 1200) {
        this.screenWidth = 1903 * 0.63058
      } else {
        this.screenWidth = document.documentElement.offsetWidth // 窗口宽度
      }
      this.teamWidth = this.screenWidth * 0.63058 // 核心团队窗口宽度
    }
  }
}
</script>
<style scoped>
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
    .com_title{
      text-align: center;
      font-size: 24px;
      color: #252525;
      line-height: 24px;
      margin-top: 60px;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:0 auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    .com{
      width: 1050px;
      margin: auto;
      padding: 80px 0 97px;
      overflow: hidden;
    }
    .com_pic{
      width: 540px;
      height: 640px;
      float: left;
    }
    .com_pic img{
      width: 100%;
    }
    .comtext{
      width: 560px;
      height: 340px;
      background-color: #ddeefd;
      margin: 72px 0 0 -55px;
      padding: 80px 0 0 0;
      float: left;
      border-left: 2px solid #75a0c9;
    }
    .comtext1{
      width: 472px;
      height: 472px;
      margin: 66px 0 0 0;
      float: right;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: baseline;
    }
    .comtext1 img{
      width: 210px;
      height: 210px;
      margin: 13px;
    }
    .comtext2{
      width: 540px;
      font-size: 16px;
      line-height: 28px;
      padding-top: 32px;
      float: left;
    }
    .com_name{
      font-size: 18px;
      line-height: 30px;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
      font-weight: 400;
    }
    .com_textone{
      font-size: 18px;
      line-height: 30px;
      color: #333;
      text-align: center;
    }
    .com_texttwo{
      font-size: 16px;
      line-height: 26px;
      color: #6a6a6a;
      margin-top: 29px;
      padding: 0 80px;
      text-align: justify;
    }
    .com_texthree{
      margin-bottom: 18px;
      text-align: justify;
    }
    .textcolor1{
      color: #333;
    }
    .spanline{
      display: inline-block;
      width: 2px;
      height: 70px;
      background-color: #75a0c9;
      float: left;
      margin-top: 10px;
      margin-right: 26px;
    }
    .textcolor2{
      color: #6a6a6a;
    }
    .com_textfour{
      display: block;
      /* padding-left: 26px; */
      /* border-left: 2px solid #75a0c9; */
      color: #959595;
    }
    /* 核心团队 */
    .main{
        padding: 0 0 80px;
        overflow: hidden;
        position: relative;
    }
    .maintitle{
        width:1200px;
        text-align: center;
        margin: auto;
    }
    .maintitle p:nth-child(2){
        font-size: 24px;
        line-height: 24px;
        color: #333;
    }
    .maintitle p:nth-child(3){
        font-size: 18px;
        line-height: 36px;
        color: #333;
        padding: 80px 0 50px;
        text-align: left;
    }
    /* moble */
    .m_company{
      width: 100% !important;
      padding: 0 30px !important;
    }
    .m_company  .com_title{
      font-size: 20px;
      margin-top: 20px;
    }
    .m_titlebox{
      width: 100%;
      /* font-size: 18px !important; */
      margin:30px 0 30px;
    }
    .m_titlebox p{
      font-size: 18px !important;
      line-height: 18px !important;
      font-weight: bold;
    }
    /* .m_company  .com_dot, .m_main .com_dot{
      margin: 17px auto 20px !important;
    } */
    .m_company .com{
      width: 100%;
      padding: 00;
    }
    .m_company .com_pic{
      width: 100%;
      height: 150px;
      overflow: hidden;
    }
    .m_company .com_pic img{
      margin-top: -25px;
    }
    .m_company .comtext{
      width: 100%;
      height: auto;
      margin: 0;
      padding: 15px 30px;
      border: none;
    }
    .m_company .com_name{
      font-size: 16px;
      line-height:26px;
    }
    .m_company .com_textone{
      font-size: 16px;
      line-height: 26px;
    }
    .m_company .com_texttwo{
      padding: 0;
      font-size: 14px;
      line-height: 22px;
      margin-top: 11px;;
    }
    .m_company .comtext1,.m_company .comtext2{
      width: 100%;
      height: auto;
      margin: 0;
      padding: 18px 0 0;
      font-size: 14px;
      line-height: 26px;
    }
    .m_company .comtext2{
      padding: 0;
      line-height: 24px;
    }
    .m_company .comtext2 .com_texthree{
      margin-bottom: 10px;
    }
    .m_company .comtext1{
      display: flex;
      justify-content: space-between;
    }
    .m_company .comtext1 img{
      width: 48%;
      height: 48%;
      margin: 0 0 4% 0;
      /* margin: 2%; */
    }
    /* ----- */
    .m_main{
      padding: 0 0 40px 0;
    }
</style>
