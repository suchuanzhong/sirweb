<template>
    <div>
        <Banner  @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <div class="main">
              <div class="main-left" :class="{'m-main':!screenshow}">
                  <!-- <p class="crumb" v-if="screenshow"><span v-for="(item,index) in infodata.navarr" :key="index" @click="blocklist" :data-ids="index">{{item}}</span></p> -->
                  <div class="info-main">
                      <p v-if="screenshow" class="title" ref="title">{{infodata.title.slice(0,27)}}<br>{{infodata.title.slice(27)}}</p>
                      <p v-else class="title">{{infodata.title}}</p>
                      <div class="times">
                          <span class="author">{{infodata.author}}</span>
                          <span class="time">{{infodata.time}}</span><br v-if="!screenshow">
                          <span class="tips" v-for="(item,idx) in infodata.newlabel" :key="idx">{{item}}</span>
                          <div class="tipsimg" v-if="screenshow">
                              <!-- <img @click="shareTo('weixin')" src="../../static/img/weixin.png" alt=""> -->
                              <img @click="shareTo('qq')" src="../../static/img/QQ.png" alt="">
                              <img @click="shareTo('sina')" src="../../static/img/weibo.png" alt="">
                          </div>
                      </div>
                      <p class="foreword-one">{{infodata.des}}</p>
                      <!-- <video class="img-one"
                          v-if="infodata.video!=''"
                          controls
                          muted
                          autoplay
                          :src="infodata.video"
                          webkit-playsinline playsinline>
                      </video>
                      <img v-else class="img-one" ref="img-one" :src="infodata.imgs" alt=""> -->
                      <img class="img-one" ref="imgone" :src="infodata.imgs" alt="" v-if="infodata.imgs!=undefined">
                      <div v-html="infodata.newhtml"></div>
                  </div>
              </div>
              <Advlist class="main-right md_hidden sm_hidden" :advdata="advdata" :showBol="screenshow" requestcls="reseachadv" @dealdata="dealchilddata"/>
          </div>
          <div class="footercls" v-if="infodata.length!=0">
              <Footer :showBol="screenshow"/>
          </div>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Advlist from '@/components/Advlist'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer, Advlist},
  data () {
    return {
      advdata: [],
      infodata: [],
      navarr: [],
      screenshow: true, // 屏幕大小显示,
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
    initadv (itemid) {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/study/getone', {token: 'yxD9NyznUkP5cDsi', id: itemid, limit: 3}).then((res) => {
        res.data.lists.map((item) => {
          item.imgs = Unit.URL + item.imgs
        })
        this.advdata = res.data.lists
      })
    },
    initdata (urlstr) {
      const baseUrl = process.env.API_ROOT
      let word = this.$route.params.word
      let navarr = ['SIR研究>']
      this.initadv(urlstr)
      this.axios.post(baseUrl + '/study/getone', {token: 'yxD9NyznUkP5cDsi', id: urlstr}).then((res) => {
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
        res.data.title = res.data.title.substring(0, 60)
        // 初始化作者
        res.data.author = '作者：' + res.data.author
        // 初始化时间
        res.data.time = Unit.myformatter(res.data.time)
        // 初始化标签
        res.data.newlabel = res.data.label.split('-')
        // 初始化前言
        res.data.des = res.data.des != null ? res.data.des.substring(0, 120) : ''
        // 初始化图片
        res.data.imgs = Unit.URL + res.data.imgs
        // 初始化body
        let bodyarr = JSON.parse(res.data.body)
        bodyarr.map((item) => {
          if (item.type === 34) {
            res.data.imgs = undefined
          }
        })
        res.data.newhtml = this.initbody(bodyarr)
        this.infodata = res.data
      })
    },
    // 处理渲染
    dealchilddata (data) {
      this.initdata(data)
      this.initadv(data)
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
        name: 'Reseach',
        params: paramsobj
      })
    },
    // 初始化模板
    initbody (data) {
      var allstr = ''
      data.map((item, idx) => {
        var temp = ''
        if (item.type === 38) {
          item.body = Unit.URL + item.body
        }
        switch (item.type) {
          // 报告
          case 33:
            temp = '<img style="width: 100%;margin: 6px 0 14px;" src="' + Unit.URL + item.body + '" alt="">'
            break
          // 视频
          case 34:
            temp = this.screenshow ? '<video style=" width: 800px;height: 500px;margin: 15px 0 20px;" webkit-playsinline playsinline muted autoplay controls src=' + Unit.URL + item.body + ' ></video>' : '<video style=" width: 100%;margin: 15px 0 20px;" webkit-playsinline playsinline muted autoplay controls src=' + Unit.URL + item.body + ' ></video>'
            break
          // 正文
          case 35:
            temp = this.initmainword(item.body)
            break
          // 正文一级标题
          case 36:
            temp = this.screenshow ? '<p style="font-size: 20px ;font-weight: bold;line-height: 32px ;margin: 0 0 16px;color: #da251c ;">' + item.body + '</p>' : '<p style="font-size: 18px ;font-weight: bold;line-height: 30px ;margin: 0 0 6px;color: #da251c ;">' + item.body + '</p>'
            break
          // 正文二级标题
          case 37:
            temp = this.screenshow ? '<p style="font-size: 18px ;font-weight: bold;line-height: 30px ;margin: 0 0 16px;color: #333 ;">' + item.body + '</p>' : '<p style="font-size: 16px ;font-weight: bold;line-height: 28px ;margin: 0 0 6px;color: #333 ;">' + item.body + '</p>'
            break
          // 正文插图
          case 38:
            temp = this.screenshow ? '<img style="display:block;width: 600px;margin: 6px auto 22px;" src="' + item.body + '" alt="">' : '<img style="width: 100%;margin: 6px 0 4px;" src="' + item.body + '" alt="">'
            break
          // 图说
          case 39:
            temp = this.screenshow ? '<p style="font-size: 12px;line-height: 24px;color: #999;text-align: center;margin: 0 0 16px;">' + item.body + '</p>' : '<p style="font-size: 12px;line-height: 24px;color: #999;text-align: center;margin: 0 0 6px;">' + item.body + '</p>'
            break
        }
        allstr += temp
      })
      return allstr
    },
    // 处理正文
    initmainword (bodystr) {
      var infosrr = Unit.TransferString(bodystr)
      let infotemp = ''
      if (this.screenshow) {
        infosrr.map(item => {
          infotemp += `<p style="font-size: 16px;color: #666;line-height: 28px;margin: 0 0 16px;text-align: justify;">${item}</p>`
        })
      } else {
        infosrr.map(item => {
          infotemp += `<p style="font-size: 16px;color: #666;line-height: 28px;margin: 0 0 6px;text-align: justify;">${item}</p>`
        })
      }
      return infotemp
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
      // console.log(ftitle,flink)
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
        padding:0 34px 0 0;
        color: #666;
         border-right: 1px solid #e1e1e1;
        font-size: 20px;
        margin:0 auto 60px;
    }
    .crumb{
        font-size: 16px;
    }
    .title{
        font-size: 28px;
        font-weight: bold;
        color: #000;
        margin: 70px 0 30px;
        text-align: justify;
    }
    .times{
        height:28px;
        font-size: 16px;
        margin-bottom: 21px;
    }
    .times span{
        line-height: 28px;
        vertical-align: top;
        margin-right: 15px;
    }
    .author,.time{
        font-size: 16px;
        line-height: 28px;
        vertical-align: top;
        margin-right: 15px;
    }
    .tips{
        display: inline-block;
        width:60px;
        height: 30px;
        border-radius: 6px;
        border:1px solid #333;
        color: #333;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
    }
    .tipsimg{
        float: right;
    }
    .tipsimg img{
        width: 32px;
        height: 32px;
        margin-left: 15px;
        /* filter: grayscale(200%); */
        /* opacity: .5; */
        /* filter: gray; */
    }
    /* .tipsimg img:hover{
      opacity: 1;
      filter: grayscale(0%);
    } */
    .foreword-one{
        font-size: 14px;
        color: #999;
        line-height: 30px;
        margin: 0 0 10px 0;
        text-align: justify;
    }
    .main-word{
        font-size: 16px;
        color: #666;
        line-height: 28px;
        margin: 0 0 16px;
        text-align: justify;
    }
    .img-one{
      display: block;
        width: 600px;
        height: 400px;
        margin: 15px auto 20px;
    }
    .other-part{
        font-size: 20px;
        line-height: 32px;
        color: #666;
    }
    .other-title{
        font-size: 20px ;
        font-weight: bold;
        line-height: 32px ;
        margin: 0 0 16px;
        color: #da251c ;
    }
    .other-title-two{
        font-size: 18px ;
        font-weight: bold;
        line-height: 30px ;
        margin: 0 0 16px;
        color: #333 ;
    }
    .img-content{
        width: 100%;
        margin: 6px 0 14px;
    }
    .img-text{
        font-size: 12px;
        line-height: 24px;
        color: #999;
        text-align: center;
        margin: 0 0 16px;
    }
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
    .m-main .title{
        font-size: 22px;
        line-height: 30px;
        margin: 22px 0 4px;
        font-weight: normal;
         text-align: justify;
    }
    .m-main .tips{
        width: 50px;
        height: 24px;
        line-height: 22px;
        font-size: 14px;
        vertical-align: unset;
        margin-top: 10px;
    }
    .m-main .times{
        height: auto;
        margin-bottom: 2px;
    }
    .m-main .times div{
        width: 100%;
        float: inherit;
    }
    .m-main .times .tipsimg{
        float: left;
    }
    .m-main .times span{
        margin-right: 6px;
    }
    .m-main .info-main{
        width: auto;
        padding: 0;
        border: none;
        margin:0 0 32px 0;
    }
    .m-main .img-one{
        width: 100%;
        height: 200px;
        margin: 3px 0 4px;
    }
    .m-main .foreword-one{
      line-height: 24px;
        margin: 13px 0 10px 0;
    }
</style>
