<template>
    <div>
        <Banner  @istransform="istransform"/>
      <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
        <Bannertext :bannerdata="bannerdata" :showBol="screenshow" />
        <!-- 培训体系 -->
        <div class="clutivate md_part sm_part" :class="{m_clutivate:!screenshow}">
            <div class="titlebox" :class="{m_titlebox:!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>我们的培训体系</p>
            </div>
            <ul class="clutivatemain md_part sm_part" :class="{m_clutivatemain:!screenshow}">
                <li v-for="(item,index) in clutivatedata" :key="index">
                    <img :src="item.imgstr" alt="">
                    <p class="c_title" >{{item.c_title}}</p>
                    <p class="contant" >{{item.contant.substring(0,10)}}<br>{{item.contant.substring(10)}}</p>
                </li>
            </ul>
        </div>
        <!-- 职业 -->
        <div class="post md_part sm_part" :class="{m_main:!screenshow}">
            <div class="postbox" >
              <div class="postmain">
                <div class="postdes" >
                  <p class="posttitle">管理型人才发展通道</p>
                  <p class="posttext">管理是指组织中的管理者，通过实施计划、组织、领导、协调、控制等职能来协调他人的活动，使别人同自己一起实现既定目标的活动过程。</p>
                  <img src="../../static/img/righticon.png" alt="" v-if="screenshow">
                </div>
                <div class="postdes2">
                  <p>05.高层管理者</p>
                  <p>04.中层管理者</p>
                  <p>03.基层管理者</p>
                  <p>02.独立贡献者</p>
                  <p>01.初做者</p>
                </div>
              </div>
            </div>
            <div class="postbox postbox1">
              <div class="postmain" >
                <div class="postdes">
                  <p class="posttitle">专业人才发展通道</p>
                  <p class="posttext">专业型人才是指在机构、企业、社会中，具有一门特定专业技术，受到权威部门专业技能认证，并对机构、企业、社会的发展做出贡献的人。</p>
                  <img src="../../static/img/righticon.png" alt="" v-if="screenshow">
                </div>
                <div class="postdes2">
                  <p>05.权威</p>
                  <p>04.资深专家</p>
                  <p>03.专业骨干</p>
                  <p>02.独立贡献者</p>
                  <p>01.初做者</p>
                </div>
              </div>
            </div>
        </div>
        <!-- <div><img  src="../../static/img/joinus3_01.png" alt=""></div> -->
        <!-- 职位信息 -->
        <div class="titlebox" :class="{m_titlebox:!screenshow}" >
            <div class="com_dot" v-if="screenshow"><i></i><i></i><i></i></div>
            <p v-if="!screenshow" @click="toadver">点击查看招聘信息</p>
            <p v-else>加入我们</p>
          </div>
        <div class="profession md_part sm_part" v-if="screenshow">
            <div class="professiontop">
                <ul class="procls">
                    <li v-for="(item,index) in toolsarr[0]" :key="index" :class="{active:item.bol}" @click="changeproffess($event)" :data-ids="item.id" :data-idx="index"><p>{{item.title}}</p></li>
                </ul>
                <div class="searchbox">
                    <div class="selectcls" @click="addressfuc" @mouseleave="blursdd">
                        <span>{{addressval==''?'地点':addressval}}</span> <span class="three"></span>
                        <div class="selectval" v-if="addressbol" :style="addressbol?{'border-top':'1px solid #d62c28'}:''">
                            <p v-for="(item,index) in toolsarr[1]" :key="index" :data-val="item.title" :data-ids="item.id">{{item.title}}</p>
                        </div>
                    </div>
                    <div class="selectcls" @click="selectfuc" @mouseleave="blurselect">
                        <span>{{selectval==''?'职业类型':selectval}}</span><span class="three"></span>
                        <div class="selectval" v-if="selectbol" :style="selectbol?{'border-top':'1px solid #d62c28'}:''">
                             <p v-for="(item,index) in toolsarr[2]" :key="index" :data-val="item.title" :data-ids="item.id">{{item.title}}</p>
                        </div>
                    </div>
                    <input class="search" type="text" v-model="searchval">
                    <div class="searchbtn" @click="searchfuc">
                        <img src="../../static/img/search1.png" alt="">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
            <div class="proffessionmain md_part sm_part">
                <div class="proffessbox" v-for="(item,index) in professiondata" :key="index" :data-idx="index" @click="expandfuc($event)">
                    <div class="proffesstop" :style="expandnum==index?{'padding': '30px 0','border-bottom':'1px solid #e1e1e1'}:''">
                        <span class="title">{{item.title}}</span>
                        <span class="proffession-text">{{item.typetitle}}</span>
                        <span class="proffession-text">地点：{{item.addresstitle}}</span>
                        <span class="proffession-text">薪资：{{item.money}}</span>
                        <span class="proffession-text">{{item.time}}</span>
                        <img src="../../static/img/down.png" alt="" :style="expandnum==index?{transform: 'rotate(0deg)'}:''">
                    </div>
                    <div class="postcontant" v-if="expandnum==index">
                        <span class="post-title">岗位职责：</span>
                        <div class="post-list">
                            <p class="post-text" v-for="(item,index) in item.duty" :key="index">{{item}}</p>
                        </div>
                    </div>
                    <div class="procontant" v-if="expandnum==index">
                        <span class="post-title">任职要求：</span>
                        <div class="post-list">
                            <p class="post-text" v-for="(item,index) in item.ask" :key="index">{{item}}</p>
                        </div>
                    </div>
                </div>
        </div>
            <div class="contact" >
                <span>联系人：范女士</span>
                <span>联系电话：18011572286</span>
                <span>邮箱：hr@sirchina.cn</span>
                <span>地址：成都市武侯区航空路丰德国际广场D3座7楼</span>
            </div>
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
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Bannertext},
  data () {
    return {
      bannerdata: {textone: 'JOIN US', texttwo: '', urlstr: '../../static/img/joinusbj_02.jpg'},
      addressbol: false,
      addressval: '', // 地址文本
      addressids: '', // 地址选id
      selectbol: false,
      selectval: '', // 下拉文字
      selectids: '', // 下拉id
      searchval: '', // 搜索框
      clutivatedata: [
        {id: 0, imgstr: './static/img/joinusicon1.jpg', c_title: '基础员工培训', contantlabel: '', contant: '对员工进行有目的、有计划的培养和训练'},
        {id: 1, imgstr: './static/img/joinusicon2.png', c_title: '专业骨干队伍培训', contantlabel: '', contant: '栋梁计划:对团队中层梯队的晋升培养制度'},
        {id: 2, imgstr: './static/img/joinusicon3.png', c_title: '中高层管理干部培训', contantlabel: '', contant: '先锋计划:对团队高层管理者的晋升培养制度'},
        {id: 3, imgstr: './static/img/joinusicon4.jpg', c_title: '后备人才队伍培训', contantlabel: '', contant: '精英计划:对团队中有潜质员工的晋升培养制度'}
      ],
      toolsarr: [],
      professiondata: '',
      societydata: [], // 社会招聘
      schooldata: [], // 校园招聘
      expandnum: 0, // 招聘展开编号
      screenshow: true, // 屏幕大小显示，
      proclsnum: 0,
      is_left: false
    }
  },
  mounted () {
    this.showscreen()
    this.initcode()
    this.initaxios('')
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    // 初始编码
    initcode () {
      const baseUrl = process.env.API_ROOT
      // 招聘渠道
      let p1 = new Promise((resolve, reject) => {
        this.axios.post(baseUrl + '/dict/getlist', {token: 'yxD9NyznUkP5cDsi', sid: 21}).then((res) => {
          res.data.map((item, index) => {
            item.num = index
            item.bol = false
          })
          resolve(res.data)
        })
      })
      // 工作地点
      let p2 = new Promise((resolve, reject) => {
        this.axios.post(baseUrl + '/dict/getlist', {token: 'yxD9NyznUkP5cDsi', sid: 62}).then((res) => {
          resolve(res.data)
        })
      })
      // 岗位类别
      let p3 = new Promise((resolve, reject) => {
        this.axios.post(baseUrl + '/dict/getlist', {token: 'yxD9NyznUkP5cDsi', sid: 24}).then((res) => {
          res.data.map((item, index) => {
            item.bol = false
          })
          resolve(res.data)
        })
      })
      Promise.all([p1, p2, p3]).then((rest) => {
        this.toolsarr = rest
      })
    },
    // 初次数据
    initaxios (cls) {
      const baseUrl = process.env.API_ROOT
      this.proclsnum = cls
      this.axios.post(baseUrl + '/aboutus/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, type: cls}).then((res) => {
        res.data.map(item => {
          item.time = Unit.myformatter(item.time)
          item.duty = Unit.TransferString(item.duty)
          item.ask = Unit.TransferString(item.ask)
        })
        this.initdata(res.data)
      })
    },
    // 地址筛选
    addressfuc (e) {
      this.addressbol = !this.addressbol
      let val = e.target.dataset.val
      let ids = e.target.dataset.ids
      if (val !== undefined) {
        this.addressval = val
        this.addressids = ids
      }
    },
    // 筛选
    selectfuc (e) {
      this.selectbol = !this.selectbol
      let val = e.target.dataset.val
      let ids = e.target.dataset.ids
      if (val !== undefined) {
        this.selectval = val
        this.selectids = ids
      }
    },
    blurselect () {
      console.log(1)
      this.selectbol = false
    },
    blursdd () {
      this.addressbol = false
    },
    searchfuc () {
      const baseUrl = process.env.API_ROOT
      let searchval = this.searchval
      let addressids = this.addressids
      let selectids = this.selectids // 类别id
      this.axios.post(baseUrl + '/aboutus/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, type: selectids, address: addressids, key: searchval}).then((res) => {
        console.log('res', res.data.length)
        if (res.data.length !== 0) {
          res.data.map(item => {
            item.time = Unit.myformatter(item.time)
            item.duty = Unit.TransferString(item.duty)
            item.ask = Unit.TransferString(item.ask)
          })
        }
        this.initdata(res.data)
        this.toolsarr[0].map((item) => {
          item.bol = false
        })
      })
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
    },
    initdata (data) {
      if (data.length !== 0 && (typeof data[0].duty) === 'string') {
        console.log('data', data)
        data.map((item) => {
          item.duty = item.duty.split('。')
          item.ask = item.ask.split('。')
        })
      }
      this.professiondata = data
    },
    // 是否展开
    expandfuc (event) {
      var num = event.currentTarget.dataset.idx
      this.expandnum = num
    },
    // 切换招聘类型
    changeproffess (event) {
      var num = parseInt(event.currentTarget.dataset.idx)
      var ids = parseInt(event.currentTarget.dataset.ids)
      this.toolsarr[0].map((item) => {
        if (item.num === num) {
          item.bol = true
        } else {
          item.bol = false
        }
      })
      this.initchange(ids)
      // num === 0 ? this.initdata(this.societydata) : this.initdata(this.schooldata)
    },
    // 招聘切换类型init
    initchange (cls) {
      const baseUrl = process.env.API_ROOT
      this.proclsnum = cls
      this.axios.post(baseUrl + '/aboutus/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, channel: cls}).then((res) => {
        res.data.map(item => {
          item.time = Unit.myformatter(item.time)
          item.duty = Unit.TransferString(item.duty)
          item.ask = Unit.TransferString(item.ask)
        })
        this.initdata(res.data)
      })
    },
    // 手机端进入招聘列表
    toadver () {
      this.$router.push('/adver')
    }
  }
}
</script>
<style scoped>
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
    li{
      list-style: none;
    }
    .titlebox{
      font-size: 24px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 70px;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:60px auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    /* 体系 */
    .clutivate{
        width: 1200px;
        margin: auto;
        text-align: center;
    }
    .clutivatemain{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .numtips{
        display: inline-block;
        width: 44px;
        height: 44px;
        font-size: 18px;
        line-height: 44px;
        color: #d3d3d3;
        border:1px solid #eeeeef;
        border-radius: 50%;
        margin: 0 20px 30px;
        font-family: Arial;
    }
    .c_title{
        font-size: 16px;
        line-height: 16px;
        color: #333;
        font-weight: bold;
        margin: 20px 0 16px;
    }
    .contant{
        font-size: 14px;
        line-height: 22px;
        color:#666;
        text-align: center;
    }
    .clutivatemain li{
        width:25%;
        padding: 0 48px;
    }
    .clutivatemain li:nth-child(1){
        padding: 0 37px;
    }
    /* 职位 */
    .post{
        width: 100%;
        height: 420px;
        margin: 80px auto 0;
        display: flex;
        justify-content: flex-start;
        color: #fff;
    }
    .postbox{
        width:50%;
        background-color: #06223c;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .postbox1{
        width:50%;
        padding: 0 0 0 112px;
        background-color: #dd342c;
        justify-content: flex-start;
    }
    .postmain{
      width: 600px;
      float: right;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .postdes{
      width: 42%;
      margin-right: 112px;
    }
    .posttitle{
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 36px;
    }
    .posttext{
        font-size: 14px;
        line-height: 26px;
        text-align: left;
    }
    .postdes2 p{
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 30px;
    }
    .postdes2 p:nth-last-child(1){
      margin-bottom: 0;
    }
    .postdes2 img{
      width: 16px;
      height: 8px;
      transform: rotate(-90deg);
      margin: 15px 0;
    }
    .postdes img{
      float: right;
    }
    /* 加入我们 */
    /* 职业 */
    .profession{
        width:1200px;
        /* padding: 120px 0 0 ; */
        margin: auto;
    }
    .professiontop{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .procls{
        display: flex;
        justify-content: flex-start;
        border-radius: 6px;
        border: 1px solid #ccc;
        overflow: hidden;
    }
    .procls li{
        width: 144px;
        height: 48px;
        font-size: 18px;
        line-height: 48px;
        /* border-radius: 6px; */
        text-align: center;
        color: #333;
        /* border: 1px solid #eeeeee; */
    }
    .procls li:nth-child(1){
        border-right: 1px solid #ccc;
    }
    .procls li:hover{
      cursor: pointer;
    }
    .active{
        background-color: #da251c !important;
        color: #fff !important;
    }
    /* 搜索 */
    .searchbox{
        width: 60.33333%;
        height: 48px;
        border: 1px solid #ccc;
        border-radius: 6px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .searchbox:hover{
        border: 1px solid #da251c;
    }
    .selectcls{
        width: 150px;
        height:48px;
        padding:0 20px ;
        font-size: 16px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-right: 1px solid #e1e1e1;
    }
    .three{
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color:#333 transparent transparent transparent;
        vertical-align: middle;
    }
    .selectval{
        width: 150px;
        position: absolute;
        top: 47px;
        left: 0;
        padding-top: 10px;
        background-color: #fff;
        border-radius:0 0 6px 6px;
        box-shadow:0 0 43px 5px rgba(0, 0, 0, .09)
    }
    .selectval p{
        padding:10px 30px;
        font-size: 14px;
        color: #666;
    }
    .selectval p:hover{
      background-color: #f5f5f5;
    }
    .search{
        width: 330px;
        height: 30px;
        border: none;
        outline: none;
        font-size: 18px;
        text-indent: 20px;
    }
    .searchbtn{
        width: 92px;
        height: 48px;
        background-color: #da251c;
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 48px;
        border-radius:0 6px 6px 0;
    }
    .searchbtn:hover,.selectcls:hover,.proffesstop img:hover{
      cursor: pointer;
    }
    .searchbtn img{
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
    /* 招聘详情     */
    .proffessionmain{
        width: 1200px;
        margin: auto;
    }
    .proffessbox:hover{
      box-shadow: 6px 10px 20px  rgba(221,221,221,.75);
    }
    .proffessbox:hover .proffesstop{
      padding:  30px 0;
    }
    .proffesstop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 36px 0 13px;
        font-size: 18px;
        line-height: 24px;
        color :#333;
        /* border: 1px solid #000; */
    }
    .title{
         display: inline-block;
        width: 16.66666%;
        padding-left: 20px;
    }
    .proffession-text{
        display: inline-block;
        width: 16.66666%;
        text-align: center;
    }
    .proffesstop img{
      width: 12px;
      height: 6px;
      margin-right: 20px;
      transform: rotate(270deg)
    }
    .postcontant{
        display: flex;
        justify-content: flex-start;
        line-height: 34px;
        margin-top: 30px;
        color: #999;
    }
    .procontant{
        display: flex;
        justify-content: flex-start;
        line-height: 34px;
        color: #999;
    }
    .post-list{
        width:81%;
        padding: 0 0 30px 50px;
    }
    .post-title{
        font-size: 14px;
        text-indent: 20px;
    }
    .post-text{
        margin:0;
        font-size: 14px;
        line-height: 28px;
    }
    .contact{
       padding:34px 0 100px;
       font-size: 18px;
       line-height: 18px;
       color: #333;
       display: flex;
       justify-content: space-between;
    }
     .more{
        height: 80px;
        font-size: 22px;
        text-align: center;
        line-height: 80px;
        color: #666;
        background-color: #ececec;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
    /* mpblie */
    .m_titlebox{
      padding: 20px 30px 0;
      margin:0 auto 20px;
      font-size: 16px;
      text-align: center;
    }
    .m_titlebox p{
      font-size: 18px;
      line-height: 18px;
    }
    .m_titlebox .com_dot{
      margin:20px auto;
    }
    /* 培训体系 */
    .m_clutivate{
      width: 100%;
      padding: 0 30px;
    }
    .m_clutivatemain{
      width: 100%;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .m_clutivate li{
      width: 45%;
      padding: 0 !important;
      margin-bottom: 20px;;
    }
    .m_clutivatemain .c_title{
      margin: 15px 0 16px;
    }
    .m_clutivate .contant{
      padding: 1px;
      /* text-align: left; */
    }
    .m_main{
        width: 100% ;
        height: auto;
        margin: 0;
        flex-wrap: wrap;
        text-align: center;
    }
    .m_main .postbox{
      width:100%;
        padding: 0;
    }
    .m_main .postmain{
        padding:50px 30px 32px;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
    }
    .m_main .postdes{
      width: 52%;
      margin-right: 0;
    }
    .m_main .posttitle{
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 22px;
    }
    .m_main .posttext{
      text-indent: 20px;
      text-align: justify;
      line-height: 22px;
    }
    .m_main .postdes2{
      text-align: left;
    }
    .m_main .postdes2 p{
      font-size: 14px;
      line-height: 14px;
      margin-bottom:18px;
      /* margin-top: ; */
    }
</style>
