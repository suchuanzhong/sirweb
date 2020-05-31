<template>
    <div class="banner"   >
        <div style="width:100%;" v-if="screenshow" >
            <div class="logobox">
              <div class="bjlogo slg_bjlogo"><img src="../../static/img/logo.png" alt=""></div>
              <ul class="logoUl">
                <li>
                  <img src="../../static/img/add.jpg" alt="">
                  <div>
                    <p>航空路6号丰德国际广场D3座7层</p>
                    <p class="logoboxp">四川省成都市武侯区</p>
                  </div>
                </li>
                <li>
                  <img src="../../static/img/email.jpg" alt="">
                  <div>
                    <p>service@sirchina.cn</p>
                    <p class="logoboxp">服务邮箱</p>
                  </div>
                </li>
                <li>
                  <img src="../../static/img/phone.jpg" alt="">
                  <div>
                    <p>028-85217099 / 028-85562138</p>
                    <p class="logoboxp">咨询热线</p>
                  </div>
                </li>
                <li class="slg_logoUl_li">
                  <img src="../../static/img/erweima.png" alt="">
                </li>
              </ul>
            </div>
            <div class="bannercls"  @mouseleave="leavertwomenu">
                <!-- <img v-if="!otherbj" class="logocls" src="../../static/img/logo1.png" alt="">
                <img v-else class="logocls" src="../../static/img/logo2.png" alt=""> -->
                <ul class="contaner">
                    <li v-for="item in bannerdata" :key="item.id" @mouseenter="entertwomenu($event)"  :data-ids="item.id">
                        <router-link :to="'/'+item.urlstr" style="color:#8e98a1;" :class="{othercolor:otherbj,banneractive:item.bannerbjbol}">
                        <p class="ctext">{{item.text}}&nbsp;<img v-if="item.children.length!=0" :style="item.children.length!=0&&item.bannerbjbol?{opacity:1}:{opacity:0.5}" src="../../static/img/dowm_min.png" alt=""></p>
                        <!-- <p class="etext">{{item.etext}}</p> -->
                        </router-link>
                    </li>
                </ul>
              <div class="twomenu twomenu1" v-if="bannerdata[bannerindex].children.length!=0&&bannerdata[bannerindex].bol&&bannerindex!=2">
                <p v-for="item in bannerdata[bannerindex].children" :key="item.text" :data-text="item.text">
                    <router-link :to="{name:item.childurl,params:{textval:item.text}}" style="color:#333;" >
                        {{item.text}}
                    </router-link>
                </p>
              </div>
              <div class="twomenu twomenu2" v-else-if="bannerindex==2&&bannerdata[bannerindex].bol" >
                  <p v-for="item in bannerdata[bannerindex].children" :key="item.text" :data-text="item.text" @click="tabclick(item.id)">
                      <a :href="'/service#'+item.id" style="color:#333;" >
                          {{item.text}}
                      </a>
                  </p>
              </div>
            </div>
        </div>
        <div v-else  >
          <div :class='{bannerbjcls:bannerbj}' class="mnav">
              <div v-if="!intshow">
                <img class="logocls mlogo" src="../../static/img/logo1.png" alt="">
              </div>
              <div class="searchbox" v-if="is_intshow" :style="intshow?{'background-color': '#fff'}:{'background-color':'transparent'}">
                <input v-if="intshow" type="text" class="searchint" placeholder="请输入您想查询文章的关键字" v-model="searchval" @change="intchange">
                <img :src="intshow?'../../static/img/search.png':'../../static/img/search1.png'" alt="" :style="intshow?{width:'14px',height:'14px'}:{}" @click="clicksearch" class="searchimg" >
              </div>
              <div @click="value5 = true">
                <img  class="mnavcls navcls"  src="../../static/img/nav2.png" alt="">
              </div>
          </div>
          <Drawer width="225" :transfer= "false" :closable="false" :mask-style="{'background-color':'rgba(55,55,55,.1)'}" v-model="value5" placement='left' class-name="drawerbj"  @on-visible-change='visibleChange'>
            <div class="drawerlogo"><img  src="../../static/img/logo2.png" alt=""></div>
            {{bodystr}}
            <div class="drawercls"  v-for="item in mbannerdata" :key="item.id" :data-idx="item.id"  @click="showchilddrawer"  :class="{bannercolor:item.bol}">
              <img class="drawerimg" :src="item.bol?item.imgstr[0]:item.imgstr[1]" alt="" :data-idx="item.id"  @click="showchilddrawer">
              {{item.text}}</div>
          </Drawer>
          <!-- <Drawer  width="225" :closable="false" v-model="childrendrawer" placement='left' background-color='#e4e4e4'>
              <div class="drawercls" v-for="item in twodrawerdata" :key="item.text" @click="twodrawer" :data-childurl="item.mchildurl"> {{item.text}}</div>
          </Drawer> -->
        </div>
        <div class="top" @click="totop" v-if="num>600&&screenshow"></div>
    </div>
