<template>
    <div v-if="showBol">
        <div  class="itemmain" v-for="(item,index) in advdata" :key="index" @click="toinfo($event)" :data-idx="item.id">
            <p class="itemtitle"><span v-if="item.typetitle">SIR{{item.typetitle}}丨</span>{{item.title.length>25?item.title.substring(0,25)+'...':item.title}}</p>
            <img :src="item.imgs" alt="">
            <div v-if="item.type==31" class="playbox"><span class="rightthree"></span></div>
            <p class="itemtext">{{item.des!=null&&item.des.length>32?item.des.substring(0,32)+'...':item.des}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Advlist',
  props: ['advdata', 'showBol', 'requestcls'],
  data () {
    return {}
  },
  methods: {
    toinfo (event) {
      let ids = parseInt(event.currentTarget.dataset.idx)
      if (this.requestcls === 'trends') {
        this.$router.push({
          name: 'Trendsinfo',
          params: {id: ids, word: ''}
        })
      } else if (this.requestcls === 'reseach') {
        this.$router.push({
          name: 'Reseachinfo',
          params: {id: ids, word: ''}
        })
      } else if (this.requestcls === 'trendsadv' || this.requestcls === 'reseachadv') {
        this.$emit('dealdata', ids)
      }
    }
  }
}
</script>
<style scoped>
    .itemmain{
        width: 270px;
       margin-bottom: 30px;
       position: relative;
    }
    .itemmain:hover{
      cursor: pointer;
    }
    .itemmain img{
        width: 270px;
        height: 170px;
        margin: 16px 0 12px 0;
        line-height: 0;
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
    .itemtitle{
        font-size: 18px;
        line-height: 22px;
        color: #000;
        font-weight: bold;
    }
    .itemtitle span{
        color: #d5281f;
    }
    .itemmain:hover .itemtitle{
        color: #d5281f !important;
    }
    .itemtext{
        font-size: 14px;
        line-height: 22px;
        color: #666;
    }
</style>
