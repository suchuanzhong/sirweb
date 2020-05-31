<template>
    <div>
        <Banner />
        <div class="main">
            <div class="maintop">
                <p class="advname">{{data.title}}</p>
                <p class="address"><span>{{data.addresstitle}} 丨 {{data.channeltitle}} 丨 {{data.time}}</span> <span class="money">{{data.money}}</span></p>
                <p class="hrname">Hr：范女士&nbsp;&nbsp;Tel：18011572286</p>
                <p class="hrname">E-mail：hr@sirchina.cn</p>
            </div>
            <div class="procontant" >
                <span>岗位职责：</span>
                <div class="prolist">
                    <p v-for="(item,index) in data.duty" :key="index">{{item}}</p>
                </div>
            </div>
            <div class="procontant" >
                <span>任职要求：</span>
                <div class="prolist">
                    <p v-for="(item,index) in data.ask" :key="index">{{item}}</p>
                </div>
            </div>
        </div>
        <div class="footercls">
            <Footer :showBol="screenshow"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Unit from '@/unit'
export default {
  components: {Banner, Footer},
  data () {
    return {
      data: this.$store.state.developdata,
      screenshow: false
    }
  },
  mounted () {
    this.showscreen()
    this.initdata(this.data)
  },
  methods: {
    initdata (data) {
      if ((typeof data.duty) === 'string') {
        data.map((item) => {
          item.time = Unit.myformatter(item.time)
          item.duty = Unit.TransferString(item.duty)
          item.ask = Unit.TransferString(item.ask)
        })
      }
      this.data = data
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
    .main{
        padding:0 30px 20px;
        margin-top: 70px;
        color: #333;
    }
    .maintop{
        padding:20px 20px 17px;
        box-shadow:5px 5px 10px  0 rgba(0, 0, 0,.1);
        border-radius: 3px;
        margin-bottom: 30px;
    }
     .procontant{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        font-size: 14px;
        line-height: 28px;
        margin-bottom: 23px;
        text-align: justify;
    }
    .procontant span{
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 13px;
        font-weight: 600;
    }
    .advname{
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 15px;
    }
    .address{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding-bottom:17px;
        margin-bottom: 17px;
    }
    .address,.hrname{
        font-size: 14px;
        line-height: 20px;
    }
    .money{
        font-size: 14px;
        font-weight: 600;
        color: #da251c;
    }
    .footercls{
        width: 100%;
        background-color: #000;
    }
</style>
