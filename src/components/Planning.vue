<template>
    <!-- 规划评审 -->
    <div class="contant">
      <div class=" designbox" :class="{m_designbox:!showBol}">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>规划评审</p>
        </div>
        <div class="des md_part sm_part" :class="{m_des:!showBol}">
          <p class="destitle" >创意性 经济性 落地性与可持续发展兼具</p>
          <p class="desintroduce" >结合实操经验，思睿归结出商旅地产规划设计的评审标准化体系及内容，全系统推动项目落地。</p>
        </div>
        <div class="desmain" :class="{m_desmain:!showBol}">
          <ul class="design part md_part sm_part" :class="{m_part:!showBol}">
              <li v-for="(item,index) in design" :key="index">
                  <img :src="item.imgstr" alt="">
                  <div class="designmain" >
                      <p class="designtitle">{{item.textone}}</p>
                      <p class="designdes" v-if="showBol">{{item.texttwo}}</p>
                  </div>
              </li>
          </ul>
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
        <!-- <img v-else class="palteimg" src="../../static/img/plate2.png" alt=""> -->
         <!-- <div v-else class="palteimg">
          <img src="../../static/img/plate02_1.png" alt="">
          <img src="../../static/img/plate02_2.png" alt="">
          <img src="../../static/img/plate02_3.png" alt="">
        </div> -->
      </div>
    </div>
</template>
<script>
export default {
  props: ['showBol'],
  data () {
    return {
      design: [
        {imgstr: './static/img/service_5.png', textone: '4个评审阶段', texttwo: '强排方案阶段、概念方案阶段 报规方案阶段、初设方案阶段'},
        {imgstr: './static/img/service_6.png', textone: '33大评审关键', texttwo: '从拿地到报建的全过程，共计33个评审关键，全面把控设计重点'},
        {imgstr: './static/img/service_7.png', textone: '180个设计标准', texttwo: '180个设计评审标准，全系统控制设计质量，达到企业要求'}
      ],
      platedata: [
        {id: 0, text: '', urlstr: '../../static/img/plate2_1.png', children: ['建筑设计任务书', '区域规划设计', '项目概念设计']},
        {id: 1, text: '', urlstr: '../../static/img/plate2_2.png', children: ['项目建筑设计', '技术专家评审', 'IP场景打造设计']},
        {id: 2, text: '', urlstr: '../../static/img/plate2_3.png', children: ['设计评审及技术服务', '室内设计、营销设施及导识系统设计任务书']}
      ]
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
    .des{
        width: 1200px;
        margin: auto;
    }
    .destitle{
        font-size: 20px;
        line-height: 20px;
        color: #666;
        padding: 0;
        margin-bottom: 13px;
        font-weight: bold;
    }
    .desintroduce{
        font-size: 14px;
        color: #666;
        line-height: 28px;
    }
    /* 规划评审 */
    /* .designbox{} */
    .design{
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        margin: auto;
    }
    .design li{
      list-style: none;
      width: 33.333%;
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
    .desmain{
      background: url('../../static/img/servicebj_01.jpg') no-repeat;
      background-size: 100% 100%;
      padding: 100px 0 51px;
      /* padding-bottom: 100px; */
      height: 550px;
    }
    .design li:nth-child(1){
        margin: 100px 0 0 65px;
    }
    .design li:nth-child(1) .designmain{
        width: 199px;
        margin: auto;
    }
    .design li:nth-child(2){
        margin: -18px 0 0;
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
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
    /* 规划评审 */
    .m_desmain{
      height: auto;
      padding: 0;
      background: url();
    }
    .m_des{
      width: 100%;
    }
    .m_des .desintroduce{
      line-height: 22px;
    }
    .m_des .destitle{
      font-size: 16px;
      line-height: 16px;
      font-weight: normal;
      padding:0;
      margin-bottom: 16px;;
    }
    .m_designbox{
      padding: 0 30px 30px;
      background: url(/static/img/servicebj_07.fd9e3cb.png);
    }
    .m_part{
      width:100%;
      padding: 0;
      justify-content: space-between;
    }
    .m_part li{
      width: 33.33%;
      margin: 20px 0 0 !important;
    }
    .m_part img{
      width: 60px;
      height: 60px;
    }
    .m_part .designmain{
      width:100% !important;
      font-size: 14px !important;
      line-height: 14px !important;
    }
    .m_part .designtitle{
      margin: 0;
      line-height: 14px;
      font-size: 14px !important;
    }
    /* 5板块 */
    .m_palte{
      width: 100%;
      padding: 0 30px 30px;
      height: auto;
      margin-top: 20px;
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
