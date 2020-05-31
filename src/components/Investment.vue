<template>
    <!-- 招商 -->
      <div class="contant">
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>品牌招商</p>
        </div>
        <div class="investdes" :class="{m_investdes:!showBol}">
          <div class="destext">
            <p class="title">创新招商模式、高效整合资源，形成一站式全程招商系统解决能力</p>
            <p class="des1">作为西南最大的专业招商团队，我们与主流商家保持着良好的互动，与欧尚超市、永辉超市、横店影院、胡桃里、巴国布衣等大型主力商家业已形成良好的战略合作伙伴关系；</p>
            <p class="des2">在大型商超、品牌连锁酒店、影院、百货、餐饮、休闲、儿童、娱乐等16大业态领域，我们积累并拥有上万家商业资源，并具备了在项目规划设计阶段就完成4大主力业态、6大次主力业态招商的突出能力。</p>
            <p class="des3"> 创新利用“互联网+招商”模式，开发国内领先的基于线下全系支撑的不动产租赁网络平台“阿拉丁云图” ，通过线上线下互动和大数据支撑，让招商不再困难。</p>
          </div>
          <div class="desimg">
            <img src="../../static/img/invest0.jpg" alt="">
            <div class='redbox' v-if="showBol"></div>
          </div>
        </div>
        <div class="investmain" :class="{m_investmain:!showBol}">
          <div class="main" v-for="(item, index) in invest" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">
            <div class="itemcls">
              <div class="mainicon"><img :src="item.urlstr1" alt=""></div>
              <div>
                <p class="maintitle">{{item.textone}}</p>
                <div class="desbox">
                  <p class="maindes" v-for="(item, index) in item.texttwo" :key="index">{{item}}</p>
                </div>
              </div>
            </div>
            <div class="mask" v-if="item.bol">
              <div class="mainicon"><img :src="item.urlstr2" alt=""></div>
              <div>
                <p class="maintitle">{{item.textone}}</p>
                <div class="desbox">
                <p class="maindes" v-for="(item, index) in item.texttwo" :key="index">{{item}}</p>
                </div>
              </div>
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
          <!-- <img v-else class="palteimg" src="../../static/img/plate4.png" alt=""> -->
        </div>
        <!-- 案例 -->
        <div class="titlebox" :class="{m_titlebox:!showBol}">
          <div class="com_dot"><i></i><i></i><i></i></div>
          <p>优秀招商案例展示</p>
        </div>
        <Investslider :showBol="showBol" :screenw="screenw" :sliderdata="brandsliderdata" :bigdata="bigdata"/>
    </div>
