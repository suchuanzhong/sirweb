<template>
    <div>
        <div class="servicelist" :class="{'m_servicelist':!showBol}" :style="{width:Math.round(screenw*0.63058)+'px'}">
          <div :style="{width:countwidth+'px'}"
          v-for="(item, index) in servicedata"
          :key="index"
          :data-ids="item.id"
          class="serviceitem"
          @mouseenter="showinfo($event)"
          @mouseleave="hiddeninfo($event)">
            <a :href="item.urlstr">
              <div class="servicepic">
                <img :src="item.imgsrc" alt="" :style="{height:countwidth+'px'}">
                <div class="mask" v-if="item.bol" :style="{height:countwidth+'px'}">
                  <p>查看详情</p>
                </div>
              </div>
              <i v-if="!item.bol&&showBol" class="line"></i>
              <p class="servicetitle">{{item.text}}</p>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['showBol', 'screenw'],
  data () {
    return {
      servicedata: [
        {id: 0, text: '咨询顾问', imgsrc: './static/img/01.jpg', bol: false, urlstr: '/service#0'},
        {id: 1, text: '规划评审', imgsrc: './static/img/02.jpg', bol: false, urlstr: '/service#1'},
        {id: 3, text: '品牌招商', imgsrc: './static/img/03.jpg', bol: false, urlstr: '/service#3'},
        {id: 5, text: 'IP场景打造', imgsrc: './static/img/04.jpg', bol: false, urlstr: '/service#5'},
        {id: 4, text: '经营管理', imgsrc: './static/img/05.jpg', bol: false, urlstr: '/service#4'},
        {id: 2, text: '整合营销', imgsrc: './static/img/06.jpg', bol: false, urlstr: '/service#2'},
        {id: 6, text: '资产运营', imgsrc: './static/img/07.jpg', bol: false, urlstr: '/service#6'},
        {id: 7, text: '金融服务', imgsrc: './static/img/08.jpg', bol: false, urlstr: '/service#7'}
      ],
      screenWidth: 0,
      screenHeight: document.documentElement.clientHeight,
      itemHeight: ''
    }
  },
  computed: {
    countwidth () {
      return Math.round(this.screenw * 0.63058 * 0.2)
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let sheight = document.querySelector('.serviceitem').clientHeight
      this.itemHeight = sheight * 2 + 40
    },
    showinfo (event) {
      this.servicedata.map(item => {
        // console.log(event.currentTarget.dataset.ids)
        // item.children.map(childrenitem => {
        if (parseInt(event.currentTarget.dataset.ids) === item.id) {
          item.bol = true
        } else {
          item.bol = false
        }
        // })
      })
    },
    hiddeninfo (e) {
      this.servicedata.map(item => {
        // item.children.map(childrenitem => {
        item.bol = false
        // })
      })
    }
  }
}
</script>
<style scoped>
    .servicelist{
      width: 1200px;
      /* overflow: hidden; */
       margin: auto;
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
    }
    .serviceitem{
       width: 240px;
       /* float: left; */
       margin:0 10px 50px 0;
       /* margin:0 80px 50px 0; */
       position: relative;
    }
    .serviceitem:nth-child(4n){
      margin: 0;
    }
    .serviceitem img{
      width: 100%;
      height: 240px;
    }
    .mask{
      width: 100%;
      height: 240px;
      position: absolute;
      top: 0;
      background-color: rgba(214, 44, 40, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #fff;
    }
    .servicetitle{
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      margin: 20px 0 0 20px;
    }
    .line{
      display: block;
      width: 4px;
      height: 40px;background-color: #d6282c;
      position: absolute;
      z-index: 2;
      margin: -30px 0 0 20px;
    }
    /* moblie */
    .m_servicelist{
      width: 100% !important;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .m_servicelist .serviceitem{
      width:47% !important;
      /* height: 120px; */
      margin: 0 0 17px 0;
    }
    .m_servicelist .serviceitem img{
      width:100%;
      height: 150px !important;
    }
    .m_servicelist .mask{
      width: 100%;
      height: 150px !important;
    }
    .m_servicelist .servicetitle{
      font-size: 14px;
      margin: 0;
      line-height: 20px;
      font-weight: normal;
      text-align: center;
    }
    /* .servicelist{
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
    }
    .serviceitem{
       width: 280px;
    }
    .servicepic{
      width: 100%;
      overflow: hidden;
      transition: all ease 0.5s;
    }
    .servicepic img{
      width: 100%;
    }
    .serviceitem:hover{
      cursor: pointer;
    }
    .servicetitle{
        font-size:18px;
        line-height: 18px;
        padding: 16px 0 40px;
        color: #333;
        text-align: center;
    }
    .serviceitem img{
        width: 100%;
    }
    .m_servicelist{
      width: 100% !important;
      padding-bottom: 20px;;
    }
    .m_serviceitem{
        width: 48% !important;
        height: auto !important;
    }
    .m_serviceitem .servicepic{
        width: 100%;
        height: 150px !important;
    }
    .m_serviceitem .servicepic img{
        width: 100%;
        height: 100%;
    }
    .m_pictext{
      position: relative;
      margin: 10px 0;
    }
    .m_servicetitle{
      display: inline-block;
        width: 100%;
        font-size: 14px;
        padding: 8px 0;
        background-color: rgba(0,0,0,.4);
        color: #fff !important;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        z-index: 2;
    } */
</style>