</template>
<script>
export default {
  name: 'banner',
  props: ['cls'],
  data () {
    return {
      bannerbj: false,
      value5: false,
      childrendrawer: false,
      bannerindex: 0,
      bannerdata: [
        {id: 0, text: '首页', etext: 'Home', bannerbjbol: false, bol: false, urlstr: '', children: []},
        {id: 1, text: '关于SIR', etext: 'About', bannerbjbol: false, bol: false, urlstr: 'about', children: []},
        {id: 2, text: 'SIR服务', etext: 'Service', bannerbjbol: false, bol: false, urlstr: 'service', children: [{id: 0, text: '咨询顾问', childurl: 'Service', pbol: false}, {id: 1, text: '规划评审', childurl: 'Service', pbol: false}, {id: 2, text: '整合营销', childurl: 'Service', pbol: false}, {id: 3, text: '品牌招商', childurl: 'Service', pbol: false}, {id: 4, text: '经营管理', childurl: 'Service', pbol: false}, {id: 5, text: 'IP场景打造', childurl: 'Service', pbol: false}, {id: 6, text: '资产运营', childurl: 'Service', pbol: false}, {id: 7, text: '金融服务', childurl: 'Service', pbol: false}]},
        // {id: 2, text: 'SIR服务', etext: 'Service', bannerbjbol: false, bol: false, urlstr: 'service', children: [{id: 0, text: '咨询顾问', childurl: 'Service', pbol: false}, {id: 1, text: '规划评审', childurl: 'Service', pbol: false}, {id: 2, text: 'IP场景打造', childurl: 'Service', pbol: false}, {id: 3, text: '品牌招商', childurl: 'Service', pbol: false}, {id: 4, text: '整合营销', childurl: 'Service', pbol: false}, {id: 5, text: '资产运营', childurl: 'Service', pbol: false}, {id: 6, text: '开发管理', childurl: 'Service', pbol: false}, {id: 7, text: '金融服务', childurl: 'Service', pbol: false}, {id: 8, text: '作业系统', childurl: 'Service', pbol: false}]},
        {id: 3, text: 'SIR项目', etext: 'Project', bannerbjbol: false, bol: false, urlstr: 'project', children: []},
        {id: 4, text: 'SIR研究', etext: 'Reseach', bannerbjbol: false, bol: false, urlstr: 'reseach', children: []},
        {id: 5, text: 'SIR文化', etext: 'Culture', bannerbjbol: false, bol: false, urlstr: 'culture', children: [{text: '思睿文化', mchildurl: 'Culture', childurl: 'Culture', pbol: false}, {text: '加入我们', childurl: 'Joinus', mchildurl: 'joinus', pbol: false}]},
        {id: 6, text: 'SIR动态', etext: 'Trends', bannerbjbol: false, bol: false, urlstr: 'trends', children: []},
        {id: 7, text: 'SIR PLUS', etext: 'SIRPlus', bannerbjbol: false, bol: false, urlstr: 'plus', children: []}
      ],
      mbannerdata: [
        {id: 0, text: '首页', imgstr: ['../../static/img/drawer01.png', '../../static/img/drawer1.png'], bol: true, urlstr: ''},
        {id: 1, text: '关于SIR', imgstr: ['../../static/img/drawer02.png', '../../static/img/drawer2.png'], bol: false, urlstr: 'about'},
        {id: 2, text: 'SIR服务', imgstr: ['../../static/img/drawer03.png', '../../static/img/drawer3.png'], bol: false, urlstr: 'service'},
        {id: 3, text: 'SIR项目', imgstr: ['../../static/img/drawer04.png', '../../static/img/drawer4.png'], bol: false, urlstr: 'project'},
        {id: 4, text: 'SIR研究', imgstr: ['../../static/img/drawer05.png', '../../static/img/drawer5.png'], bol: false, urlstr: 'reseach'},
        {id: 5, text: 'SIR文化', imgstr: ['../../static/img/drawer06.png', '../../static/img/drawer6.png'], bol: false, urlstr: 'culture'},
        {id: 6, text: '加入我们', imgstr: ['../../static/img/drawer07.png', '../../static/img/drawer7.png'], bol: false, urlstr: 'joinus'},
        {id: 7, text: 'SIR动态', imgstr: ['../../static/img/drawer08.png', '../../static/img/drawer8.png'], bol: false, urlstr: 'trends'},
        {id: 8, text: 'SIR PLUS', imgstr: ['../../static/img/drawer09.png', '../../static/img/drawer9.png'], bol: false, urlstr: 'plus'}
      ],
      // idx: '',
      screenshow: true,
      twodrawerdata: [],
      otherbj: false,
      num: 0,
      bannerdis: false,
      intshow: false, // 搜索框展示
      is_intshow: false,
      searchval: '',
      beforeScrollTop: 0,
      bodystr: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.bannerscroll, true) // 监听（绑定）滚轮滚动事件
    this.showscreen()
    this.bannerbjfuc(this.$route.path)
    this.otherweb()
    this.beforeScrollTop = document.body.scrollTop
  },
  methods: {
    visibleChange (data) {
      if (this.value5) {
        this.stop()
      } else {
        this.move()
      }
      // this.$emit('istransform', this.value5)
      this.bodystr = document.body.style.width
      this.$emit('istransform', data)
    },
    mo (e) {
      e.preventDefault()
    },
    stop () {
      document.body.style.overflow = 'hidden'
      // document.addEventListener('touchmove', this.mo, {passive: false})
    },
    move () {
      document.body.style.overflow = ''
      // document.removeEventListener('touchmove', this.mo, {passive: false})
    },
    tabclick (num) {
      this.$emit('changetab', num)
    },
    totop () {
      var scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop
        var speed = top / 4
        if (document.body.scrollTop !== 0) {
          document.body.scrollTop -= speed
        } else {
          document.documentElement.scrollTop -= speed
        }
        if (top === 0) {
          clearInterval(scrollToptimer)
        }
      }, 30)
    },
    // moblie点击搜索
    clicksearch () {
      if (!this.intshow) {
        this.intshow = true
        this.bannerbj = true
      }
    },
    intchange () {
      const baseUrl = process.env.API_ROOT
      var searchval = this.searchval
      if (this.cls === 'project') {
        this.axios.post(baseUrl + '/procet/getlist', {token: 'yxD9NyznUkP5cDsi', key: searchval, page: 1}).then((res) => {
          this.$emit('chooserearch', res.data)
          this.bannerbj = false
          document.documentElement.scrollTop = 0
        })
      } else if (this.cls === 'reseach') {
        this.axios.post(baseUrl + '/study/getlist', {token: 'yxD9NyznUkP5cDsi', key: searchval, page: 1}).then((res) => {
          this.$emit('chooserearch', res.data)
          this.bannerbj = false
          document.documentElement.scrollTop = 0
        })
      } else if (this.cls === 'Adver') {
        this.$emit('chooserearch', searchval)
        document.documentElement.scrollTop = 0
      }
      this.intshow = false
    },
    otherweb () {
      var webstr = this.$route.path
      var webstrarr = webstr.split('/')
      // if (this.screenshow) {
      if (webstrarr[1] === 'projectinfo' || webstrarr[1] === 'reseachinfo' || webstrarr[1] === 'trendsinfo') {
        this.bannerbj = true
      }
      if (webstrarr[1] === 'project' || webstrarr[1] === 'reseach' || webstrarr[1] === 'adver') {
        this.is_intshow = true
      }
      if (webstrarr[1] === 'adver' || webstrarr[1] === 'adverinfo') {
        this.bannerbj = true
      }
      // } else {
      this.mbannerdata.map((item, index) => {
        if (item.urlstr !== '' && webstrarr[1].includes(item.urlstr)) {
          item.bol = true
        } else {
          item.bol = false
        }
        if (webstrarr[1] === '' && item.urlstr === '') {
          item.bol = true
        }
      })
      // }
    },
    // banner文字变红背景颜色
    bannerbjfuc (urlstrval) {
      var urlstrarr = urlstrval.split('/')
      this.bannerdata.map((item, index) => {
        if (urlstrval.length === 1 && index === 0) {
          item.bannerbjbol = true
        } else if ((urlstrarr[1] === item.urlstr || urlstrarr[1].indexOf(item.urlstr) !== -1) && index !== 0) {
          item.bannerbjbol = true
        } else {
          item.bannerbjbol = false
        }
      })
    },
    // 超出一屏banner隐藏
    bannerscroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滑动之后的距离
      this.num = scrollTop
      var clientHeightStr = document.documentElement.clientHeight
      clientHeightStr = 0
      if (scrollTop > clientHeightStr) {
        this.bannerbj = true
        this.bannerdis = true // banner二级菜单与文字距离
      } else {
        this.bannerbj = false
        this.bannerdis = false // banner二级菜单与文字距离
        if (this.$route.params.id !== undefined) {
          this.bannerbj = true // 详情页面banner保持透明
        } else if (this.$route.path === '/adver' || this.$route.path === '/adverinfo') {
          this.bannerbj = true // 详情页面banner保持透明
        }
      }
    },
    // moblie样式
    showscreen () {
      if (document.documentElement.clientWidth < 768) {
        this.screenshow = false
      }
    },
    showchilddrawer (e) {
      let num = parseInt(e.target.dataset.idx)
      // if (num === 5) {
      //   this.childrendrawer = true
      //   this.twodrawerdata = this.bannerdata[num].children
      // } else {
      this.value5 = false
      var str = this.mbannerdata[num].urlstr
      this.$router.push({path: '/' + str})
      // }
    },
    twodrawer () {
      this.value5 = false
      this.childrendrawer = false
      let str = event.currentTarget.dataset.childurl
      this.$router.push({path: '/' + str})
    },
    entertwomenu (e) {
      let ids = parseInt(e.target.dataset.ids)
      this.bannerindex = ids
      this.bannerdata.map((item) => {
        if (ids === item.id) {
          item.bol = true
        } else {
          item.bol = false
        }
      })
    },
    leavertwomenu (e) {
      this.bannerdata.map((item) => {
        item.bol = false
      })
    }
  }
}
</script>
<style  scoped>
    li{
        list-style: none;
    }
    .banner{
        width: 100%;
        background-color: #06223c;
        position: relative;
        z-index: 5;
    }
    /* logo部分 */
    .logobox{
      height: 100px;
      display: flex;
      justify-content: flex-start;
      background-color: #fff;
    }
    .bjlogo{
      width: 34.97%;
      height: 100%;
      background-color: #d62c28;
      display: flex;
      align-items: center;
    }
    .bjlogo img{
      margin-left: 57%;
    }
    .logoUl{
      /* width: 65.03%; */
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: #fff;
    }
    .logoUl li{
      display: flex;
      align-items: center;
    }
    .logoUl li img{
      float: left;
      margin: 0 26px 0 50px;
    }
    .logoUl li div{
      float: left;
      font-size: 14px;
      color: #06223a;
    }
    .logoboxp{
      color: #999;
      font-size: 12px;
      line-height: 12px;
    }
    .logoUl li:nth-last-child(1) img{
      width: 80px;
      height: 80px;
      margin:0 0 0 180px;
    }
    /* --- */
    .logocls{
        width: 86px;
        height: 22px;
        margin: 24px 0 15px;
    }
    .bannerbjcls{
        background-color: rgb(0,0,0,.7);
    }
    .othercolor{
        color: #000 !important;
    }
    .banneractive p{
        color: #fff !important;
    }
    .bannercls{
        width: 1200px;
        height: 90px;
        margin: auto;
    }
    .contaner li{
        width: 88px;
        /* height: 100px; */
        float: left;
        margin-right: 44px;
        text-align: center;
        color: #fff;
        position: relative;
        /* padding: 18px 0 15px; */
    }
    .twomenu{
        width: 100%;
        padding: 9px 0;
        text-align: center;
        color: #000;
        background-color:rgba(179,181,187,.5);
        position: absolute;
        /* top: 70px; */
        left: 0;
        bottom: -50px;
    }
    .twomenu1{
      padding: 16px 0 16px 17%;
    }
    .twomenu2{
      padding: 16px 0 16px 4%;
    }
    .twomenu p{
      display: inline;
      font-size: 14px;
      line-height: 14px;
      padding: 5px 30px 5px 0;
    }
    .twomenu p:hover a{
        color: #ff574f !important;
    }
    .ctext{
        font-size: 14px;
        line-height: 90px;
    }
    .etext{
        font-size: 12px;
        line-height: 12px;
        margin: 6px 0;
    }
    .drawerbj{
        background-color: #ededed;
    }
    /* mobile */
    .drawerlogo{
      width: 3rem;
      height: .4rem;
      display: flex;
      /* justify-content: center; */
      margin: .38rem auto .50rem;
    }
    .drawerlogo img{
      width: 1.50rem;
      margin: 0 0.40rem 0 0.46rem;
    }
    .drawercls{
      width: 3.40rem;
      height: 0.78rem;
      /* padding: 0.20rem 0; */
      margin:0 auto 0.28rem;
      color: #333;
      font-size: 0.30rem;
      /* line-height: 0.30rem; */
      border-radius: 0.10rem;
      display: flex;
      align-items: center;
    }
    .bannercolor{
      color: #fff !important;
      background-color: #d62c28;
    }
    .drawerimg{
      width: 0.36rem;
      height: 0.36rem;
      margin: 0 0.40rem 0 0.46rem;
    }
    .searchbox{
      width: 77%;
      margin: 15px 0 19px 30px;
      padding: 0 10px;
      border-radius: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .searchint{
      width: 100%;
      height: 30px;
      text-indent: 10px;
      color: #333;
      outline: none;
      border: none;
    }
    input::-webkit-input-placeholder {
         color: #333;
     }
    .searchimg{
      width: 14px;
      height: 14px;
    }
    .mlogo{
      width: 70px ;
      height: 18px;
      margin: 15px 30px;
    }
    .mnavcls{
      margin: 15px 30px 15px 20px;
    }
    .mnav{
      width: 100%;
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navcls{
      width: 20px;
      height: 20px;
    }
    .top{
      width: 60px;
      height: 60px;
      position: fixed;
      right: 5%;
      bottom: 5%;
      background:url('../../static/img/totop.png') no-repeat;
      background-size: 100% 100%;
    }
</style>
