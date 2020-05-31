<template>
    <div>
        <Banner />
        <Bannertext :bannerdata="bannerdata" :showBol="screenshow" />
        <div class="floatbox" v-if="screenshow">
            <ul>
              <li :class="{changebj:changebjbol}" v-for="(item,index) in floatArr" :key="index">
                <div class="geometric">
                  <span class="dot" :class="dotbjfuc==item.id?'dotbj':''" :style="dotbjfuc==item.id?{border:'none'}:''"></span>
                  <span class="line" v-if="index!=floatArr.length-1"></span>
                </div>
                <a :href="'#'+item.id">
                  <p>{{item.text}}</p>
                </a>
              </li>
            </ul>
        </div>
        <div ref="warpper" :class="{m_main:!screenshow}">
            <!-- 咨询顾问 -->
            <div id="0" class="contant">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">咨询顾问 </p>
                    <a href="/serviceadvsior" class="more">了解更多></a>
                    <p class="destitle">文旅商地产一站式系统解决方案</p>
                    <p class="desintroduce" v-if="screenshow">清晰界定项目的商业及战略定位，思睿通过严谨评审机制，多维创新方法，海量数据研判指导客户科学决策。</p>
                </div>
                <ul class="strategic part slg_part md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <li v-for="(item,index) in strategic" :key="index">
                        <img v-if="item.id!=3&&item.id!=1" :src="item.imgstr" alt="" :style="item.id==4&&screenshow?{'margin-top':'20px'}:''">
                        <img v-else-if="item.id==1" :src="item.imgstr" alt="" style="width:86px;height:86px">
                        <img v-else  :src="item.imgstr" alt="" style="width:94px;height:94px">
                        <div class="strategicmain" >
                            <p class="strategictitle">{{item.textone}}</p>
                            <div class="strategicdes" v-if="screenshow">
                                <span v-for="(item,index) in item.texttwo" :key="index">{{item}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 规划评审 -->
            <div id="1" class="contant designbox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">规划评审</p>
                    <!-- <span class="more">了解更多></span> -->
                    <p class="destitle">创意性 经济性 落地性与可持续发展兼具</p>
                    <p class="desintroduce" v-if="screenshow">结合实操经验，思睿归结出商旅地产规划设计的评审标准化体系及内容，全系统推动项目落地。</p>
                </div>
                <ul class="design part md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <li v-for="(item,index) in design" :key="index">
                        <img :src="item.imgstr" alt="" :class="{imganima:animabol}">
                        <div class="designmain" >
                            <p class="designtitle">{{item.textone}}</p>
                            <p class="designdes" v-if="screenshow">{{item.texttwo}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- IP场景打造 -->
            <div id="2" class="contant scenebox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                  <p class="title">IP场景打造</p>
                  <p class="destitle">以文化力驱动城市空间美学品质</p>
                  <p class="desintroduce"  v-if="screenshow">思睿提供商业场景空间的内容挖掘、场景设计及效果制作服务，彰显商业主题定位，展示其景观价值、文化价值和体验价值。</p>
                </div>
                <ul class="scene part md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                  <li v-for="(item,index) in scene" :key="index">
                      <div class="scenemain">
                        <p class="scenenum">{{item.textnum}}</p>
                        <p class="scenetitle">{{item.textone}}</p>
                        <p class="scenedes" v-for="(item,index) in item.texttwo" :key="index">{{item}}</p>
                      </div>
                  </li>
                </ul>
            </div>
            <!-- 品牌招商 -->
            <div id="3" class="contant brandbox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">品牌招商</p>
                    <!-- <a class="more" href="/servicebrand">了解更多></a> -->
                    <p class="destitle">西南第一专业招商团队  全程招商系统解决能力</p>
                    <p class="desintroduce" v-if="screenshow">致力于深入理解项目与商家需求，结合项目进度，通过线上租赁大数据精准匹配资源，线下认证经纪人管<br>家式撮合，不断提升招商效率。</p>
                </div>
                 <div class="asset md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <img src="../../static/img/servicebj_0312.png" alt="" style="width:475px;height:475px;">
                </div>
            </div>
            <!-- 整合营销 -->
            <div id="4" class="contant integrationbox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">整合营销</p>
                    <p class="destitle">销冠营销体系 全链条资源整合</p>
                    <p class="desintroduce" v-if="screenshow">思睿提供商业场景空间的内容挖掘、场景设计及效果制作服务，彰显商业主题定位，展示其景观价值、文化价值和体验价值。</p>
                </div>
                <div class="integrationcont md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <ul class="integration part md_part sm_part">
                        <li v-for="(item,index) in integration" :key="index">
                            <img :src="item.imgstr" alt="">
                            <div class="integrationmain">
                                <p class="integrationtitle">{{item.textone}}</p>
                                <div v-if="screenshow">
                                    <p class="integrationdes"  v-for="(item,index) in item.texttwo" :key="index" >{{item}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="circle slg_circle" v-if="screenshow">
                        <div v-for="(item,index) in dsshow" :key="index" :data-text="item.text" @mouseenter="enterfuc($event)" @mouseleave="leavefuc($event)">
                             <div :class="item.dscls"><p :class="item.dspcls">{{item.text}}</p></div>
                             <div :class="item.dswin" v-if="item.dsbol">
                                <p v-for="(item,index) in item.dstext" :key="index">{{item}}</p>
                                <span :class="item.dsthree"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 资产运营 -->
            <div id="5" class="contant assetbox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">资产运营</p>
                    <p class="destitle">标准化管控流程 大数据决策分析</p>
                    <p class="desintroduce" v-if="screenshow">多年管理经验，思睿系统总结出商旅地产资产运营管理的核心和要素、标准和流程，全面推进项目的成熟旺场。</p>
                </div>
                <div class="asset md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <img style="width:77%;" src="../../static/img/servicebj_04.png" alt="">
                </div>
            </div>
            <!-- 开发管理 -->
            <div id="6" class="contant devebox">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">开发管理</p>
                    <p class="destitle">10+年管理经验 全新的合作开发及资本代建模式</p>
                    <p class="desintroduce" v-if="screenshow">4大阶段，8个核心节点，135个关注点，通过可追溯的系统开发流程，全面促进项目的整体开发管理。</p>
                </div>
                <ul class="deve part md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <li v-for="(item,index) in deve" :key="index">
                      <img :src="item.imgstrtwo" alt="" class="toright" v-if="screenshow">
                        <div class="devemain">
                            <div class="devetext slg_devetext"><p class="devedes" v-for="(item,index) in item.texttwo" :key="index">{{item}}</p></div>
                            <div class="devepic"><img :src="item.imgstr" alt=""></div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 金融服务 -->
            <div id="7" class="contant financial">
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">金融服务</p>
                    <p class="destitle">全程财务解决方案</p>
                    <p class="desintroduce" v-if="screenshow">着力于地产基金、产业投资、文化旅游投资、高新科技投资、股权投资基金发行、股权投资基金管理、<br>不动产投资信托基金REITS、金融咨询、地产投资等基金领域的金融服务。</p>
                </div>
                <div class="asset md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <img style="width:77%;" src="../../static/img/servicebj_06.png" alt="">
                </div>
            </div>
            <!-- SIR作业系统 -->
            <div id="8" class="contant workbox" >
                <div class="des md_part sm_part" :style="{width:Math.round(screenWidth)+'px'}">
                    <p class="title">SIR作业系统</p>
                    <!-- <p class="destitle"></p> -->
                    <!-- <p class="desintroduce"></p> -->
                </div>
                <ul class="work part md_part sm_part" :class="{m_work:!screenshow}" :style="{width:Math.round(screenWidth)+'px'}">
                  <li v-for="(item,index) in work" :key="index">
                    <div class="workpic"><img :src="item.imgstr" alt="" ></div>
                    <div class="workmain">
                      <p class="worktitle">{{item.textone}}</p>
                      <div class="worktext" v-if="screenshow">
                          <p class="workdes" v-for="(item,index) in item.texttwo" :key="index">{{item}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
        <div class="footercls">
            <Footer :showBol="screenshow"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Bannertext from '@/components/Bannertext'
import Footer from '@/components/Footer'
export default {
  components: {Banner, Bannertext, Footer},
  data () {
    return {
      screenWidth: 0,
      screenshow: true, // 屏幕大小显示，
      bannerdata: {textone: '专业集成 携手创造', texttwo: '', urlstr: './static/img/service_02.jpg'},
      // bannerdata: {textone: '专业集成 携手创造', texttwo: '技术赋能，构建商旅产业生态价值网', urlstr: './static/img/service_02.jpg'},
      floatArr: [{text: '咨询顾问', id: '0'}, {text: '规划评审', id: '1'}, {text: 'IP场景打造', id: '2'}, {text: '品牌招商', id: '3'}, {text: '整合营销', id: '4'}, {text: '资产运营', id: '5'}, {text: '开发管理', id: '6'}, {text: '金融服务', id: '7'}, {text: '作业系统', id: '8'}],
      changebjbol: true,
      scrolly: 0, // 滚动处始值
      listheight: [],
      dsshow: [
        {text: '5D', dsbol: false, dscls: 'semicircle-one', dspcls: 'd_5', dswin: 'onewin', dsthree: 'rightthree', dstext: ['常规销售', '渠道分销', '大户定制', '基金投资', '股权交易/地产REITs']},
        {text: '5S', dsbol: false, dscls: 'semicircle-two', dspcls: 's_5', dswin: 'twowin', dsthree: 'leftthree', dstext: ['二次出售', '运营管理', '全程招商', '资产改造提升', '资金支持']}
      ],
      strategic: [
        {id: 1, imgstr: './static/img/service_1.jpg', textone: '1个大数据平台', texttwo: ['商业+旅游大数据']},
        {id: 2, imgstr: './static/img/service_2.jpg', textone: '4个品控环节', texttwo: ['工作目标研究会', '阶段成果评审会', '项目成果评审会', '项目方向论证会']},
        {id: 3, imgstr: './static/img/service_3.jpg', textone: '3个阶段', texttwo: ['前期拿地', '产品设计', '招商运营']},
        {id: 4, imgstr: './static/img/service_4.jpg', textone: '15项工作内容', texttwo: ['可行性论证-概念策划方案', '概念规划方案-项目融资报告', '市场研究分析-项目文态研究', '产品定位报告-产品业态规划', '项目投资分析-设计评审建议', '招商策划方案-营销策划方案', '运营策划方案-项目推广方案', '项目资产评估']}
      ],
      animabol: false,
      design: [
        {imgstr: './static/img/service_5.png', textone: '4个评审阶段', texttwo: '强排方案阶段、概念方案阶段 报规方案阶段、初设方案阶段'},
        {imgstr: './static/img/service_6.png', textone: '33大评审关键', texttwo: '从拿地到报建的全过程，共计33个评审关键，全面把控设计重点'},
        {imgstr: './static/img/service_7.png', textone: '180个设计标准', texttwo: '180个设计评审标准，全系统控制设计质量，达到企业要求'}
      ],
      scene: [
        {textnum: '3', textone: '目标', texttwo: ['主题彰显', '有效运营', '人气提升']},
        {textnum: '4', textone: '步骤', texttwo: ['商业策划', '主题确定', '场景设计', '效果制作']},
        {textnum: 'N', textone: '主题', texttwo: ['艺术动漫类', '抽象概念类', '历史文化类', '生态自然类', '亲子体验类']}
      ],
      integration: [
        {imgstr: './static/img/service_08.png', textone: '3大重点', texttwo: ['快速树立影响力', '提高产品吸引力', '提高现场感染力']},
        {imgstr: './static/img/service_09.png', textone: '5大工程', texttwo: ['价值工程 | 形象工程', '希望工程 | 信心工程', '放心工程']},
        {imgstr: './static/img/service_10.png', textone: '4大关键', texttwo: ['营销题材 | 销售模式', '行销渠道 | 管理执行']},
        {imgstr: './static/img/service_11.png', textone: '6大系统', texttwo: ['价值梳理系统 | 营销推广系统', '招商促进系统 | 运营管理系统', '销售推盘系统 | 案场管理系统']}
      ],
      deve: [
        {imgstr: './static/img/service_12.png', imgstrtwo: '', textone: '', texttwo: ['战略规划', '品牌管理', '资本运作', '投资决策', '财务管理', '税务筹划']},
        {imgstr: './static/img/service_13.png', imgstrtwo: '../../static/img/service_16.png', textone: '', texttwo: ['团队组建', '计划管理', '风险管理', '合同管理', '流程管理']},
        {imgstr: './static/img/service_14.png', imgstrtwo: '../../static/img/service_16.png', textone: '', texttwo: ['设计管理', '工程建设', '质量管理', '成本控制']},
        {imgstr: './static/img/service_15.png', imgstrtwo: '../../static/img/service_16.png', textone: '', texttwo: ['项目定位', '营销管理', '商业策划', '招商统筹', '经营管理', '物业管理']}
      ],
      work: [
        {imgstr: './static/img/service_17.png', textone: '立项', texttwo: ['项目初筛', '团队组建', '尽调沟通']},
        {imgstr: './static/img/service_18.png', textone: '策略', texttwo: ['拿地方案', '定位策略', 'IP打造', '规划设计', '营销战略', '招商方案', '运营建议']},
        {imgstr: './static/img/service_19.png', textone: '落地', texttwo: ['开发管理', '租售代理', '整合营销', '金融服务']},
        {imgstr: './static/img/service_20.png', textone: '运营', texttwo: ['效果反馈', '策略跟进', '资产运营', '管理顾问']}
      ]
    }
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      this.screenWidth = val * 0.63058
      console.log('12', this.screenWidth)
    }
  },
  computed: {
    dotbjfuc () {
      let hashval = this.$route.hash.substring(1, 2)
      for (let i = 0; i < this.listheight.length + 1; i++) {
        let height1 = this.listheight[i]
        let height2 = this.listheight[i + 1]
        if (this.scrolly >= height1 && this.scrolly < height2) {
          return i
        }
      }
      if (this.scrolly < 290) {
        return ''
      }
      return hashval
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollfuc, true) // 监听（绑定）滚轮滚动事件
    this.showscreen()
    this.heightfuc()
  },
  methods: {
    heightfuc () {
      setTimeout(() => {
        let partArr = this.$refs.warpper.getElementsByClassName('contant')
        let _height = -500
        for (let i = 0; i < 9; i++) {
          _height += partArr[i].clientHeight
          this.listheight.push(_height)
        }
        this.listheight.push(7464)
      }, 800)
    },
    // 滚动事件
    scrollfuc () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrolly = scrollTop // 滚动值
      if ((scrollTop >= 0 && scrollTop < 1828) || (scrollTop >= 2717 && scrollTop < 4250) || (scrollTop >= 5020 && scrollTop < 7364)) {
        this.changebjbol = true
      } else {
        this.changebjbol = false
      }
      // 动画字段
      if (scrollTop >= 1292 && scrollTop < 1999) {
        this.animabol = true
      } else {
        this.animabol = false
      }
    },
    // 移入
    enterfuc (event) {
      let _text = event.currentTarget.dataset.text
      this.dsshow.map((item) => {
        item.text === _text ? item.dsbol = true : item.dsbol = false
      })
    },
    // 移出
    leavefuc (event) {
      this.dsshow.map((item) => {
        item.dsbol = false
      })
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
      this.screenWidth = document.documentElement.offsetWidth * 0.63058 // 窗口宽度
    }
  }
}
</script>
<style scoped>
    .m_main .contant{
        width: 100%;
        padding: 30px 30px 20px;
    }
    .m_main .title{
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 0;
    }
    .m_main .more{
      font-size: 14px;
      line-height: 14px;
      margin-top: -14px;
    }
    .m_main .destitle{
      font-size: 16px;
      padding: 16px 0 0;
    }
    .m_main .des{
        width: 100% !important;
    }
    .m_main .part{
        width: 100% !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .m_main .part li{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;
        padding-top: 0;
    }
    /* 咨询顾问 */
    .m_main .part{
      padding: 0;
    }
    .m_main .strategictitle{
      font-size: 14px;
      margin-bottom: 0;
    }
    .m_main .strategic img{
      width: 60px !important;
      height: 60px !important;
      margin-right: 0;
    }
    .m_main .strategic li:nth-child(3) img{
      width: 70px !important;
      height: 70px !important;
    }
    .m_main .strategic li:nth-child(4) p{
      margin-top: 8px;
    }
    /* 规划评审 */
    .m_main .designbox{
      height: 320px;
      background: url('../../static/img/servicebj_07.png');
    }
    .m_main .design li{
        width:33.33%;
        margin: 25px 0 0 !important;
    }
    .m_main .design img{
        width:80px;
        height: 80px;
    }
    .m_main .design li .designmain{
        width:100% !important;
        margin: 0 !important;
    }
    .m_main .design .designtitle{
        font-size:14px !important;
        margin: 5px 0 11px;
    }
    /* ip */
    .m_main .scenebox{
      padding: 30px;
    }
    .m_main .scene li{
      width: 28.33%;
      height: 280px;
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 13px 0 0;
    }
    .m_main .scenenum{
      font-size: 40px;
      line-height: 40px;
      font-weight: 600;
      font-family: 'PingFang SC';
      margin-bottom: 5px;
    }
    .m_main .scenetitle{
      font-size: 20px;
      line-height: 20px;
    margin-bottom: 26px;
    }
    .m_main .scenedes{
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 10px;
    }
    /* 品牌招商 */
    .m_main .brandbox img{
      width: 300px !important;
      height: 300px !important;
      margin-top: 10px;
    }
    .m_main .brand, .m_main .asset{
        width: 100% !important;
        padding: 0;
    }
    /* 整合营销 */
    .m_main .integrationcont{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .m_main .integrationcont img{
      width: 63px;
      height: 63px;
        margin: 0;
    }
    .m_main .integrationtitle{
      font-size: 14px;
      line-height: 14px;
      margin-top: 14px;
      margin-bottom: 0;
    }
    .m_main .circle {
        padding: 0;
    }
    /* 开发管理 */
    .m_main .deve{
      align-items: baseline;
    }
    .m_main .deve li{
      width: 50%;
    }
    .m_main .devemain img{
      width: 48px;
      height: 56px;
    }
    .m_main .devetext{
      width: 120px;
      padding: 0;
    }
    .m_main .devepic{
      width: auto;
      padding: 0;
      height: auto;
    }
    /* 资产运营 */
    .m_main .assetbox img, .m_main .financial img{
        width: 100% !important;
    }
    /* sir作业 */
    .m_main .workbox .title{
      margin-bottom: 10px;
    }
    .m_work li{
      width: 25% !important;
    }
    .m_work .worktitle{
      font-size: 14px;
      margin:5px 0 0;
    }
    /* 动画 */
    @keyframes imganimation {
        0%{transform: translateY(0px)}
        25%{transform: translateY(-3px)}
        50%{transform: translateY(0px)}
        75%{transform: translateY(3px)}
        100%{transform: translateY(0px)}
    }
    .imganima{
        animation: imganimation 2s 1 linear ;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
    li{
        list-style: none;
    }
    .floatbox{
        position: fixed;
        top: 28%;
        left:8%;
        z-index: 1;
    }
    .floatbox li{
        display: flex;
        justify-content: flex-start;
        font-size: 14px;
        line-height: 14px;
        text-indent: 10px;
    }
    .floatbox li a{
      color: #b3b0b0;
    }
    .geometric{
        width: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dot{
        display: inline-block;
        width: 11px;
        height: 11px;
        border: 1px solid #fff;
        border-radius: 50%;
    }
    .dotbj{
        background-color: #e74c44;
    }
    .line{
        display: inline-block;
        width: 1px;
        height:20px;
        background-color: #fff;
    }
    .changebj a{
        color: #333 !important;
    }
    .changebj .dot{
        border: 1px solid #333;
    }
    .changebj .line{
        background-color: #333;
    }
    /* 咨询顾问 */
    .contant{
        padding: 80px 0;
        background-color: #fff;
    }
    .des{
        width: 1200px;
        margin: auto;
    }
    .title{
        font-size: 30px;
        color: #333;
        line-height: 30px;
        margin-bottom: 10px;
        text-align: center;
    }
    .etitle{
        font-size: 14px;
        line-height: 14px;
        color: #333;
        text-align: center;
    }
    .more{
        font-size: 16px;
        color: #da251c;
        float: right;
        margin-top: -40px;
    }
    .destitle{
        font-size: 20px;
        line-height: 20px;
        color: #666;
        padding: 70px 0 0;
        margin-bottom: 13px;
    }
    .desintroduce{
        font-size: 14px;
        color: #666;
        line-height: 28px;
    }
    /* 咨询顾问内容 */
    .strategic{
        width: 1200px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
        padding: 25px 0 44px;
    }
    .strategic li{
        width:50%;
        padding-top: 75px;
        overflow: hidden;
        margin: auto;
        display: flex;
        align-items: center;
    }
    .strategic li:hover{
        overflow: unset;
    }
    .strategic li:hover p{
        color: #da251c;
    }
    .strategic li:hover img{
        transform: scale(1.1)
    }
    .strategic img{
        width: 90px;
        height: 90px;
        margin-right: 40px;
        float: left;
    }
    .strategicmain{
        float: left;
    }
    .strategictitle{
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 13px;
        color: #333;
    }
    .strategicdes{
        width: 200px;
        font-size: 14px;
        color: #666;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .strategic li:nth-child(2) .strategicdes{
        width:335px;
    }
    .strategic li:nth-child(4) .strategicdes{
        width:375px;
    }
    .strategic li:nth-child(4) span:nth-child(1){
        margin-right: 28px;
    }
    .strategicdes span{
        margin-right: 14px;
    }
    /* 规划评审 */
    .designbox{
        background:#f6f6f6 url('../../static/img/servicebj_01.png') no-repeat;
        background-size: 100% 100%;
    }
    .design{
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        padding: 100px 0 51px;
        margin: auto;
    }
    .design li{
        width: 30.333%;
        text-align: center;
    }
    .designtitle{
        font-size: 18px;
        color: #da251c;
        line-height: 16px;
        margin:20px 0 11px;;
    }
    .designdes{
        font-size: 14px;
        line-height: 24px;
    }
    .design li:nth-child(1){
        margin: 100px 0 0 70px;
    }
    .design li:nth-child(1) .designmain{
        width: 199px;
        margin: auto;
    }
    .design li:nth-child(2){
        margin: -10px 0 0;
    }
    .design li:nth-child(2) .designmain{
        width: 290px;
        margin: auto;
    }
    .design li:nth-child(3){
        margin: 30px 0 0 45px;
    }
    .design li:nth-child(3) .designmain{
        width: 288px;
        margin: auto;
    }
    /* IP场景打造 */
    .scenebox{
        background: url('../../static/img/servicebj_02.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .scenebox .des p{
        color: #fff !important;
    }
    .scene{
        width: 1200px;
        margin: auto;
        padding: 100px 0 20px;
        display: flex;
        justify-content: space-around;
        color: #fff !important;
    }
    .scene li{
        width:260px;
        height: 320px;
        padding: 30px 0 0;
        border: 1px solid #fff;
        border-radius: 20px;
        text-align: center;
    }
    .scene li:hover{
        border: none !important;
        background: linear-gradient(#ff7871,#da251c)
    }
    .scenenum{
        font-size: 50px;
        line-height: 50px;
        font-family: 'Impact';
        margin-bottom: 7px;
    }
    .scenetitle{
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 33px;
    }
    .scenedes{
        font-size: 16px;
        line-height: 30px;
    }
    /* 招商 */
    .brand{
        width: 490px;
        height: 440px;
        margin: auto;
        background: url('../../static/img/servicebj_03.png') no-repeat;
        color: #333;
        overflow: hidden;
    }
    .brand span{
        float: left;
    }
    .branddes{
        line-height: 40px;
        text-align: center;
    }
    .branddes16{
        font-size: 16px;
        line-height: 16px;
        vertical-align: bottom;
    }
    .branddes18{
        font-size: 18px;
        line-height: 18px;
    }
    .branddes12{
        font-size: 12px;
        line-height: 12px;
        vertical-align: top;
    }
    .des-1{
        margin: 94px 0 0 64px;
    }
    .des-2{
        margin: 70px 0 0 110px;
    }
    .des-3{
        margin: 268px 0 0 -360px;
    }
    .des-4{
        margin: 146px 0 0 200px;
    }
    .des-5{
        margin: 70px 0 0 64px;
    }
    .des-6{
        margin: 178px 0 0 -180px;
    }
    .des-7{
        margin: 146px 0 0 0;
    }
    .integrationbox{
        background: url('../../static/img/servicebj_07.png') no-repeat;
        background-size: 100% 100%;
    }
    .integrationcont{
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    .integration{
        width: 66%;
        padding: 100px 0 0;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
    .integration li{
        width: 50%;
        margin-bottom: 33px;
        overflow: hidden;
    }
    .integration img{
        float: left;
        margin-right: 30px;
    }
    .integrationmain{
        float: left;
    }
    .integrationtitle{
        font-size: 18px;
        color:#282331;
        line-height: 18px;
        margin-bottom: 11px;
    }
    .integrationdes{
        font-size: 14px;
        line-height: 24px;
        color: rgba(40, 35, 49,.8)
    }
    /* 半圆 */
    .circle{
        position: relative;
        padding: 50px 0 0 160px;
    }
    .semicircle-one{
        width:222px;
        height: 111px;
        border:  40px solid #000;
        border-bottom: none;
        border-radius: 111px 111px 0 0 ;
        margin: 0 0 0 5px;
    }
    .semicircle-two{
        width:232px;
        height: 116px;
        border:  50px solid #f65149;
        border-top: none;
        border-radius: 0px 0px 116px 116px;
    }
    .d_5{
        font-size: 30px;
        font-family: 'Arial Narrow';
        font-weight: bold;
        color: #fff;
        text-align: center;
        margin-top: -40px;
    }
    .s_5{
        font-size: 30px;
        font-family: 'Arial Narrow';
        font-weight: bold;
        color: #fff;
        text-align: center;
        float: left;
        margin-top: 68px;
        margin-left: 50px;
    }
    .onewin{
        width: 150px;
        background-color: #333;
        font-size: 14px;
        line-height: 30px;
        color: #fafafb;
        text-indent: 10px;
        padding: 7px 0;
        position: absolute;
        top: 0;
        left:0;
    }
    .twowin{
        width: 150px;
        background-color: #f65149;
        font-size: 14px;
        line-height: 30px;
        color: #fafafb;
        text-indent: 10px;
        padding: 7px 0;
        position: absolute;
        top: 124px;
        right: -160px;
    }
    .rightthree{
        display: block;
        width:0;
        height:0;
        border-top:10px solid transparent;
        border-bottom:10px solid transparent;
        border-left:10px solid #333;
        float: right;
        margin-top: -80px;
        margin-right: -10px;
    }
    .leftthree{
        display: block;
        width:0;
        height:0;
        border-top:10px solid transparent;
        border-bottom:10px solid transparent;
        border-right:10px solid #f65149;
        float: left;
        margin-top: -80px;
        margin-left: -10px;
    }
    /* 资产运营 */
    .assetbox{
        background: url('../../static/img/servicebj_05.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .assetbox .des p{
        color: #fff !important;
    }
    .asset{
      width: 1200px;
        text-align: center;
        padding-top: 50px;
        margin: auto;
    }
    /* 开发管理 */
    .deve{
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        padding: 88px 0 150px;
    }
    .deve li{
      width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .toright{
        width: 160px;
    }
    .devemain{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .devepic{
      width: 43.3333%;
      padding-bottom: 53.3334%;
      height: 0;
    }
    .devemain img{
      width: 100%;
    }
    .devetext{
        width: 160px;
        height: 72px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        color: rgba(40, 35, 49,.8);
    }
    .devedes{
        font-size: 14px;
        line-height: 24px;
    }
    /* 金融服务 */
    .financial{
        background: url('../../static/img/servicebj_07.png') no-repeat;
        background-size: 100% 100%;
    }
    /* 作业 */
    .work{
        width: 1200px;
        margin: auto;
        padding: 10px 0 80px;
        display: flex;
        justify-content: space-between;
    }
    .work li{
      width: 22%;
    }
    .workpic{
      width:70%;
      padding-bottom: 50%;
      margin: auto;
      height: 0;
    }
    .work li img{
      width: 100%;
    }
    .workmain{
        text-align: center;
    }
    .worktext{
        width: 56%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
    }
    .worktitle{
        font-size: 18px;
        line-height: 18px;
        color: #da251c;
        margin: 20px 0 9px;
    }
    .workdes{
        font-size: 14px;
        line-height: 28px;
    }
</style>
