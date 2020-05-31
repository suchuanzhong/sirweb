<template>
    <div>
        <Banner />
        <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
        <div class="advisorpart" :class="{m_main:!screenshow}">
            <p class="title">一案一例的定制化解决方案</p>
            <div class="apart1">
                <p class="parttext">思睿顾问团队秉承：能够准确把脉客户真正的问题，不仅从短期，更能从长远的角度，为客户解决实质性问<br v-if="screenshow">题，提出系统的问题解决方案，并且能够有效地推动解决方案的落地，保证方案的可操作性。</p>
                    <div class="contant">
                        <div class="particon" v-for="(item,index) in advisoricon" :key="index">
                            <img :src="item.imgstr" alt="">
                            <p>{{item.textone}}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="advisorpart advisorpartbj" :class="{m_main:!screenshow}">
            <p class="title">服务体系</p>
            <div class="apart1">
                <p class="parttext">思睿顾问一贯重视对成果质量的风控，提出了“5G”服务质保体系，确保服务成果质量。项目指导委员会，<br v-if="screenshow">
                        由客户方部分领导组成；项目领导小组由客户方部门主管与思睿领导组成；项目执行小组由思睿相关咨询人<br v-if="screenshow">
                        员组成；内部专家小组由思睿相关领域专家组成；外部专家小组由思睿战略合作伙伴和外部专家库组成。
                        </p>
                    <div class="contant">
                         <div class="particon2" v-for="(item,index) in advisorgroup" :key="index">
                            <p class="groupnum">{{item.groupnum}}</p>
                            <p class="namecls">{{item.name}}</p>
                            <p class="textcls">{{item.text}}</p>
                            <p class="textone" v-for="(item,index) in item.textone" :key="index"><span class="dot"></span>{{item}}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="advisorpart advisorpartbj2" :class="{m_main:!screenshow}">
            <p class="title">服务模式</p>
            <div class="apart1">
                <p class="parttext">思睿顾问基于过往经验，总结出“方向、起点、路径”的系统顾问服务模式。方向主要确定项目的定位问题<br v-if="screenshow">
                                ，从空间维度确定项目的核心功能，项目的配套功能，项目的动线组织及管网工程；起点主要明确项目螺旋<br v-if="screenshow">
                                式成长的立足点，即项目的起步板块；路径是从时间维度找到项目成长的时间演变图。
                        </p>
                    <div class="contant">
                        <div class="bigdotpart">
                            <div class="bigdot">
                                <p>方向</p>
                            </div>
                            <span class="line"></span>
                            <div class="bigdot">
                                <p>起点</p>
                            </div>
                            <span class="line"></span>
                            <div class="bigdot">
                                <p>路径</p>
                            </div>
                        </div>
                        <div class="dottext">
                            <span>确定目标，事物发展的根本</span>
                            <span>站住点，螺旋式成长</span>
                            <span>减少风险，综合价值最大化</span>
                        </div>
                    </div>
            </div>
        </div>
        <div class="advisorpart" :class="{m_main:!screenshow}">
            <p class="title">落地执行的链接</p>
            <div class="apart1">
                <p class="parttext">服务方案不能落地，咨询内容与招商、营销及运营团队脱节是行业中诸多客户反映的问题。基于此思睿集成<br v-if="screenshow">
                    全链条优势，在咨询顾问阶段，后期执行团队就会参与其中，并且要求方案深度无缝衔接到具体落地执行工<br v-if="screenshow">
                    作之中。</p>
                    <div class="contant linkbox">
                        <div class="linkicon" v-for="(item,index) in linkicon" :key="index">
                            <img :src="item.imgstr" alt="">
                            <p>{{item.textone}}</p>
                        </div>
                    </div>
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
  components: {Banner, Footer, Bannertext},
  data () {
    return {
      screenshow: true,
      bannerdata: {textone: '咨询顾问', texttwo: '', urlstr: './static/img/advisor_01.jpg'},
      advisoricon: [
        {imgstr: './static/img/advisor_02.png', textone: '精准定位、确定主题和亮点'},
        {imgstr: './static/img/advisor_03.png', textone: '众多边际条件下,财务如何平衡'},
        {imgstr: './static/img/advisor_04.png', textone: '文态之下的业态和景态转化'},
        {imgstr: './static/img/advisor_05.png', textone: '如何高溢价销售高价值品牌'}
      ],
      advisorgroup: [
        {groupnum: 'GROUP1', name: '项目指导委员会', text: '—由客户方部分领导组成', textone: ['参加关键会议', '设定方向', '批准建设', '......']},
        {groupnum: 'GROUP2', name: '项目指导小组', text: '—由客户方部分部门主管与思睿领导组成', textone: ['参加关键会议', '协调调配资源', '支持项目执行小组工作', '......']},
        {groupnum: 'GROUP3', name: '项目执行小组', text: '—由思睿组成策划人员组成，根据客户需求可加入客户方相关人员', textone: ['搜集数据与信息', '进行分析', '报告撰写', '......']},
        {groupnum: 'GROUP4', name: '内部专家小组', text: '—由思睿相关领域专家组成', textone: ['客户目标探讨和项目问题界定', '技术思路讨论', '报告评审', '参加项目汇报', '......']},
        {groupnum: 'GROUP5', name: '外部专家小组', text: '—由思睿战略合作伙伴和外部专家库组成', textone: ['关键节点技术支持', '提供技术难点解决建议', '......']}
      ],
      linkicon: [
        {imgstr: './static/img/advisor_08.png', textone: '定位'},
        {imgstr: './static/img/advisor_09.png', textone: '业态'},
        {imgstr: './static/img/advisor_10.png', textone: '测算'},
        {imgstr: './static/img/advisor_11.png', textone: '租赁'},
        {imgstr: './static/img/advisor_12.png', textone: '营销'},
        {imgstr: './static/img/advisor_13.png', textone: '运营'}
      ]
    }
  },
  mounted () {
    this.showscreen()
  },
  methods: {
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
    }
  }
}
</script>
<style  scoped>
/* moblie */
    .m_main{
        padding: 30px 30px !important;
    }
    .m_main .apart1{
        width:100%;
        overflow: hidden;
    }
    /* 一案一例 */
    .m_main .title{
      font-size: 20px;
      line-height: 20px;
    }
    .m_main .parttext{
      line-height: 26px;
      margin-top: 17px;
    }
    .m_main .particon{
      margin-top: 20px;
      font-size: 14px;
    }
    .m_main .particon img{
      width: 50px;
      height: 50px;
    }
    /* 服务体系 */
    .m_main .particon2{
        width: 49%;
    }
    /* 服务模式moblie */
    .m_main .bigdotpart{
      margin: 20px auto 0;
    }
    .m_main .bigdot{
        width: 50px;
        height: 50px;
    }
    .m_main .bigdot p{
        font-size: 14px;
        line-height: 50px;
    }
    .m_main .line{
        width: 70px;
    }
    .m_main .dottext span{
        display: inline-block;
        width: 33.333%;
        padding: 0 20px;
        text-align: justify;
        /* width: 84px; */
        font-size: 14px;
    }
    /* 执行链接 */
    .m_main .linkbox{
        justify-content: space-around;
        padding: 20px 0 0 ;
    }
    .m_main .linkicon{
        width: 140px;
        height: 140px;
        margin: 0 0 30px;
    }
    .m_main .linkicon img{
        width: 65px;
        height: 65px;
    }
    .m_main .linkicon p{
        font-size: 14px;
        margin-top: 10px;
    }
    .advisorpart{
        padding: 70px 0;
    }
    .title{
        font-size: 30px;
        color: #333;
        text-align: center;
    }
    .apart1{
        width: 1200px;
        margin: auto;
    }
    .parttext{
        font-size: 16px;
        line-height: 30px;
        color: #666;
        margin-top: 73px;
        text-align: justify;
    }
    .contant{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .particon{
        width: 150px;
        font-size: 20px;
        color: #333;
        margin-top: 73px;
          text-align: center;
    }
    /* 服务体系 */
    .advisorpartbj{
        background: url('../../static/img/servicebj_07.png') no-repeat;
        background-size: 100% 100%;
    }
    .particon2{
        width: 200px;
        height: 400px;
        background: url('../../static/img/advisor_06.png') no-repeat;
        background-size: 100% 100%;
           box-shadow:5px 5px 10px  0 rgba(0, 0, 0,.1);
        font-size: 16px;
        color: #333;
        margin-top: 53px;
    }
    .groupnum{
        line-height: 16px;
        color: #fff;
        font-weight: bold;
        padding: 20px 0;
        text-align: center;
    }
    .namecls{
        line-height: 16px;
        color: #fff;
        text-align: center;
    }
    .textcls{
        line-height: 26px;
        margin: 45px 0 5px;
        font-weight: bold;
    }
    .textone{
        line-height: 36px;
        text-indent: 20px;
    }
    .dot{
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #000;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    /* 服务模式 */
    .advisorpartbj2{
        background: url('../../static/img/advisor_07.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .advisorpartbj2 p{
        color: #fff !important;
    }
    .bigdotpart{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:73px  auto 0;
    }
    .bigdot{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #da251c;
    }
    .bigdot p{
        line-height: 110px;
        font-size: 20px;
        text-align: center;
        color: #333!important;
    }
    .line{
        display: inline-block;
        width: 170px;
        height: 4px;
        background-color: #fff;
    }
    .dottext{
        width: 800px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        color: #fff;
        font-size: 20px;
        margin-top: 30px;
    }
    /* 链接 */
    .linkbox{
        padding: 60px 0 0;
    }
    .linkicon{
        width: 360px;
        height: 280px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin:0 0 60px 30px ;
        transition: all 1s;
    }
    .linkicon:hover{
        transform: translateY(-30px);
        border: none;
        box-shadow: 0 0 30px rgba(255,91, 83,.16)
    }
    .linkicon img{
        width: 110px;
        height: 110px;
    }
    .linkicon p{
        font-size: 24px;
        color: #333;
        margin-top: 30px;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
</style>
