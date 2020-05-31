<template>
    <div>
        <Banner  @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow" hiddentext=0 />
          <div class="plusmain">
            <ul :class="{m_plusmain:!screenshow}" class="md_part sm_part">
              <li v-for="item in plusdata" :key="item.id"   :data-idx="item.id" >
                <!-- <a :href="item.webadd"> -->
                  <img :src="item.imgsrc" alt="">
                  <div class="plustext">
                    <p>{{item.title}}</p>
                    <p>{{item.text}}</p>
                  </div>
                <!-- </a> -->
              </li>
            </ul>
          </div>
          <div class="footercls">
              <Footer :showBol="screenshow"/>
          </div>
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
      bannerdata: {textone: 'SIR Plus重新定义商旅地产及城市运营全链条价值服务', texttwo: '', urlstr: './static/img/plusbj_01.jpg'},
      plusdata: [
        {id: 0, title: '昆明睿信城市运营管理有限公司', webadd: '#', text: '由昆明空港投资开发集团公司联合思睿地产与成都信宜物业股份公司共同出资成立，是以服务滇中新区城市运营为核心的城市运营公司。', imgsrc: './static/img/sirpluslogo_03.png'},
        {id: 1, title: '思睿博道建筑设计院', webadd: '#', text: '国内著名的、拥有200+项目实操经验的商旅地产规划设计平台，成功建立评审标准化体系，助攻全面把控设计重点，提高设计质量、效率。', imgsrc: './static/img/sirpluslogo_06.png'},
        {id: 2, title: '四川华路文化交流中心', webadd: '#', text: '由致力促进四川省与一带一路沿线国家文化交流与合作的企业、事业单位和社会团体等自愿组成的行业性社会组织，聚焦“文化、旅游、大健康、商业、教育等”产业。', imgsrc: './static/img/sirpluslogo_10.png'},
        {id: 3, title: '奥园金控集团', webadd: '#', text: '依托于上市公司奥园集团，奥园金控致力于五大板块金融业务，包括金融机构投资、类金融业务、标准化产品和创新业务融资、基金业务、资本运作。', imgsrc: './static/img/sirpluslogo_11.png'},
        {id: 4, title: '华西希望集团', webadd: 'http://www.hxhopegroup.com/index.html', text: '属“中国民营企业500强第一”的希望集团二级集团之一，思睿作为华西希望策划规划御用团队，为希望农旅集团包含花舞人间系列在内的项目提供全程服务。', imgsrc: './static/img/sirpluslogo_14.png'},
        {id: 5, title: '费尔蒙商业投资管理有限公司', webadd: '#', text: '为企业提供经营投资管理、投资咨询、资产管理服务的专业平台，高效推动投资管理，致力完成一系列稳健而独具眼光的商业运作。', imgsrc: './static/img/sirpluslogo_15.png'},
        {id: 6, title: '成都毕贝塔数据科技有限公司', webadd: 'http://www.aladin-map.com/', text: '商业地产的首选大数据应用服务商。基于地产决策应用场景，利用现代技术手段，帮助实体商业精准决策，降低获客成本，提升运营效率。', imgsrc: './static/img/sirpluslogo_18.png'},
        {id: 7, title: '成都超群资产管理有限公司', webadd: '#', text: '10年+管理经验，3阶段5板块的标准化流程体系，超群资产准确把握定位，为商旅地产资产管理提供全程投、融资金融服务，以实现高效的商业运营。', imgsrc: './static/img/sirpluslogo_20.png'},
        {id: 8, title: '成都中能物业管理有限责任公司', webadd: '#', text: '拥有国家一级物业管理资质的专业管理服务公司，专注于商业物业全程运营和住宅物业服务，致力于推动行业的效率进化。', imgsrc: './static/img/sirpluslogo_23.png'},
        {id: 9, title: '天睿文创空间', webadd: '#', text: '以商业空间设计策略为主导，围绕一体化空间整合、策划与设计的商旅文场景消费空间创意平台，专注于商业、文旅综合体、主题街区等消费空间打造。', imgsrc: './static/img/sirpluslogo_24.png'}
      ],
      screenshow: true, // 屏幕大小显示,
      is_left: false
    }
  },
  mounted () {
    this.showscreen()
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
    }
  }
}
</script>
<style scoped>
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
    .plusmain ul{
        width: 1410px;
        padding: 50px 0;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .plusmain li{
        list-style: none;
        width: 640px;
        height:240px;
        padding:44px 30px;
        margin: 30px auto;
        border: 1px solid #b3b3b3;
    }
    .plusmain li:hover .plustext p:nth-child(1){
        color: #da251c;
    }
    .plusmain li img{
        width:150px;
        height:150px;
        float: left;
    }
    .plustext{
        width: 404px;
        float: right;
        font-size: 22px;
        color: #333;
    }
    .plustext p:nth-child(1){
        font-weight: bold;
        line-height: 48px;
    }
    .plustext p:nth-child(2){
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color:#999;
         text-align: justify;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
    /* moblie */
    .m_plusmain{
        width: 100% !important;
        padding:20px 30px 0 !important;
    }
    .m_plusmain li{
        width: 100% !important;
        height: auto !important;
        padding:10px 0 !important;
        margin:0 0 20px!important;
    }
    .m_plusmain li img{
        width: 146px !important;
        height: 146px !important;
    }
    .M_plusmain li:hover .plustext p:nth-child(1){
        color: #333 !important;
    }
    .m_plusmain li a{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .m_plusmain .plustext{
        width: 53%;
       padding:0 12px 0 5px;
    }
    .m_plusmain .plustext p:nth-child(1){
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
    }
    .m_plusmain .plustext p:nth-child(2){
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        margin-top: 5px;
    }
</style>
