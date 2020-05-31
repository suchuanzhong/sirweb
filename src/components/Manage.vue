<template>
    <!-- IP -->
      <div class="contant">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>经营管理</p>
        </div>
        <div class="managemain" :class="{m_managemain:!showBol}">
          <div class="desbox">
            <p class="managetitle">10+年管理经验全新的合作开发及资本代建模式</p>
            <p class="managedes">4大阶段，8个核心节点，135个关注点，通过可追溯的系统开发流程，全面促进项目的整体开发管理。</p>
          </div>
          <div class="deve" v-for="(item, index) in deve" :key="index">
              <div class="deveimg">
                <img :src="item.imgstr" alt="">
                <span v-if="!showBol" class="devetitle">{{item.textone}}</span>
              </div>
              <p v-if="showBol" class="devetitle">{{item.textone}}</p>
              <p class="devetext" v-for="(item, idx) in item.texttwo" :key="idx">{{item}}</p>
          </div>
        </div>
        <!-- 5板块 -->
        <div class="palte" :class="{m_palte:!showBol}">
          <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>服务内容</p>
        </div>
          <div class="paltemain" :class="{m_paltemain:!showBol}">
             <p class="paltetext1">组织结构与部门制度体系<br>经营管理筹备 <br v-if="!showBol">物业管理筹备</p>
            <div class="paltecont">
              <p>景区管理筹备 智能系统落实<br>员工招聘 经营计划书</p>
              <img src="../../static/img/plate5_1.png" alt="">
            </div>
            <p class="paltetext2"> 委托管理 <br v-if="!showBol">管理咨询<br>运营考核</p>
          </div>
          <!-- <img v-else class="palteimg" src="../../static/img/plate5.png" alt=""> -->
        </div>
        <div id="six" class="money" :class="{m_money:!showBol}">
          <div class="titlebox" :class="{m_titlebox:!showBol}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>资产运营</p>
          </div>
          <img src="../../static/img/IP5.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol'],
  data () {
    return {
      deve: [
        {imgstr: './static/img/manage1.png', textone: '决策', texttwo: ['战略规划', '品牌管理', '资本运作', '投资决策', '财务管理', '税务筹划']},
        {imgstr: './static/img/manage2.png', textone: '计划流程', texttwo: ['团队组建', '计划管理', '风险管理', '合同管理', '流程管理']},
        {imgstr: './static/img/manage3.png', textone: '工程', texttwo: ['设计管理', '工程建设', '质量管理', '成本控制']},
        {imgstr: './static/img/manage4.png', textone: '营销', texttwo: ['项目定位', '营销管理', '商业策划', '招商统筹', '经营管理', '物业管理']}
      ]
    }
  },
  methods: {
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
    .managemain{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      padding-bottom: 100px;
    }
    .managemain>div{
      width: 228px;
    }
    .desbox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 34px;
    }
    .managetitle{
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 30px;
      padding-right: 30px;
    }
    .managedes{
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin: 17px 0 43px;
    }
    .deve{
      height: 220px;
      padding: 30px;
      border: 1px solid #e4e4e4;
      margin-right: 10px;
    }
    .deve:hover{
      box-shadow: 10px 10px 5px rgba(221,221,221,.75);
    }
    .deveimg{
      width: 100%;
    }
    .devetitle{
      font-size: 18px;
      color: #333;
      font-weight: bold;
      line-height: 18px;
      margin: 20px 0 11px;
    }
    .devetext{
      display: inline-block;
      font-size: 14px;
      color: #666;
      line-height: 26px;
      margin-right: 12px;
    }
     /* 50板块 */
    .palte{
      width: 100%;
      height: 720px;
      position: relative;
      z-index: 0;
      background: url('../../static/img/managebj.jpg') no-repeat;
      background-size: 100% 100%;
      padding: 1px 0 0;
    }
    .paltemain{
      /* display: inline-block; */
      width: 1200px;
      /* height: 100%; */
      margin: auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      /* flex-direction: column; */
      align-items: flex-end;
      font-size: 16px;
      line-height: 28px;
      color: #666;
    }
    .paltemain p{
      display: inline-block;
      width: 198px;
    }
    .paltetext1{
      margin: 0 5px 88px 0;
    }
    .paltetext2{
      margin: 0 5px 88px 0;
    }
    .paltemain img{
      width: 380px;
      height: 350px;
    }
    .paltecont{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .palteimg{
      width: 100%;
    }
    /* 资产运营 */
    .money{
      width: 100%;
      background: url('../../static/img/IP4.jpg') no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      text-align: center;
      padding:50px 0 150px;
    }
     .money p{
      color: #fff;
    }
    .money img{
      width: 1200px;
    }
    /* moblie */
    .m_titlebox{
      padding: 1px 30px 0;
      margin:0 auto 30px;
      font-size: 18px;
      text-align: center;
      line-height: 18px;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
    /* 开发 */
    .m_managemain{
      width: 100%;
      padding: 0 30px 40px;
      flex-wrap: wrap;
    }
    .m_managemain .desbox{
      width: 100%;
      margin-right: 0;
    }
    .m_managemain .managetitle{
      font-size: 16px;
      line-height: 24px;
    }
    .m_managemain .deveimg{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 6px;
      padding: 0 0 0 8px;
    }
    .m_managemain .devetitle{
      font-size: 16px;
      line-height: 16px;
      margin: 0 0 0 10px;
    }
    .m_managemain .managedes{
      font-size: 14px;
      line-height: 22px;
      margin: 12px 0 16px;
    }
    .m_managemain .desbox p{
      padding: 0;
    }
    .m_managemain .deve{
      width: 50%;
      height: 170px;
      margin-right: 0;
      padding: 30px 15px;
    }
    .m_managemain .devetext{
      display: inline-block;
      width: 50%;
      text-align: center;
      margin-right: 0;
    }
    /* 50 */
    .m_palte{
      width: 100%;
      padding: 0 30px 30px;
      height: auto;
    }
     .palteimg{
      width: 100%;
      height: auto;
    }
    /* .m_palte .paltemain{
      width: 100%;
      padding-left: 0;
    } */
    .m_palte .palte_right{
      width: 100%;
    }
    .m_palte .palte_title{
      font-size: 20px;
      line-height: 50px;
      padding-left: 0;
      text-align: center;
    }
    /* .m_palte .paltecont{
      width: 100%;
      padding: 0;
      font-size: 14px;
      line-height: 20px;
      border: none;
    } */
    .m_palte .paltecont div{
      width: 33%;
      margin-right: 0;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    /* .m_palte .paltecont p{
      display: flex;
      height: 33.333%;
      align-items: center;
      margin-bottom: 0;
    } */
    .m_money{
      padding: 0 0 50px;
    }
    .m_money img{
      width: 100%;
    }
    /* 服务 */
    .m_paltemain{
      width: 100%;
      display: flex;
      align-items: center;
      /* justify-content: center; */
    }
    .m_paltemain p{
      /* width: auto; */
      padding-left: 1%;
      font-size: 10px !important;
      line-height: 16px;
      margin:88px 0 0;
    }
    .m_paltemain .paltecont{
      width: 56%;
      text-align: center;
    }
    .m_paltemain .paltecont p{
      margin: 0 0 10px;
    }
    .m_paltemain .paltecont img{
      width: 180px;
      height: 170px;
    }
</style>
