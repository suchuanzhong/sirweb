<template>
    <div>
        <div class="itemmain" :class="{m_itemmain:!showBol}" v-for="(item,index) in listdata" :key="index" :data-idx="item.id" @click="toinfo($event)">
            <div class="imgbox">
              <img :src="item.imgs" alt="">
              <div v-if="item.type==31" class="playbox"><span class="rightthree"></span></div>
            </div>
            <div class="itemtext">
                <p>{{item.title.substring(0,60)}}</p>
                <p>{{item.des!=null&&item.des.length>100?item.des.substring(0,100)+"...":item.des}}</p>
                <p class="timestr" :style="requestcls==='trends'?{'margin':'-7px 0 6px','line-height':'18px'}:{}">
                    <span v-for="item in item.newlabel" :key="item">{{item}}</span>
                    {{item.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Listitem',
  props: ['listdata', 'showBol', 'requestcls', 'word'],
  data () {
    return {}
  },
  methods: {
    initdata () {
      // 初始化标签
      this.resdata.map((item, index) => {
        item.newlabel = item.label.split('-')
      })
    },
    toinfo (event) {
      let ids = event.currentTarget.dataset.idx
      if (this.requestcls === 'trends') {
        this.$router.push({
          name: 'Trendsinfo',
          params: {id: ids, word: this.word}
        })
      } else if (this.requestcls === 'reseach') {
        this.$router.push({
          name: 'Reseachinfo',
          params: {id: ids, word: this.word}
        })
      }
    }
  }
}
</script>
<style scoped>
    .itemmain{
        margin-bottom: 60px;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
    }
    .itemmain:hover{
      cursor: pointer;
    }
    .imgbox{
      width: 48%;
      height: 260px;
      position: relative;
    }
    .itemmain img{
        width: 100%;
        height: 100%;
    }
    .itemmain video{
        width: 480px;
        height: 300px;
        float: left;
    }
    .playbox{
        width: 50px;
        height: 50px;
        border: 4px solid #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        z-index: 1;
    }
     .rightthree{
        display: block;
        width:0;
        height:0;
        border-top:15px solid transparent;
        border-bottom:15px solid transparent;
        border-left:20px solid #fff;
        margin:5px 0 0 13px;
    }
    .itemtext{
        width: 57.41%;
        height: 280px;
        padding-right:40px;
        margin-left: 35px;
    }
    .itemtext p:nth-child(1){
        font-size: 20px;
        line-height: 28px;
        color: #000;
        font-weight: bold;
        margin-top: 24px;
    }
    .itemmain:hover .itemtext p:nth-child(1){
        color: #d5281f !important;
    }
    .itemtext p:nth-child(2){
        font-size: 14px;
        line-height: 28px;
        color: #666;
        margin: 14px 0;
         text-align: justify;
    }
    .timestr{
        font-size: 14px;
        color: #333;
        text-align: right;
        margin-top: 40px;
    }
    .timestr span{
        display: block;
        width: 60px;
        height: 30px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
        border: 1px solid #333;
        margin-right: 15px;
        float: left;
    }
    /* moblie */
    .m_itemmain{
        margin-bottom: 0;
        padding: 2px 0 20px;
        flex-wrap: wrap;
    }
    .m_itemmain .imgbox{
        width:100%;
        height:200px;
    }
    .m_itemmain .itemtext{
        width: 100%;
        height: auto;
        padding: 0;
        margin-left: 0;
    }
    .m_itemmain .itemtext p:nth-child(1){
        font-size: 16px;
        line-height: 20px;
        margin-top: 12px;
    }
    .m_itemmain:hover .itemtext p:nth-child(1){
        color:#000 !important;
    }
    .m_itemmain .itemtext p:nth-child(2){
        font-size: 14px;
        line-height: 20px;
        margin: 9px 0 10px;
    }
    .m_itemmain .timestr{
        font-size: 14px;
        margin-top: 11px;
    }
    .m_itemmain .timestr span{
      width: 48px;
      height: 24px;
      line-height: 22px;
      font-size: 14px;
      border-radius: 6px;
    }
</style>