</template>
<script>
import Investslider from './Investslider'
import Unit from '@/unit'
export default {
  components: {Investslider},
  props: ['screenw', 'showBol'],
  data () {
    return {
      invest: [
        {id: 0, bol: false, urlstr1: '../../static/img/invest1.png', urlstr2: '../../static/img/invest1_2.png', textone: '6大招商优势', texttwo: ['25年招商经验', '100+落地项目', '16大业态范围', '10000+品牌资源', '8大招商支撑体系', '西南最大招商团队']},
        {id: 1, bol: false, urlstr1: '../../static/img/invest2.png', urlstr2: '../../static/img/invest2_2.png', textone: '5个服务内容', texttwo: ['招商咨询', '招商策划', '招商顾问', '招商推广', '招商执行']},
        {id: 2, bol: false, urlstr1: '../../static/img/invest3.png', urlstr2: '../../static/img/invest3_2.png', textone: '3种合作方式', texttwo: ['驻场招商', '渠道招商', '指定招商']},
        {id: 3, bol: false, urlstr1: '../../static/img/invest4.png', urlstr2: '../../static/img/invest4_2.png', textone: '7个招商范围', texttwo: ['商业街区', '主题地产', '社区商业', '文旅地产', '购物中心', '产业招商', '写字楼租赁']},
        {id: 4, bol: false, urlstr1: '../../static/img/invest5.png', urlstr2: '../../static/img/invest5_2.png', textone: '3大招商方式', texttwo: ['阿拉丁云图', '租赁大数据', '高效招商推动']},
        {id: 5, bol: false, urlstr1: '../../static/img/invest6.png', urlstr2: '../../static/img/invest6_2.png', textone: '100+招商项目', texttwo: ['广汇美术馆：公园艺术中心', '自贡自流井老街：文旅街区', '永立星城都：微旅游综合体', '水璟唐：川西文化......']}
      ],
      platedata: [
        {id: 0, text: '', urlstr: '../../static/img/plate4_1.png', children: ['整合招商战略', '商业业态规划']},
        {id: 1, text: '', urlstr: '../../static/img/plate4_2.png', children: ['主力店锁定', '旅游IP导入']},
        {id: 2, text: '', urlstr: '../../static/img/plate4_3.png', children: ['包装及推广策略', '招商执行、开业推广、活动策略开业']}
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
        let dataarr = JSON.parse(JSON.stringify(res.data)).slice(0, 9)
        let newdata = [dataarr[6], dataarr[7], dataarr[8], ...dataarr, dataarr[0], dataarr[1], dataarr[2]]
        dataarr.push(dataarr[0])
        dataarr.unshift(dataarr[8])
        this.brandsliderdata = dataarr
        this.bigdata = newdata
        // this.bigdata = JSON.parse(JSON.stringify(res.data)).slice(0, 9)
      })
    },
    enter (num) {
      if (!this.showBol) {
        return
      }
      this.invest.map((item, index) => {
        num === index ? item.bol = true : item.bol = false
      })
      this.idx = -1
    },
    leave (num) {
      this.invest.map((item, index) => {
        item.bol = false
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
      line-height: 24px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 90px;
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
    /* 招商介绍 */
    .investdes{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .redbox{
      width: 60px;
      height: 20px;
      background-color: #d62c28;
      float: left;
      margin-left: -30px;
      margin-top: -230px;
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
    .des3{
      font-size: 16px;
      color: #999;
      line-height: 28px;
      margin-top: 18px;
    }
    .desimg{
      width: 520px;
      height: 300px;
    }
    .desimg img{
      float: left;
      width: 100%;
      height: 100%;
    }
    /* 六个模块 */
    .investmain{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin:70px auto 90px;
    }
    .main{
      width: 32%;
      position: relative;
    }
    .itemcls, .mask{
      width: 100%;
      height: 160px;
      padding: 30px 0 30px 30px;
      display: flex;
      justify-content: flex-start;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin-top: 14px;
    }
    .mainicon{
      width: 36px;
      height: 36px;
      margin-right: 30px;
      display: flex;
      align-items: center;
    }
    .maintitle{
      font-size: 18px;
      font-weight: bold;
      color: #333
    }
    .desbox{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .maindes{
      font-size: 16px;
      color: #666;
      margin-right: 18px;
    }
    .mask{
      position: absolute;
      top: 0;
      background-color:#d62c28;
      box-shadow: 10px 10px 0 rgba(191, 191, 191, .75);
    }
    .mask p{
      color: #fff !important;
    }
    /* 50板块 */
    .palte{
      width: 100%;
      height: 500px;
      position: relative;
      margin-top: -50px;
      background: url('../../static/img/consultant6.jpg') no-repeat;
    }
    .palte .titlebox{
      padding-top: 1px;
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
      padding: 0px 33px 40px;
      text-align: center;
    }
    .palteitem img{
      margin:0 auto 14px;
    }
    .palteitem p{
      font-size: 16px;
      color: #fff;
      line-height: 30px;
      /* text-align: left; */
    }
    .palteimg{
      width: 100%;
    }
       /* moblie */
    .m_titlebox{
      padding: 1px 30px 0;
      margin:0 auto 30px;
      font-size: 18px;
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
  /* 品牌招商 */
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
    line-height: 24px;
  }
  .m_investdes .des1{
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 12px;
  }
  .m_investdes .des2{
    font-size: 14px;
    line-height: 22px;
  }
  .m_investdes .des3{
    font-size: 14px;
    line-height: 22px;
    margin-top: 12px;
  }
  .m_investdes .desimg{
    width:100%;
    height: 200px;
    margin-top: 24px;
  }
  .m_investmain{
    width: 100%;
    padding: 0 30px;
    margin: 30px auto 0;
  }
  .m_investmain .main{
    width: 100%;
  }
  .m_investmain .maindes{
    font-size: 14px;
    margin-right: 11px;
  }
  .m_investmain .itemcls{
    height: 150px;
    margin: 0 0 14px;
    align-items: center;
  }
  .m_investmain .maintitle{
    font-size: 16px;
    margin-bottom: 4px;
  }
  /* 50 */
  .m_palteitem{
    width: 33.33%;
    height: auto;
    padding: 0 0 13px;
  }
  .m_palteitem img{
    width: 50px;
    height: 50px;
  }
  .m_palteitem p{
    font-size: 14px;
    line-height: 22px;
  }
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
