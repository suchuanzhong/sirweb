<template>
    <div>
        <Banner @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow" />
          <div class="main md_part sm_part" :class="{m_main:!screenshow}" :style="screenshow?'width:1245px;':'width:100%;'" style="margin:auto;">
              <Listitem class="mainleft md_part sm_part" :listdata="listdata" :showBol="screenshow" requestcls="trends" :word="word"/>
              <Advlist class="mainright md_hidden sm_hidden" :advdata="advdata" :showBol="screenshow" requestcls="reseach"/>
          </div>
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
import Listitem from '@/components/Listitem'
import Advlist from '@/components/Advlist'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Bannertext, Listitem, Advlist},
  data () {
    return {
      bannerdata: {textone: 'SIR动态', texttwo: '', urlstr: './static/img/sirnewsbj_01.jpg'},
      screenshow: true, // 屏幕大小显示，
      listdata: [],
      advdata: [],
      trendsidx: 1,
      word: '',
      moreStr: '更多',
      is_left: false
    }
  },
  mounted () {
    this.showscreen()
    this.initaxios(1)
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    // 初次家在数据
    initaxios (num) {
      const baseUrl = process.env.API_ROOT
      this.initadv(1)
      this.axios.post(baseUrl + '/news/getlist', {token: 'yxD9NyznUkP5cDsi', page: num, limit: 8}).then((res) => {
        this.moreStr = res.data.length === 0 ? '已到底部' : '更多'
        this.dealdata(res.data, num)
      })
    },
    dealdata (data, num) {
      data.map(item => {
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
    // 推荐研究模块
    initadv (num) {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/study/getlist', {token: 'yxD9NyznUkP5cDsi', page: num, limit: 3}).then((res) => {
        res.data.map(item => {
          item.imgs = Unit.URL + item.imgs
        })
        this.advdata = res.data
      })
    },
    moredata () {
      this.trendsidx++
      this.initaxios(this.trendsidx)
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
      width: 1580px;
        overflow: hidden;
        margin: auto;
    }
    .mainleft{
        width: 920px;
        margin: 50px  0;
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
        padding: 20px 30px;
    }
    .m_main .mainleft{
        width: 100%;
        margin: 0;
        border: none;
    }
    .m_more{
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
</style>
