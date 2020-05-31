<template>
   <div>
            <Banner />
            <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
            <div class="brandpart" :class="{m_main:!screenshow}">
                <p class="title">全程招商系统解决能力</p>
                <div class="brandcontant">
                    <img class="bartimg1" src="../../static/img/brand_02.png" alt="">
                    <div class="part1">
                        <p class="brandtext">成都思睿地产顾问有限公司作为西南最大的专业招商团队，我们与主流商家保持着良好的互动，与欧尚超市、永辉超市、横店影院等大型主力商家也已形成良好的战略合作伙伴关系。</p>
                        <p class="brandtext">在大型商超、品牌连锁酒店、影院、百货、餐饮、休闲、儿童、娱乐等16大业态领域，我们积累并拥有上万家商业资源，并具备了在项目规划设计阶段就完成4大主力业态、6大次主力业态招商的突出能力。</p>
                    </div>
                </div>
            </div>
            <div class="brandpart" :class="{m_main:!screenshow}">
                <p class="title">标准化招商体系</p>
                <div class="brandcontant">
                    <p class="brandtwo">思睿招商具有完整的招商管理系统，并在此基础上全面推动1个平台、3个数据库、3个表格、5大系统建设、<br>7个保障体系的战略布局；我们深入理解项目与商家需求，精细化全过程，实行1对多、多对1的网状复合招<br>商模式；结合项目进度，精准匹配项目，分阶段高效推动项目招商。</p>
                    <div class="part2">
                        <div class="brandicon" v-for="(item,index) in brandicon" :key="index">
                            <img :src="item.imgstr" alt="">
                            <p>{{item.textone}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brandpart brandpart3" :class="{m_main:!screenshow}">
                <p class="title partthreetitle">招商服务内容</p>
                <div class="brandcontant">
                    <div class="part2 part3">
                        <div class="brandcontant3" v-for="(item,index) in brandcontant" :key="index">
                            <p class="brandtitle3">{{item.texttitle}}</p>
                            <p class="brandtext3" v-for="(item,index) in item.textone" :key="index">{{item}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brandpart" :class="{m_main:!screenshow}">
                <p class="title">典型招商案例</p>
                <Brandslider :showBol="screenshow" :screenw="screenWidth" :sliderdata="brandsliderdata" :bigdata="bigdata"/>
            </div>
            <div class="brandpart brandpart5" :class="{m_main:!screenshow}">
                <p class="title">上万商业资源</p>
                <div class="brandcontant">
                    <div class="part5">
                        <div v-for="(item,index) in brandlogo" :key="index">
                            <p class="logotitle" :class="{titleactive:item.bol}">{{item.title}}</p>
                            <div v-if="item.bol" style="height:500px;">
                            </div>
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
import Brandslider from '@/components/Brandslider'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Bannertext, Brandslider},
  data () {
    return {
      screenWidth: 0,
      screenshow: true,
      bannerdata: {textone: '全程招商', texttwo: '', urlstr: '../../static/img/brand_01.png'},
      brandicon: [
        {imgstr: './static/img/brand_03.png', textone: '1个云平台'},
        {imgstr: './static/img/brand_04.png', textone: '3个资源数据'},
        {imgstr: './static/img/brand_05.png', textone: '3张管控表格'},
        {imgstr: './static/img/brand_06.png', textone: '5大核心系统'},
        {imgstr: './static/img/brand_07.png', textone: '7个保障体系'}
      ],
      brandcontant: [
        {texttitle: '工程正负零', textone: ['项目定位明确', '主力店定制', '规划设计指引', '项目包装推广']},
        {texttitle: '主体封顶前', textone: ['文件及合同拟定', '人力资源部署', '业态、落位明确', '品牌资源整合', '商务政策拟定', '招商细节把控', '项目包装推广']},
        {texttitle: '开业前6个月', textone: ['品牌资源整合', '招商率达开业标准', '协助物业移交', '协助签约商务移交', '协助试营业', '开业筹备']}
      ],
      brandlogo: [
        {title: '百货超市', bol: true},
        {title: '精品零售', bol: false},
        {title: '休闲餐饮', bol: false},
        {title: '精品酒店', bol: false},
        {title: '娱乐体验', bol: false}
      ],
      brandsliderdata: [],
      bigdata: []
    }
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      this.screenWidth = val * 0.63058
      console.log('12', val)
    }
  },
  mounted () {
    this.showscreen()
    this.initbrand()
  },
  methods: {
    initbrand () {
      this.axios.post('api/procet/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, isbusiness: 70}).then((res) => {
        res.data.map((item, index) => {
          item.imgs = Unit.URL + item.imgs
          index === 0 ? item.bol = true : item.bol = false
        })
        let dataarr = JSON.parse(JSON.stringify(res.data)).slice(0, 5)
        dataarr.push(dataarr[0])
        dataarr.unshift(dataarr[4])
        this.brandsliderdata = dataarr
        this.bigdata = JSON.parse(JSON.stringify(res.data)).slice(0, 5)
      })
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
        this.screenWidth = document.documentElement.offsetWidth * 0.724637
        console.log(this.screenWidth)
      } else {
        this.screenWidth = document.documentElement.offsetWidth * 0.63058 // 窗口宽度
      }
    }
  }
}
</script>
<style scoped>
    /* moblie */
    .m_main{
        padding: 30px;
    }
    .m_main .brandcontant{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .m_main .bartimg1{
        width: 100%;
        margin: 0;
    }
    .m_main .part1{
        height: auto;
    }
    .m_main .brandicon img{
        width: 50px;
        height:50px;
    }
    .m_main .title{
        font-size: 20px;
        line-height: 20px;
        padding: 0 0 25px;
        margin-bottom: 0;
    }
    .m_main .brandtext{
        font-size: 16px;
        line-height: 30px;
    }
    .m_main .part2{
        padding: 30px 0 0;
    }
    .m_main .brandicon{
        width: 20%;
        height: 100px;;
        text-align: center;
    }
    .m_main .brandicon p{
        font-size: 12px !important;
        line-height: 12px;
        margin-top: 20px;
    }
    .m_main .brandcontant3 {
        width:32.333%;
        height: auto;
    }
    .m_main .brandtitle3 {
        font-size: 18px;
    }
    .m_main .brandtext3 {
      font-size: 14px;
      line-height: 20px;
      text-indent: 0;
      text-align: center;
    }
    .m_main .logotitle {
      font-size: 14px;
      line-height: 20px;
      padding: 0;
    }
    .title{
        padding: 100px 0 80px;
        font-size: 30px;
        color: #333;
        text-align: center;
    }
    .brandtext{
        font-size: 18px;
        line-height: 34px;
        color: #666;
        text-align: justify;
    }
    .brandcontant{
        width: 1200px;
        margin: auto;
        overflow: hidden;
    }
    .bartimg1{
        width: 540px;
        height: 280px;
        margin-right: 40px;
        float: left;
    }
    .part1{
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .brandtwo{
        font-size: 16px;
        color: #666;
        line-height: 30px;
    }
    .part2{
        display: flex;
        justify-content: space-between;
        padding:80px 0;
    }
    .brandicon img{
        width: 100px;
        height: 100px;
    }
    .brandicon p{
        font-size: 20px;
        line-height: 60px;
    }
    .brandpart3{
        background: url('../../static/img/brand_08.png') no-repeat;
        background-size: 100% 100%;
    }
    .partthreetitle{
        color: #fff;
    }
    .part3{
        padding: 0 0 100px;
    }
    .brandcontant3{
        width: 280px;
        height: 370px;
        background-color: #fff;
        padding: 50px 0 0;
        text-align: center;
    }
    .brandtitle3{
        color: #da251c;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 23px;
    }
    .brandtext3{
        font-size: 18px;
        color: #666;
        line-height: 34px;
        text-indent: 80px;
        text-align: start;
    }
    .brandpart5{
        background: url('../../static/img/servicebj_07.png') no-repeat;
        background-size: 100% 100%;
    }
    .logotitle{
        font-size: 24px;
        color: #666;
        padding: 0 25px 14px;
    }
    .titleactive{
        border-bottom: 2px solid #da251c;
    }
    .part5{
        display: flex;
        justify-content: space-between;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
</style>
