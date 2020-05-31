<template>
    <div>
        <Banner @chooserearch="chooserearchfuc" cls="Adver"/>
        <div class="professiontop">
            <div class="selectbox">
                <div class="selectcls" @click="changeproffess($event)">
                    <span>{{clsval==''?'类型':clsval}}</span> <span class="three"></span>
                    <div class="selectval" v-if="clsbol">
                        <p v-for="(item,index) in toolsarr[0]" :key="index" :data-val="item.title" :data-ids="item.id">{{item.title}}</p>
                    </div>
                </div>
                <div class="selectcls" @click="addressfuc">
                    <span>{{addressval==''?'地点':addressval}}</span> <span class="three"></span>
                    <div class="selectval" v-if="addressbol">
                        <p v-for="(item,index) in toolsarr[1]" :key="index" :data-val="item.title" :data-ids="item.id">{{item.title}}</p>
                    </div>
                </div>
                <div class="selectcls" @click="selectfuc">
                    <span>{{selectval==''?'职业类型':selectval}}</span> <span class="three"></span>
                    <div class="selectval" v-if="selectbol">
                          <p v-for="(item,index) in toolsarr[2]" :key="index" :data-val="item.title" :data-ids="item.id">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 职位 -->
        <div class="profess">
            <div class="professmain" v-for="(item,index) in professiondata" :key="index" @click="toprofessinfo($event)" :data-idx="item.id">
                <div>
                    <span class="professname">{{item.title}}</span>
                    <span>{{item.money}}</span>
                </div>
                <div>
                    <span>{{item.addresstitle}}</span>
                    <span>{{item.time}}</span>
                </div>
            </div>
        </div>
        <div >
            <Footer :showBol="screenshow"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Unit from '@/unit'
import {mapActions} from 'vuex'
export default {
  components: {Banner, Footer},
  data () {
    return {
      clsbol: false,
      clsval: '', // 类型文本
      clsids: '', // 类型选id
      addressbol: false,
      addressval: '', // 地址文本
      addressids: '', // 地址选id
      selectbol: false,
      selectval: '', // 下拉文字
      selectids: '', // 下拉id
      searchval: '', // 搜索框
      toolsarr: [],
      professiondata: [],
      societydata: [], // 社会招聘
      schooldata: [], // 校园招聘
      screenshow: false
    }
  },
  mounted () {
    this.showscreen()
    this.initcode()
    this.initaxios('')
  },
  methods: {
    ...mapActions([
      'developdatafuc'
    ]),
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
      this.axios.post(baseUrl + '/aboutus/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, type: cls}).then((res) => {
        res.data.map(item => {
          item.time = Unit.myformatter(item.time)
          item.duty = Unit.TransferString(item.duty)
          item.ask = Unit.TransferString(item.ask)
        })
        this.initdata(res.data)
      })
    },
    // 处理请求数据
    initdata (data) {
      if (data.length !== 0 && (typeof data[0].duty) === 'string') {
        data.map((item) => {
          item.duty = item.duty.split('。')
          item.ask = item.ask.split('。')
        })
      }
      this.professiondata = data
    },
    // 切换职业类型
    changeproffess (event) {
      this.clsbol = !this.clsbol
      let val = event.target.dataset.val
      let ids = event.target.dataset.ids
      if (val !== undefined) {
        this.clsval = val
        this.clsids = ids
      }
      this.searchfuc('')
    },
    // 地址筛选
    addressfuc (e) {
      // alert(1)
      this.addressbol = !this.addressbol
      let val = e.target.dataset.val
      let ids = e.target.dataset.ids
      if (val !== undefined) {
        this.addressval = val
        this.addressids = ids
      }
      this.searchfuc('')
    },
    // 类型筛选
    selectfuc (e) {
      this.selectbol = !this.selectbol
      let val = e.target.dataset.val
      let ids = e.target.dataset.ids
      if (val !== undefined) {
        this.selectval = val
        this.selectids = ids
        this.searchfuc('')
      }
    },
    // tools子组件搜索
    chooserearchfuc (data) {
      this.searchfuc(data)
    },
    // 点击搜索
    searchfuc (searchdata) {
      const baseUrl = process.env.API_ROOT
      let searchval = searchdata
      let addressids = this.addressids
      let selectids = this.selectids // 类别id
      let channel = this.clsids
      this.axios.post(baseUrl + '/aboutus/getlist', {token: 'yxD9NyznUkP5cDsi', page: 1, type: selectids, address: addressids, key: searchval, channel: channel}).then((res) => {
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
    // 进入详情
    toprofessinfo (event) {
      let idx = parseInt(event.currentTarget.dataset.idx)
      let infodata = {}
      this.professiondata.map(item => {
        if (item.id === idx) {
          infodata = item
        }
      })
      this.$store.commit('developdatafuc', infodata)
      this.$router.push('/adverinfo')
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
    li{
        list-style: none;
    }
    .professiontop{
      width: 100%;
        padding: 0 30px 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid #eeeeee;
        margin-top: 70px;
    }
    .procls{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }
    .procls li{
        width: 70px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #333;
        border: 1px solid #eee;
    }
    .active{
        border-bottom: 2px solid #da251c !important;
    }
    /* 搜索 */
    .selectbox{
        width: 100%;
        height: 50px;
        border: 1px solid #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow:5px 5px 10px  0 rgba(0, 0, 0,.1);
    }
    .selectcls{
        font-size: 14px;
        position: relative;
        padding: 0 10px;
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
        width: 90px;
        position: absolute;
        top: 35px;
        left: 0;
        background-color: #fff;
        border-radius:0 0 6px 6px;
        box-shadow:0 0 43px 5px rgba(0, 0, 0, .09)
    }
    .selectval p{
        padding:10px ;
        font-size: 14px;
        color: #666;
    }
    .search{
      width: 41%;
        height: 40px;
        border: none;
        outline: none;
        font-size: 16px;
    }
    .searchbtn{
        width: 30px;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .searchbtn img{
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }

    /* 职位 */
    .profess{
        padding: 0 30px;
    }
    .professmain{
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .professmain>div{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 20px;
        color: #333;
    }
    .professname{
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 8px;
    }
</style>
