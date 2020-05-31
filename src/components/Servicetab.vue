<template>
  <div class="tab" :class="{m_tab:!showBol}">
    <div class="cont" >
      <p class="title" v-if="showBol">思睿服务</p>
      <p class="bordercls" v-for="(item, index) in tabdata" :key="index" :class="{active_border:item.bol}" @click="clicktab(index)">{{item.text}}</p>
    </div>
    <div class="deal" v-if="showBol">
      <div class="active" @click="prev">
        <img src="../../static/img/left1.png" alt="">
      </div>
      <div @click="next">
        <img src="../../static/img/right1.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['showBol'],
  data () {
    return {
      tabdata: [
        {id: 0, text: '咨询顾问', bol: false},
        {id: 1, text: '规划评审', bol: false},
        {id: 2, text: 'IP场景打造', bol: false},
        {id: 3, text: '品牌招商', bol: false},
        {id: 4, text: '整合营销', bol: false},
        {id: 5, text: '资产运营', bol: false},
        {id: 6, text: '开发管理', bol: true},
        {id: 7, text: '金融服务', bol: false}
      ],
      idx: 0
    }
  },
  methods: {
    clicktab (num) {
      this.tabdata.map((item, index) => {
        index === num ? item.bol = true : item.bol = false
        this.idx = num
      })
      this.$emit('tabval', this.idx)
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
      this.$emit('tabval', this.idx)
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
      this.$emit('tabval', this.idx)
    }
  }
}
</script>
<style scoped>
  .tab{
    width: 1200px;
    height: 50px;
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
  }
  .cont{
    font-size: 16px;
    color: #666;
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
  .title{
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-right: 77px;
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
}
.m_tab .cont{
  justify-content: space-between;
  flex-wrap: wrap;
}
.m_tab .cont p{
  margin: 5px 2%;
}
/* ----- */
</style>>
