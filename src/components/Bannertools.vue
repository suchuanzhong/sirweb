<template>
    <div class="toolsbox md_part sm_part" :class="{m_toolsbox:!showBol}" :style="{width:this.widthval+'px'}">
        <ul class="main" :class="{m_main:!showBol}">
            <li v-for="(item,index) in toolsdata"
            :key="index"
            :data-idx="item.idx"
            :data-ids="item.id"
            :data-word="item.title"
            :class="{active:item.bol}"
             @click="choosefuc($event)"
             :style="!showBol?{width:((100/newtools.length)+'%')}:''"><p>{{item.title}}</p></li>
        </ul>
        <div class="searchbox" v-if="showBol" :style="widthval === 1300? {'margin-right':'60px'}:''">
            <input type="text" class="seachinput" placeholder="请输入您想查询文章的关键字" v-model="intval" v-on:keyup.enter="searchfuc">
            <img  class="search-icon" src="../../static/img/search.png" alt="" @click="searchfuc" >
        </div>
    </div>
</template>
<script>
export default {
  name: 'Bannertools',
  props: ['showBol', 'toolsdata', 'cls'],
  data () {
    return {
      intval: '',
      newtools: this.toolsdata,
      widthval: 1200
    }
  },
  mounted () {
    this.urlfuc()
  },
  methods: {
    urlfuc () {
      if (this.$route.path === '/reseach') {
        this.widthval = 1245
      }
    },
    // 项目展示筛选后的文字
    choosefuc (e) {
      let num = parseInt(e.currentTarget.dataset.idx)
      let ids = parseInt(e.currentTarget.dataset.ids)
      let word = e.currentTarget.dataset.word
      this.toolsdata.map((item) => {
        if (item.idx === num) {
          item.bol = true
        } else {
          item.bol = false
        }
      })
      this.$emit('choosenum', {num: num, ids: ids, word: word})
    },
    searchfuc () {
      const baseUrl = process.env.API_ROOT
      var searchval = this.intval
      if (this.cls === 'project') {
        this.axios.post(baseUrl + '/procet/getlist', {token: 'yxD9NyznUkP5cDsi', key: searchval, page: 1}).then((res) => {
          this.$emit('chooserearch', res.data)
        })
      } else if (this.cls === 'reseach') {
        this.axios.post(baseUrl + '/study/getlist', {token: 'yxD9NyznUkP5cDsi', key: searchval, page: 1}).then((res) => {
          this.$emit('chooserearch', res.data)
        })
      }
    }
  }
}
</script>
<style scoped>
    .toolsbox{
        width: 1300px;
        overflow: hidden;
        margin:50px auto 0;
    }
    .main{
        display: flex;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 6px;
        float:left;
    }
    .main li{
        list-style: none;
        width:100px;
        height: 40px;
        font-size: 16px;
        text-align: center;
        color: #333;
        border-right: 1px solid #ccc;
    }
    .main li:hover,.search-icon:hover{
      cursor: pointer;
    }
    .main li:nth-last-child(1){
      border-right: none;
    }
    .main p{
        line-height: 40px;
    }
    .active{
        background-color: #da251c;
        border: 1px solid #da251c !important;
        color: #fff !important;
    }
    .searchbox{
        border: 1px solid #ccc;
        border-radius: 6px;
        float: right;
        padding: 0 10px 0 8px;
    }
    .seachinput{
        width: 272px;
        height: 40px;
        outline: none;
        border: none;
        font-size: 14px;
        color: #333;
    }
    input::-webkit-input-placeholder{
        color: #333;
    }
    input::-moz-placeholder{
        color: #333;
    }
    input:-moz-placeholder{
        color: #333;
    }
    input:-ms-input-placeholder{
        color: #333;
    }
    .search-icon{
        width: 14px;
        height: 14px;
        vertical-align: middle;
        margin-top: -4px;
    }
    /* monlie */
    .m_toolsbox{
        width: 100% !important;
        padding:20px 30px;
        margin: 0;
    }
    .m_toolsbox .searchbox{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .m_main{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .m_main li{
        width: 33.3%;
    }
</style>
