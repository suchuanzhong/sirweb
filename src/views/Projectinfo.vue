<template>
    <div>
        <Banner  @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <div class="main">
              <div class="main-left" :class="{'m-main':!screenshow}">
                  <!-- <p class="crumb" v-if="screenshow">
                      <span v-for="(item,index) in infodata.navarr" :key="index" @click="blocklist" :data-ids="index">{{item}}</span>
                  </p> -->
                  <div class="info-main" >
                      <p v-if="screenshow" class="title" ref="title">{{infodata.title.slice(0,27)}}<br>{{infodata.title.slice(27)}}</p>
                      <p v-else class="title">{{infodata.title}}</p>
                      <p class="times">
                          <span>{{infodata.time}}</span>
                          <!-- <img v-if="screenshow" @click="shareTo('weixin')" src="../../static/img/weixin.png" alt=""> -->
                          <img v-if="screenshow" @click="shareTo('qq')" src="../../static/img/QQ.png" alt="">
                          <img v-if="screenshow" @click="shareTo('sina')" src="../../static/img/weibo.png" alt="">
                      </p>
                      <img v-if="infodata.video==''" class="img-one" ref="imgone" :src="infodata.imgs" alt="">
                      <video class="img-one"
                          v-else
                          :style="infodata.video!=''?{'margin-top':'5000px'}:''"
                          controls
                          muted
                          autoplay
                          :src="infodata.video"
                          webkit-playsinline playsinline>
                      </video>
                      <div class="introduce" v-if="infodata.video==''">
                          <p class="introduce-title">项目概况</p>
                          <p class="introduce-content" v-for="(item,index) in infodata.body" :key="index"> <span>{{item.textone}}：</span><span class="intoducespan">{{item.texttwo}}</span></p>
                      </div>
                      <div v-html="infodata.newhtml" v-if="infodata.video==''"></div>
                      <div class="other-part" v-if="infodata.video==''">
                          <p class="other-title">{{infodata.destitle}}</p>
                          <p class="main-word" v-for="(item,index) in infodata.desdes" :key="index">{{item}}</p>
                      </div>
                      <div class="other-part" v-if="infodata.video==''">
                          <p class="other-title">{{infodata.gaintitle}}</p>
                          <p class="main-word" v-for="(item,index) in infodata.gaindes" :key="index">{{item}}</p>
                      </div>
                      <p class="more" href="" target="_blank" v-if="screenshow&&!(infodata.linktype==45)" @click="tomore($event)" :data-linktype="infodata.linktype" :data-otherid="infodata.otherid">了解更多></p>
                      <!-- <div class="create" v-if="screenshow">
                          <p>专业集成  携手创造</p>
                          <p>Professional Integration    Create Together</p>
                      </div> -->
                  </div>
              </div>
              <Projectadvlist class="main-right md_hidden sm_hidden" v-if="screenshow" :itemid="this.itemid" requestcls="projectadv" @dealdata="dealchilddata"/>
          </div>
          <div class="footercls">
              <Footer :showBol="screenshow"/>
          </div>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Projectadvlist from '@/components/Projectadvlist'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Projectadvlist},
  data () {
    return {
      screenshow: true, // 屏幕大小显示，
      infodata: [],
      navarr: [],
      itemid: this.$route.params.id,
      is_left: false
    }
  },
  mounted () {
    this.showscreen()
    this.initdata(this.$route.params.id)
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    initdata (urlstr) {
      const baseUrl = process.env.API_ROOT
      // var clsarr = this.$route.params.data
      this.itemid = urlstr
      let word = this.$route.params.word
      let navarr = ['SIR项目>']
      this.axios.post(baseUrl + '/procet/getone', {token: 'yxD9NyznUkP5cDsi', id: urlstr}).then((res) => {
        if (word === '') {
          navarr.push(res.data.title.split('：')[0])
        } else if (word !== undefined) {
          navarr.push(word + '>')
          navarr.push(res.data.title.split('：')[0])
        } else {
          navarr.push(res.data.title.split('：')[0])
        }
        this.navarr = navarr
        res.data.navarr = navarr
        // 初始化标题
        res.data.title = res.data.title
        // 初始化时间
        res.data.time = Unit.myformatter(res.data.time)
        // 初始化video
        res.data.video = res.data.video != null ? Unit.URL + res.data.video : ''
        // 初始化图片
        res.data.imgs = Unit.URL + res.data.imgs
        // 初始化详情
        let bodystr = Unit.TransferString(res.data.body)
        res.data.body = this.stringsplit(bodystr)
        // 初始化项目描述
        res.data.desdes = res.data.desdes != null ? Unit.TransferString(res.data.desdes) : ''
        // 初始化成果描述
        res.data.gaindes = res.data.gaindes != null ? Unit.TransferString(res.data.gaindes) : ''
        this.infodata = res.data
      })
    },
    // 分割项目描述
    stringsplit (data) {
      let newdata = []
      data.map((item, index) => {
        let obj = {}
        obj.textone = item.split('：')[0]
        obj.texttwo = item.split('：')[1]
        newdata.push(obj)
      })
      console.log(newdata)
      return newdata
    },
    // 处理渲染
    dealchilddata (data) {
      this.initdata(data)
      this.itemid = data
      // this.initadv(data)
    },
    // 返回上一页
    blocklist (e) {
      let ids = e.target.dataset.ids
      let paramsobj = {}
      if (this.navarr.length === 3 && ids === 1) {
        paramsobj = {chooseval: this.$route.params.word}
      } else if (ids === 0) {
        paramsobj = {chooseval: ''}
      } else {
        return
      }
      this.$router.push({
        name: 'Project',
        params: paramsobj
      })
    },
    tomore (event) {
      var otherid = event.target.dataset.otherid
      var linktype = event.target.dataset.linktype
      if (linktype === 46) {
        this.initdata(otherid)
        // chrome
        document.body.scrollTop = 0
        // firefox
        document.documentElement.scrollTop = 0
        // safari
        window.pageYOffset = 0
      } else if (linktype === 47) {
        this.$router.push({
          name: 'Reseachinfo',
          params: {id: otherid, word: ''}
        })
      } else if (linktype === 48) {
        this.$router.push({
          name: 'Trendsinfo',
          params: {id: otherid, word: ''}
        })
      }
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
      }
    },
    shareTo (stype) {
      var ftitle = ''
      var flink = ''
      var lk = ''
      // 获取文章标题
      ftitle = this.$refs.title.innerHTML
      // 获取网页中内容的第一张图片
      flink = this.$refs.imgone.src
      if (typeof flink === 'undefined') {
        flink = ''
      }
      // 新浪微博接口的传参
      if (stype === 'sina') {
        window.open('http://service.weibo.com/share/share.php?url=' + document.location.href + '?sharesource=weibo&title=' + ftitle + '&pic=' + lk + '&appkey=2706825840')
      }
      // qq好友接口的传参
      if (stype === 'qq') {
        window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + document.location.href + '?sharesource=qzone&title=' + ftitle + '&pics=' + lk + '&summary=' + ftitle)
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
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .main-left{
        width: 834px;
        margin:0 33px 0  0;
    }
    .main-right{
         margin:70px 0  0;
    }
     .info-main{
        width: 834px;
        color: #666;
        padding: 0 34px 0 0;
        border-right: 1px solid #e1e1e1;
        font-size: 20px;
        margin:auto;
    }
    .crumb{
        font-size: 16px;
        line-height: 16px;
    }
    .title{
        font-size: 28px;
        font-weight: bold;
        color: #000;
        margin: 70px 0 30px;
        text-align: justify;
    }
    .times{
        height:32px;
        font-size: 16px;
        margin: 0;
    }
    .times span{
        line-height: 32px;
        vertical-align: top;
    }
    .times img{
        width: 32px;
        height: 32px;
        margin-left: 15px;
        /* opacity: .5; */
        /* filter: grayscale(100%); */
        /* filter: gray; */
    }
    /* .times img:hover{
      opacity: 1;
      filter: grayscale(0%);
    } */
    .img-one{
        width: 800px;
        height: 400px;
        margin: 28px 0 20px;
    }
    .introduce{
        margin-bottom: 16px;
    }
    .introduce-content{
        font-size: 16px;
        font-weight: bold;
        line-height: 28px;
        color:#666;
        margin: 8px 0 0;
        text-align: justify;
        overflow: hidden;
    }
    .introduce-content span{
      float: left;
    }
    .intoducespan{
      width: 84%;
    }
    .introduce-title{
        font-size: 20px !important;
        line-height: 20px !important;
        margin: -3px 0 19px !important;
        color: #da251c !important;
        font-weight: bold;
        text-align: justify;
    }
    .other-title{
        font-size: 20px ;
        font-weight: bold;
        line-height: 32px ;
        margin: 0 0 16px;
        color: #da251c ;
    }
    .main-word{
        font-size: 16px;
        color: #666;
        line-height: 28px;
        margin:0 0 16px;
        text-align: justify;
    }
    .more{
        font-size: 20px;
        font-weight: bold;
        line-height: 32px;
        color: #666;
        margin: 0 0 16px;
    }
    /* .create{
        width: 100%;
        height: 100px;
        font-size: 20px;
        line-height: 34px;
        padding: 16px 0;
        margin: 28px 0 16px;
        color: #fff;
        text-align: center;
        background-image: url('../../static/img/projectinfo_03.png')
    } */
    .footercls{
        width: 100%;
        background-color: #000;
    }
    /* moblie */
    .m-main{
        width: 100%;
        margin: 63px 0 0;
        padding: 0 30px;
    }
    .m-main .info-main{
        width: auto;
        padding: 0 0 0 0;
        border: none;
        margin:0 0 32px 0;
    }
    .m-main .img-one{
        width: 100%;
        height: 200px;
    }
    .m-main .title{
        font-size: 22px;
        line-height: 30px;
        margin: 22px 0 4px;
        font-weight: normal;
    }
    .m-main .times img{
       width: 28px;
       height: 28px;
       vertical-align: middle;
       margin-left: 14px;
    }
    .m-main .times{
        margin-bottom: 2px;
    }
    .m-main .img-one{
        width: 100%;
        height: 200px;
        margin: 12px 0 9px;
    }
    .m-main .introduce{
      margin-bottom: 12px;
    }
    .m-main .introduce-title{
      font-size: 18px !important;
      margin: -3px 0 10px !important;
    }
    .m-main .introduce-content{
      margin-top: 2px;
      font-weight: normal;
    }
    .m-main .other-title{
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 12px;
    }
</style>
