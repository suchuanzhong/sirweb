<template>
    <div>
      <div class="titlebox" :class="{m_titlebox:!showBol,c_titlebox:!showBol}">
        <div class="com_dot"><i></i><i></i><i></i></div>
        <p>咨询顾问</p>
      </div>
      <div class="part1 slg_part1" :class="{m_part1:!showBol}">
        <div>
          <div class="mean">
            <p>思睿咨询以始为终，具有甲方思维，将策略思想、策划内容与招商、营销、运营等后期落地板块无缝衔接，一方面挖掘项目的最大价值，同时考虑到项目开发的风险控制。践行一种具有行业领先视野，更具有落地指导价值的工作方法论。秉承一案一例的定制化解决之道，提出六维一体+五态合一，协同创新工作模式。</p>
            <p>思睿咨询以行业为先，占据制高点，探索新模式，掌握话语权。是微旅游+泛艺术场景商业提出者，商业建筑策划践行者，游乐型文旅小镇商业倡导者，<span v-if="!showBol">人体5S中西康养融合发展模式构建者。</span></p>
            <p v-if="showBol">人体5S中西康养融合发展模式构建者。</p>
          </div>
          <div class="more" :class="{m_more:!showBol}" @click="tomore" v-if="showBol">
            <p>了解更多</p>
          </div>
        </div>
        <div>
          <Consultantslider :screenw="sliderwidth" :showBol="showBol" screenh="300"/>
        </div>
        <div class="company slg_company2" v-if="showBol">
          <p>成都思睿地产顾问有限公司</p>
          <p>国内领先的商业、文旅地产整合咨询平台，提供一站式系统解决方案。</p>
        </div>
      </div>
      <!-- 一案一例 -->
      <div class="titlebox exampletitle" :class="{m_titlebox:!showBol}">
        <div class="com_dot"><i></i><i></i><i></i></div>
        <p>一案一例的定制化解决方案</p>
      </div>
      <div class="example" :class="{m_example:!showBol}">
        <div v-for="(item,index) in exampledata" :key="index" class="exampleitem">
          <div><img :src="item.urlstr" alt=""></div>
          <p>{{item.text}}</p>
        </div>
      </div>
      <!-- 5板块 -->
      <div class="palte" :class="{m_palte:!showBol}">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>服务内容</p>
        </div>
        <div class="paltemain">
          <div v-for="(item, index) in platedata" :key="index" class="palteitem" :class="{m_palteitem:!showBol}">
              <img :src="item.urlstr" alt="">
              <p v-for="(item, index) in item.children" :key="index">{{item}}</p>
          </div>
        </div>
        <!-- <img v-else class="palteimg" src="../../static/img/plate1.png" alt=""> -->
        <!-- <div v-else class="palteimg">
          <img src="../../static/img/plate01_1.png" alt="">
          <img src="../../static/img/plate01_2.png" alt="">
          <img src="../../static/img/plate01_3.png" alt="">
        </div> -->
      </div>
      <!-- 上百个 -->
      <div class="titlebox" :class="{m_titlebox:!showBol}">
        <div class="com_dot"><i></i><i></i><i></i></div>
        <p v-if="showBol">上百个商业及文旅地产实操经验，服务和研究多个成熟项目</p>
        <p v-else>上百个商业及文旅地产实操经验，服务<br>和研究多个成熟项目</p>
      </div>
      <div class="project" :class="{m_project:!showBol}">
        <div class="projectitem" v-for="(item,index) in projectdata" :key="index">
          <img :src="item.urlstr" alt="">
          <p class="projecttitle">{{item.text}}</p>
          <div class="projectcont">
            <p v-for="(item,index) in item.children" :key="index"><span>·</span>{{item}}</p>
          </div>
        </div>
      </div>
      <!-- 审判机制 -->
      <div class="titlebox" :class="{m_titlebox:!showBol}" style="margin-top:-12px;">
        <div class="com_dot"><i></i><i></i><i></i></div>
        <p v-if="showBol">通过严谨审判机制，多维创新方法，海量数据研判指导客户科学决策</p>
        <p v-else>通过严谨审判机制，多维创新方法，海<br>量数据研判指导客户科学决策</p>
      </div>
      <div class="plan" :class="{m_plan:!showBol}">
        <div class="plantitle">
          <p>商业+旅游大数据<br v-if="showBol">指导科学决策</p>
          <p>利用现在技术手段采集消费者行为数据，<br v-if="showBol">海量数据分析让决策更加科学</p>
        </div>
        <div class="planpic">
          <div class="planpic1"><img  src="../../static/img/consultant11.jpg" alt=""></div>
          <div class="planpic2"><img  src="../../static/img/consultant12.jpg" alt=""></div>
        </div>
      </div>
      <!-- group -->
      <div class="groupbox" :class="{m_groupbox:!showBol}">
         <div  v-for="(item,index) in groupdata" :key="index">
           <div class="particon2" v-if="showBol||item.groupnum!='GROUP5'">
              <p class="groupnum">{{item.groupnum}}</p>
              <p class="namecls">{{item.name}}</p>
              <p class="textcls" v-if="item.text2==''">{{item.text}}</p>
              <p class="textcls" v-else>{{item.text2}}</p>
              <p class="textone" v-for="(item,index) in item.textone" :key="index"><span class="dot"></span><span class="dottext">{{item}}</span></p>
           </div>
          </div>
      </div>
      <!-- 行业领先 -->
      <div class="trade" :class="{m_trade:!showBol}" >
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p v-if="showBol">行业领先的六维一体+五态合一，协同创新工作模式</p>
          <p v-else>行业领先的六维一体+五态合一，协同<br>创新工作模式</p>
        </div>
        <Tradeslider :screenw="tradewidth" :showBol="showBol" :screenh="290"/>
      </div>
      <div class="titlebox" :class="{m_titlebox:!showBol}">
        <div class="com_dot"><i></i><i></i><i></i></div>
        <p>落地执行的链接</p>
      </div>
      <div class="linkpart" :class="{m_linkpart:!showBol}">
        <p>服务方案不能落地，咨询内容与招商、营销及运营团队脱节是行业中诸多客户反映的问题。基于此思睿集成全链条优势，
            在咨询顾问阶段，后期执行团队就会参与其中，并且要求方案深度无缝衔接到具体落地执行工作之中。</p>
        <div class="linkbox">
            <div class="linkicon" v-for="(item,index) in linkicon" :key="index">
                <img :src="item.imgstr" alt="">
                <p>{{item.textone}}</p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import Consultantslider from '@/components/Consultantslider'
