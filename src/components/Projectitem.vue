<template>
    <div>
        <ul class="main md_part sm_part" :class="{m_main:!showBol}">
            <li v-for="(item,index) in projectdata" :key="index" :data-idx="item.id" @click="toinfo($event)">
                <img :src="item.imgs" alt="">
                <div v-if="item.video!=null" class="playbox"><span class="rightthree"></span></div>
                <div class="projectmask" :style="!showBol?{'height':250/4+'px'}:{'height':400/5.714+'px'}">
                    <p class="title">{{item.title.split('：')[0].substring(0,16)}}</p>
                    <p>{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,24):''}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['showBol', 'projectdata', 'requestcls', 'toolsdata', 'word'],
  data () {
    return {}
  },
  methods: {
    toinfo (event) {
      let ids = event.currentTarget.dataset.idx
      if (this.requestcls === 'project') {
        this.$router.push({
          name: 'Projectinfo',
          params: {id: ids, data: this.toolsdata, word: this.word}
        })
      }
    }
  }
}
</script>
<style scoped>
    .main{
        width: 1200px;
        padding-top: 50px;
        overflow: hidden;
        margin:0 auto 60px;
        display: flex;
        /* justify-content: space-between; */
        justify-content: flex-start;
        flex-wrap: wrap;
    }
     .main li{
        width: 31.5%;
        height:350px;
        margin-bottom: 30px;
        margin-right: 2.75%;
        list-style: none;
        position: relative;
        overflow: hidden;
    }
    .main li:nth-child(3n){
      margin-right: 0;
    }
    .main li:hover{
      cursor: pointer;
    }
    .main li:nth-child(2n){
        float: right;
    }
    .main li img{
        width: 100%;
        height: 280px;
    }
    .playmask{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(0,0,0,.3);
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
    .main li:hover .title{
        color: #da251c;
    }
    .projectmask{
        width: 100%;
        padding:2px 0;
        color: #999;
        font-size: 14px;
        line-height: 14px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: -5px;
    }
    .title{
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 8px;
        color: #333;
        font-weight: bold;
    }
    /* moble */
    .m_main{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 30px;
         margin:0 ;
    }
    .m_main li{
        width: 100%;
        height: 100%;
        margin-bottom: 7px;
        margin-right: 0 !important;
    }
     .m_main li:hover .title{
        color: #333;
    }
    .m_main li img{
        width: 100%;
        height: 200px;
    }
    .m_main .projectmask{
        padding:0 10px;
    }
    .m_main .projectmask p:nth-child(2){
      width: 100%;
      overflow: hidden;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .m_main .title{
        font-size: 16px;
        line-height: 16px;
        margin-top: -4px;
        margin-bottom: 7px;
    }
</style>
