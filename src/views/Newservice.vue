<template>
      <div>
        <Banner @istransform="istransform" @changetab="changetabidx" />
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow" v-if="!screenshow||bannerbol"/>
          <div class="tab" :class="{m_tab:!screenshow}">
            <div class="cont" >
              <p class="title" v-if="screenshow">思睿服务</p>
              <div class="textbox" :class="{m_text:!screenshow}">
                <p class="bordercls" v-for="(item, index) in tabdata" :key="index" :class="{active_border:item.bol}" @click="clicktab(index)">
                  <a v-if="screenshow||item.id!==6||item.id!==1" >{{item.text}}</a>
                  <span v-else >{{item.text}}</span>
                </p>
              </div>
            </div>
            <div class="deal" v-if="screenshow">
              <div class="active" @click="prev">
                <img src="../../static/img/left1.png" alt="">
              </div>
              <div @click="next">
                <img src="../../static/img/right1.png" alt="">
              </div>
            </div>
          </div>
          <!-- 咨询顾问 -->
          <Consultant v-show="tabidx == 0" :showBol="screenshow" :screenw=" Math.round(screenWidth)" :tradewidth="tradewidth"/>
          <!-- 规划评审 -->
          <Planning v-show="tabidx == 1" :showBol="screenshow"/>
          <!-- ip场景 -->
          <Ipandproperty v-show="tabidx == 5" :showBol="screenshow" :screenw=" Math.round(screenWidth)"/>
          <!-- 招商 -->
          <Investment v-show="tabidx == 3" :showBol="screenshow" :screenw=" Math.round(screenWidth)"/>
          <!-- 营销 -->
          <Market v-show="tabidx == 2" :showBol="screenshow" :screenw=" Math.round(screenWidth)"/>
          <!-- 开发管理 -->
          <Manage v-show="tabidx == 4||tabidx == 6" :showBol="screenshow" :screenw=" Math.round(screenWidth)"/>
          <!-- 金融服务 -->
          <Finance v-show="tabidx == 7" :showBol="screenshow" :screenw=" Math.round(screenWidth)"/>
          <Footer :showBol="screenshow"/>
        </div>
      </div>
</template>
<script>
import Banner from '@/components/Banner'
import Bannertext from '@/components/Bannertext'
import Servicetab from '@/components/Servicetab'
import Consultant from '@/components/Consultant'
import Planning from '@/components/Planning'
import Ipandproperty from '@/components/Ipandproperty'
import Market from '@/components/Market'
import Manage from '@/components/Manage'
import Investment from '@/components/Investment'
import Finance from '@/components/Finance'
import Footer from '@/components/Footer'
export default {
  components: {Banner, Bannertext, Footer, Servicetab, Consultant, Planning, Ipandproperty, Investment, Market, Manage, Finance},
  data () {
    return {
      screenshow: true, // 屏幕大小显示，
      bannerdata: {textone: '专业集成 携手创造', texttwo: '', urlstr: './static/img/service_02.jpg'},
      tabidx: 0,
      screenWidth: 0,
      tabdata: [
        {id: 0, herfstr: 'zero', text: '咨询顾问', bol: true},
        {id: 1, herfstr: 'one', text: '规划评审', bol: false},
        {id: 2, herfstr: 'two', text: '整合营销', bol: false},
        {id: 3, herfstr: 'three', text: '品牌招商', bol: false},
        {id: 4, herfstr: 'four', text: '经营管理', bol: false},
        {id: 5, herfstr: 'five', text: 'IP场景打造', bol: false},
        {id: 6, herfstr: 'six', text: '资产运营', bol: false},
        {id: 7, herfstr: 'seven', text: '金融服务', bol: false}
      ],
      idx: 0,
      tradewidth: 0,
      bannerbol: true,
      is_left: false
    }
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      if (val > 1200) {
        this.screenWidth = 1907
      } else {
        this.screenWidth = val
      }
      this.tradewidth = val
      // console.log(this.tradewidth)
    }
  },
  mounted () {
    this.showscreen()
    this.inittabdata()
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    changetabidx (data) {
      this.clicktab(data)
    },
    inittabdata () {
      var hashstr = window.location.hash.substring(1, 2)
      if (hashstr !== '') {
        console.log(hashstr)
        this.clicktab(parseInt(window.location.hash.substring(1, 2)))
      }
    },
    clicktab (num) {
      this.tabdata.map((item, index) => {
        index === num ? item.bol = true : item.bol = false
        this.idx = num
      })
      this.bannerbol = false
      this.tabidx = this.idx
      this.todowmpage(num)
    },
    todowmpage (num) {
      if (num === 6) {
        this.$nextTick(() => {
          document.querySelector('#six').scrollIntoView(true)
        })
      }
      // else if (num === 1) {
      //   this.$nextTick(() => {
      //     document.querySelector('#one').scrollIntoView(true)
      //   })
      // }
    },
    next () {
      if (this.idx === 7) {
        this.idx = 0
      } else {
        this.idx++
      }
      this.tabdata.map((item, index) => {
        index === this.idx ? item.bol = true : item.bol = false
      })
      this.todowmpage(this.idx)
      this.tabidx = this.idx
    },
    prev () {
      if (this.idx === 0) {
        this.idx = 7
      } else {
        this.idx--
      }
      this.tabdata.map((item, index) => {
        index === this.idx ? item.bol = true : item.bol = false
      })
      this.todowmpage(this.idx)
      this.tabidx = this.idx
    },
    showscreen () {
      if (document.documentElement.clientWidth > 1200) {
        this.screenWidth = 1903 // 窗口宽度
      }
      this.tradewidth = document.documentElement.offsetWidth // 窗口宽度
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
        this.screenWidth = document.documentElement.offsetWidth // 窗口宽度
      }
    }
  }
}
</script>
<style scoped>
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
  .tab{
    width: 1200px;
    height: 50px;
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
    /* padding-top: 100px; */
  }
  .cont{
    font-size: 16px;
    color: #666 !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .cont p {
    margin-right: 40px;
  }
  .bordercls {
    border-bottom: 2px solid #fff;
  }
  .bordercls a{
    color: #666 !important;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-right: 77px;
  }
  .textbox{
    /* width: 80%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .active_border{
    border-bottom: 2px solid #d62c28 !important;
  }
  .deal{
    display: flex;
    justify-content: center;
  }
  .deal div{
    width:50px;
    height:50px;
    border: 1px solid #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1px;;
  }
  .active{
    border-top: 1px solid #adadad !important;
  }
  /* moble */
.m_tab{
  width: 100% !important;
  height: auto !important;
  padding: 0 30px;
  margin: 20px auto 0;
   overflow-y: auto;
}
.m_tab .cont p{
  margin: 5px 1.5%;
}
.m_text{
  width: 730px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
}
/* ----- */
</style>>