import Tradeslider from '@/components/Tradeslider'
export default {
  components: {Consultantslider, Tradeslider},
  props: ['screenw', 'showBol', 'tradewidth'],
  data () {
    return {
      exampledata: [
        {id: 0, text: '精准定位、确定主题与亮点', urlstr: '../../static/img/consultant2.png'},
        {id: 1, text: '众多边际条件下,财务如何平衡', urlstr: '../../static/img/consultant3.png'},
        {id: 2, text: '文态之下的业态和景泰转化', urlstr: '../../static/img/consultant4.png'},
        {id: 3, text: '如何高溢价销售高价值品牌', urlstr: '../../static/img/consultant5.png'}
      ],
      platedata: [
        {id: 0, text: '', urlstr: '../../static/img/plate1_1.png', children: ['案例实地考察', '市场调研分析', '总体定位及产品组合']},
        {id: 1, text: '', urlstr: '../../static/img/plate1_2.png', children: ['商业组合规划', '特色小镇商业规划酒店', '服务公寓策划与规划', '田园综合体策划与规划']},
        {id: 2, text: '', urlstr: '../../static/img/plate1_3.png', children: ['养老地产策划与规划', '旅游地产策划与规划', '产业地产策划与规划']}
      ],
      projectdata: [
        {id: 0, text: '城市综合体', urlstr: '../../static/img/consultant7.jpg', children: ['北城8号', '青龙广场', '万和中心', '西城中心', '光华中心', '海骏达城']},
        {id: 1, text: '历史文化街', urlstr: '../../static/img/consultant8.jpg', children: ['文殊坊', '西安碑林', '水璟唐', '自流井老街', '东郊记忆', '...']},
        {id: 2, text: '特色文旅产业小镇', urlstr: '../../static/img/consultant9.jpg', children: ['铜官窑古镇', '药王仙谷', '鸠兹古镇', '彩灯小镇', '金杯七里坪', '...']},
        {id: 3, text: '城市微旅游街区', urlstr: '../../static/img/consultant10.jpg', children: ['永立星城都', '龙樾湾', '郫都海骏达', '青龙广场', '锦弘广场', '...']}
      ],
      groupdata: [
        {groupnum: 'GROUP1', name: '项目指导委员会', text: '由客户方部分领导组成', text2: '', textone: ['参加关键会议', '设定方向', '批准建设', '......']},
        {groupnum: 'GROUP2', name: '项目指导小组', text: '由客户方部分部门主管与思睿领导组成', text2: '', textone: ['参加关键会议', '协调调配资源', '支持项目执行小组工作', '......']},
        {groupnum: 'GROUP3', name: '项目执行小组', text: '由思睿策划人员组成，根据客户需求可加入客户方相关人员', text2: '由思睿组成策划人员组成，可加入客户方人员', textone: ['搜集数据与信息', '进行分析', '报告撰写', '......']},
        {groupnum: 'GROUP4', name: '内部专家小组', text: '由思睿相关领域专家组成', text2: '', textone: ['客户目标探讨和项目问题界定', '技术思路讨论', '报告评审', '参加项目汇报', '......']},
        {groupnum: 'GROUP5', name: '外部专家小组', text: '由思睿战略合作伙伴和外部专家库组成', text2: '', textone: ['关键节点技术支持', '提供技术难点解决建议', '......']}
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
  computed: {
    sliderwidth () {
      if (this.screenw > 792) {
        return 500
      } else {
        return this.screenw - 60
      }
    }
  },
  methods: {
    tomore () {
      this.$router.push({
        name: 'Reseach'
      })
    }
  }
}
</script>
<style  scoped>
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
    /* 咨询顾问 */
    .part1{
      width: 1552px;
      position: relative;
      float: right;
      display: flex;
      justify-content: flex-start;
    }
    .mean{
      width: 93%;
      font-size: 18px;
      color: #333;
      line-height: 30px;
      text-align: justify;
    }
    .mean p:nth-child(2){
      color: #666;
      margin-top: 28px;
    }
    .mean p:nth-child(3){
      color: #666;
    }
    .more{
      width: 150px;
      height: 50px;
      font-size: 14px;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #e7e8eb;
      margin-top: 68px;
    }
    .more:hover{
      cursor: pointer;
    }
    .company{
      width: 180px;
      height: 180px;
      font-size: 14px;
      line-height: 26px;
      color: #fff;
      padding: 30px 6px 0;
      background: url('../../static/img/consultant1.jpg') no-repeat;
      position: absolute;
      right: 50%;
      bottom: -30px;
      margin-right: 40px;
      box-shadow:10px 10px 5px  rgba(221,221,221,.75);
    }
    .company p:nth-child(1){
      line-height: 14px;
      font-weight: bold;
      margin-bottom: 14px;
    }
    .company p:nth-child(2){
      padding:0 6px;
    }
    /* 一案一例 */
    .exampletitle{
      margin: 0 auto 20px;
      padding-top: 30px;
      clear: both;
    }
    .example{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid #ddd;
    }
    .exampleitem{
      width:25%;
      height: 150px;
      padding: 0 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 2px solid #f0f0f0;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      background-color: #fff;
    }
    .exampleitem:nth-last-child(1){
      border-right: none;
    }
    .exampleitem img{
      width: 40px !important;
      height: 40px;
      margin-right: 20px;;
    }
    /* 50板块 */
    .palte{
      width: 100%;
      height: 680px;
      position: relative;
      z-index: -1;
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
      text-align: left;
    }
    .palteimg{
      width: 100%;
    }
    /* 上百个商业 */
    .project{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-around;
    }
    .projectitem{
      width: 280px;
      border: 1px solid #ddd;
      box-shadow: 10px 10px 5px rgba(221,221,221,.75);
    }
    .projectitem img{
      width: 100%;
      height: 230px;
    }
    .projecttitle{
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 18px;
      margin: 20px 0 14px;
      text-align: center;
    }
    .projectcont{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 16px;
      color: #666;
      line-height: 28px;
      padding: 0 40px 20px;
    }
    .projectcont span{
      color: #d62c28;
      font-size: 14px;
      font-weight: 600;
      margin-right: 5px;
    }
    .projectitem:nth-child(2) .projectcont p{
      width: 47%;
    }
    .projectitem:nth-child(2) .projectcont {
      padding: 0 40px;
    }
    .projectitem:nth-child(3) .projectcont p{
      width: 50%;
    }
    .projectitem:nth-child(3) .projectcont {
      padding: 0 30px;
    }
    .projectitem:nth-child(4) .projectcont p{
      width: 50%;
    }
    .projectitem:nth-child(4) .projectcont {
      padding: 0 8px;
    }
    /* 审判机制 */
    .plan{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .plan img{
      width: 430px;
      height: 271px;
    }
    .plantitle{
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
    .plantitle p:nth-child(2){
      font-size: 16px;
      color: #666;
      font-weight: normal;
      margin-top: 23px;
      line-height: 26px;
    }
    .planpic{
      width: 61.5%;
      position: relative;
    }
    .planpic1, .planpic2{
      width: 429px;
      height: 271px;
      border: 10px solid #fff;
      box-shadow: 3px 0px 3px rgba(0, 0, 0, .5);
    }
    .planpic1 img, .planpic2 img{
      width: 100%;
      height: 100%;
    }
    .planpic1{
      margin-top: 60px;;
    }
    .planpic2{
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
    }
    /* group */
    .groupbox{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding: 70px 0;
    }
    .particon2{
        width: 200px;
        height: 400px;
        background: url('../../static/img/consultant13.jpg') no-repeat;
        background-size: 100% 100%;
        box-shadow:5px 0px 10px  0 rgba(0, 0, 0, .3);
        font-size: 16px;
        color: #333;
        padding: 0 20px;
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
      /* text-indent: 20px; */
    }
    .textone{
      line-height: 36px;
      overflow: hidden;
      margin-top: 15px;
      /* text-indent: 20px; */
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
    /* 行业领先 */
    .trade{
      height: 780px;
      overflow: hidden;
      background: url('../../static/img/consultant14.jpg') no-repeat;
    }
    .trade .titlebox{
      padding-bottom: 30px;
      /* margin-bottom: 0; */
      color: #fff;
    }
    /* 链接 */
    .linkpart{
      width: 1200px;
      margin: auto;
    }
    .linkpart p{
      font-size: 16px;
      color: #666;
    }
    .linkbox{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 60px 0 120px;
    }
    .linkicon{
        width: 175px;
        height: 136px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /* transition: all 1s; */
    }
    .linkicon img{
        width: 60px;
        height: 60px;
    }
    .linkicon p{
        font-size: 12px;
        color: #333;
        margin-top: 18px;
    }
    /* moblie */
    .c_titlebox{
      margin-bottom: 21px !important;
    }
    .m_titlebox{
      padding: 1px 30px 0 !important;
      margin:0 auto 30px;
      font-size: 20px;
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
    .m_titlebox p{
      font-size: 18px;
      /* line-height: 18px; */
    }
    /* 咨询顾问 */
    .m_part1{
      width: 100%;
      padding: 0 30px;
      flex-wrap: wrap;
    }
    .m_part1 .mean{
      width: 100%;
      font-size: 16px;
      line-height: 28px;
    }
    .m_part1 .mean p:nth-child(2){
      margin-top: 18px;;
    }
    .m_more{
      width: 100%;
      height: auto;
      background-color: #fff;
      font-weight: normal;
      border: none;
      text-align: right;
      line-height: 20px;
      margin: 20px 0 20px;
    }
    /* 一案一例 */
    .m_example{
      width: 100%;
      padding: 0 30px;
      flex-wrap: wrap;
      border: none;
    }
    .m_example .exampleitem{
      width: 49.5%;
      height: auto;
      padding: 20px 10px;
      border: 1px solid #f0f0f0;
      font-weight: normal;
      font-size: 12px;
      justify-content: space-between;
    }
    .m_example .exampleitem img{
      width: 20px !important;
      height: 20px;
      margin:0 15px 0 5px;
    }
    /* 5板块 */
    .m_palte{
      width: 100%;
      padding: 0 30px 40px;
      height: auto;
      margin-top: 30px;
    }
    .m_palte .paltemain{
      width: 100%;
      padding-left: 0;
      justify-content: space-between;
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
    /* 上百个 */
    .m_project{
      width: 100%;
      padding: 0 30px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .m_project .projecttitle{
      font-size: 16px;
      margin: 10px 0 9px;
    }
    .m_project .projectitem{
      width: 49%;
      box-shadow: unset;
      border: none;
    }
    .m_project .projectitem img{
      height: 110px;
    }
    .m_project .projectcont{
      /* display:block; */
      font-size: 12px;
      line-height: 20px;
      padding: 0 0 0 10px!important;
      margin-bottom: 20px;
      justify-content: flex-start;
    }
    .m_project  .projectcont p{
      width: 50% !important;
      /* text-align: center; */
    }
    /* .m_project  .projectcont p:nth-child(odd){
      text-indent: 10px;
    } */
    /* .m_project  .projectcont p:nth-child(2n){
      text-align: left;
      text-indent: 13px;
    } */
    /* 审判机制 */
    .m_plan, .m_groupbox, .m_linkpart{
      padding: 0 30px;
      width: 100%;
      flex-wrap: wrap;
    }
    .m_plan .plantitle{
      font-size: 16px;
      line-height: 16px;
    }
    .m_plan .plantitle p:nth-child(2){
      font-size: 14px;
      margin-top: 16px;
      line-height: 22px;
      padding-right: 34px;
    }
    .m_plan .planpic{
      width: 100%;
      margin-top: 20px;;
    }
    .m_plan .planpic1,.m_plan .planpic2{
      width: 50%;
      height: 110px;
      border: 2px solid #fff;
      margin: 0;
      box-shadow: 3px 4px 3px rgba(0, 0, 0, .4);
    }
    .m_plan .planpic1{
      box-shadow: 3px 4px 3px rgba(0, 0, 0, .4);;
    }
    .m_plan img{
      width: 100%;
      height: 100%;
    }
    .m_groupbox{
      padding-bottom: 20px;;
    }
    .m_groupbox>div{
      width: 46%;
    }
    .m_groupbox .particon2{
      width: 100%;
      height: 310px;
      margin-top: 20px;
      font-size: 14px;
      padding: 0 12px;
    }
    .m_groupbox .groupnum{
      padding: 20px 0 14px;
    }
    .m_groupbox .namecls{
      line-height: 14px;
    }
    .m_groupbox .textcls{
      margin: 30px 0 7px;
      line-height: 22px;
      text-align: justify;
    }
    .m_groupbox .textone{
      /* line-height: 28px; */
      margin: 4px 0;
      overflow: hidden;
    }
    .dot{
      float: left;
      margin-top: 10px;;
    }
    .dottext{
      width: calc(100% - 16px);
      line-height: 22px;
      float: left;
    }
    /* 行业领先 */
    .m_trade{
      height: auto;
    }
    /* 链接 */
    .m_linkpart p{
      font-size: 14px;
    }
    .m_linkpart .linkicon{
      width: 32%;
      height: 120px;
      margin-bottom: 10px;
    }
    .m_linkpart .linkicon p{
      line-height: 14px;
      margin-top: 10px;
    }
    .m_linkpart .linkbox{
      padding: 30px 0;
    }
    .m_linkpart .linkicon:hover{
      transform: translateY(0);
    }
    .m_linkpart img{
      width: 50px;
      height: 50px;
    }
    /* ----- */
</style>
