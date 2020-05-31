<template>
    <div>
        <Banner @istransform="istransform" @chooserearch="chooserearchfuc" cls="reseach"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
          <Bannertools :toolsdata="toolsdata" :showBol="screenshow" @choosenum="choosenumfuc" @chooserearch="chooserearchfuc" cls="reseach" />
            <div class="main md_part sm_part" :class="{m_main:!screenshow}">
              <!-- <keep-alive> -->
                <Listitem class="mainleft md_part sm_part" :listdata="listdata" :showBol="screenshow" requestcls="reseach" :word="word"/>
                <Advlist class="mainright md_hidden sm_hidden" :advdata="advdata" requestcls="trends" :showBol="screenshow"/>
              <!-- </keep-alive> -->
            </div>
          <div class="more" :class="{m_more:!screenshow}" @click="moredata">
              <p>{{moreStr}}</p>
          </div>
          <div class="footercls">
              <Footer :showBol="screenshow"/>
          </div>
        </div>
        <!-- <Totop /> -->
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Bannertext from '@/components/Bannertext'
import Bannertools from '@/components/Bannertools'
import Listitem from '@/components/Listitem'
import Advlist from '@/components/Advlist'
import Footer from '@/components/Footer'
import Totop from '@/components/Totop'
import Unit from '@/unit'
// import axios from 'axios'
export default {
  components: {Banner, Footer, Bannertext, Bannertools, Listitem, Advlist, Totop},
  data () {
    return {
      bannerdata: {textone: '智驱未来  汇集睿思', texttwo: '', urlstr: './static/img/reseach_01.jpg'},
      // bannerdata: {textone: '智驱未来  汇集睿思', texttwo: '思睿凭借对商旅产业敏锐的洞察，通过深入分析形成独到的报告/专题/观点，与业界同仁共同分享。', urlstr: './static/img/reseach_01.jpg'},
      screenshow: true, // 屏幕大小显示，
      toolsdata: [],
      listdata: [],
      advdata: [],
      reseachidx: 1,
      typenum: 0, // 类型
      word: '',
      moreStr: '更多',
      is_left: false
    }
  },
  created () {
    this.initaxios(1, '')
    this.initcode()
  },
  mounted () {
    this.showscreen()
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    // 初始编码
    initcode () {
      const baseUrl = process.env.API_ROOT
      let chooseval = this.$route.params.chooseval
      this.axios.post(baseUrl + '/dict/getlist', {token: 'yxD9NyznUkP5cDsi', sid: 27}).then((res) => {
        res.data.map((item, index) => {
          item.idx = index
          item.bol = false
          if (chooseval === item.title) {
            item.bol = true
            this.initaxios(1, item.id)
            this.word = item.title
          }
        })
        this.toolsdata = res.data
      })
    },
    // 推荐新闻模块
    initadv (num) {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/news/getlist', {token: 'yxD9NyznUkP5cDsi', page: num, limit: 3}).then((res) => {
        res.data.map(item => {
          item.imgs = Unit.URL + item.imgs
        })
        this.advdata = res.data
      })
    },
    // 初次数据
    initaxios (num, cls) {
      const baseUrl = process.env.API_ROOT
      this.typenum = cls
      this.initadv(1)
      this.axios.post(baseUrl + '/study/getlist', {token: 'yxD9NyznUkP5cDsi', page: num, type: cls, limit: 8}).then((res) => {
        this.moreStr = res.data.length === 0 ? '已到底部' : '更多'
        this.dealdata(res.data, num)
      })
    },
    dealdata (data, num) {
      data.map(item => {
        item.newlabel = item.label.split('-')
        item.imgs = Unit.URL + item.imgs
        item.time = Unit.myformatter(item.time)
      })
      if (num === 1) {
        this.listdata = data
      } else {
        let newdata = this.listdata.concat(data)
        this.listdata = newdata
      }
    },
    moredata () {
      this.reseachidx++
      this.initaxios(this.reseachidx, this.typenum)
    },
    // tools子组件选择
    choosenumfuc (data) {
      this.typenum = data.ids
      this.reseachidx = 1
      this.word = data.word
      this.initaxios(this.reseachidx, this.typenum)
    },
    // tools子组件搜索
    chooserearchfuc (data) {
      this.reseachidx = 1
      this.dealdata(data, 1)
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
    .main{
      width:1245px;
      overflow: hidden;
      margin: auto;
    }
    .mainleft{
        width: 920px;
        margin: 50px auto 0;
        border-right: 1px solid #b1b1b1;
        float: left;
    }
    .mainright{
        padding: 50px 0 0 50px;
        float: left;
    }
    .more{
        height: 60px;
        font-size: 16px;
        text-align: center;
        line-height: 60px;
        color: #333;
        background-color: #ececec;
    }
    .more p:hover{
      cursor: pointer;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
    /* moblie */
    .m_main{
        width: 100%;
    }
    .m_main .mainleft{
        width: 100%;
        margin-top: 0;
        padding: 0 30px;
        border: none;
    }
    .m_more{
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
</style>
