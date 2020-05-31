<template>
    <div>
        <Banner @istransform="istransform" @chooserearch="chooserearchfuc" cls="project"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
          <Bannertools :toolsdata="toolsdata" :showBol="screenshow" @choosenum="choosenumfuc" @chooserearch="chooserearchfuc" cls="project"/>
          <div class="expoundmain" v-if="screenshow&&this.expoundarr[this.expoundidx].titletext">
              <p class="expoundtitle">{{this.expoundarr[this.expoundidx].titletext}}</p>
              <p class="expoundtext" v-for="(item,index) in this.expoundarr[this.expoundidx].text" :key="index">{{item}}</p>
          </div>
          <Projectitem :projectdata="projectdata" :showBol="screenshow" requestcls="project" :toolsdata="toolsdata" :word="word"/>
          <div class="more" :class="{m_more:!screenshow}" @click="moredata">
              <p>{{moreStr}}</p>
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
import Bannertools from '@/components/Bannertools'
import Projectitem from '@/components/Projectitem'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Bannertext, Projectitem, Bannertools},
  data () {
    return {
      bannerdata: {textone: '不断推动实现商旅产业的价值转化', texttwo: '', urlstr: './static/img/projectlist_01.jpg'},
      toolsdata: [],
      expoundarr: [
        {id: 0, titletext: '思睿已构筑起商业地产全物业类型和全生命周期服务体系。一方面有基于行业趋势研判的国际视野、城市运营的高度和满足业主对投资战略的统筹思考；另一方面有通过运营提升物业价值，通过金融营销等方式退出变现的落地能力。', text: ['我们一贯秉承一案一例的定制化解决方案。', '在望江名门项目我们提出“在商不言商”的策略，协助投资商成功开发城市中央公馆豪宅，东有上海汤臣一品，西有成都望江名门。', '在永立星成都项目我们成功实践的“微旅游”主题街区模式，将城市文化与现代商业和谐相融，成就区域商业的一张名片。', '在海骏达城项目我们成功实践了通过加盟方式落地品牌商家的招商方式，胡桃里，巴国布衣等品牌首进郫都。', '万科钻石广场探索类REITS方式，对物业整体买入，招商运营之后，再溢价卖出。', '在北成八号项目我们提供了全程一站式服务，除开工程建设外，策划设计，招商销售，物管商管都由思睿团队执行。', '龙樾湾漫悦里项目见证城市新区如何快速招商，开发商以此为样板在全国复制漫悦里街区。在银城国际项目通过33个维度设计意见的调整，为业主方多赢得数千万的收入']},
        {id: 1, titletext: '文旅地产的本质在于地产，依托在商业地产的丰富经验和竞争力，思睿构筑起自身特有的文旅地产竞争优势。尤其是在文旅商业小镇，特色产业小镇领域思睿团队已积累起丰富的拿地可研方案，产品规划方案，招商方案经验，目前正在积极探索并实践文旅主题街区招商和景区托管业务。', text: ['我们秉承提供文化、旅游、商业、地产的融合解决方案，为客户构建复合的项目盈利模式。平衡政府要求与企业诉求。', '在青城山药王仙谷项目，新都花舞人间项目通过产业包装，业态植入，在乡村振兴及康养产业的大背景下，助力投资商顺利与政府签订投资协议。', '在成都水璟塘和自贡老街项目，分别通过对酒文化和盐文化的深度挖掘，把文态转化为可消费体验的业态和场景空间。思睿在历史文化街区项目种已形成自身的统筹体系及创新的内容。', '在服务新华联铜官窑项目中，推出了全新的古镇+主题乐园型度假区的模式。', '在服务金杯七里坪和太阳谷项目中，提出全龄段避暑康养，阳光康养生活方式......']},
        {id: 2, titletext: '', text: []}
      ],
      expoundidx: 2,
      projectdata: [],
      projectidx: 1,
      typenum: 0, // 类型
      word: '',
      screenshow: true, // 屏幕大小显示
      moreStr: '更多',
      is_left: false
    }
  },
  mounted () {
    this.showscreen()
    this.initcode()
    this.initaxios(1, 0)
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    // 初始编码
    initcode () {
      let chooseval = this.$route.params.chooseval
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/dict/getlist', {token: 'yxD9NyznUkP5cDsi', sid: 14}).then((res) => {
        res.data.reverse()
        res.data.map((item, index) => {
          item.idx = index
          item.bol = false
          if (chooseval === item.title) {
            item.bol = true
            this.initaxios(1, item.id)
            this.expoundidx = item.idx
            this.word = item.title
          }
        })
        this.toolsdata = res.data
        this.toolsfuc() // banner选择页面跳转
      })
    },
    // 初次数据
    initaxios (num, cls) {
      this.typenum = cls
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/procet/getlist', {token: 'yxD9NyznUkP5cDsi', page: num, type: cls, limit: 9}).then((res) => {
        this.moreStr = res.data.length === 0 ? '已到底部' : '更多'
        res.data.map(item => {
          item.imgs = Unit.URL + item.imgs
        })
        if (num === 1) {
          this.projectdata = res.data
        } else {
          let newdata = this.projectdata.concat(res.data)
          this.projectdata = newdata
        }
      })
    },
    moredata () {
      this.projectidx++
      this.initaxios(this.projectidx, this.typenum)
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
    },
    // tools根据banner选择而修改选项
    toolsfuc () {
      let textval = this.$route.params.textval + '地产'
      if (this.$route.params.textval !== undefined) {
        this.toolsdata.map((item, index) => {
          if (item.title === textval) {
            item.bol = true
            this.expoundidx = index
            this.initaxios(1, item.id)
          } else {
            item.bol = false
          }
        })
      }
    },
    // tools子组件搜索
    chooserearchfuc (data) {
      data.map(item => {
        item.imgs = Unit.URL + item.imgs
      })
      this.projectdata = data
      // 消除条件
      this.toolsdata.map((item) => {
        item.bol = false
      })
      this.expoundidx = 2
    },
    // tools子组件选择
    choosenumfuc (data) {
      this.expoundidx = data.num
      this.typenum = data.ids
      this.projectidx = 1
      this.word = data.word
      this.initaxios(this.projectidx, this.typenum)
    }
  }
}
</script>
<style scoped>
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
    .expoundmain{
        width: 1200px;
        margin: 47px auto 0;
        font-size: 16px;
        color: #333;
         text-align: justify;
    }
    .expoundtitle{
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    .expoundtext{
        line-height: 30px;
        color: #666;
    }
    .more{
        height: 60px;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
        color: #333;
        background-color: #ececec;
        margin:  0;
    }
    .more:hover{
      cursor:pointer;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
    /* moblie */
    .m_more{
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        margin-bottom: 0;
    }
</style>
