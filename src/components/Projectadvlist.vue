<template>
    <div class="main">
        <ul >
            <li v-for="(item,index) in remenddata" :key="index" :data-idx="item.id" @click="toinfo($event)">
                <img :src="item.imgs" alt="">
                <div class="mask">
                    <p>{{item.title.split('：')[0].substring(0,18)}}</p>
                    <p>{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,20):''}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Unit from '@/unit'
export default {
  props: ['itemid', 'requestcls'],
  data () {
    return {
      remenddata: [],
      screenwval: 410
    }
  },
  mounted () {
    this.initdata(this.itemid)
  },
  methods: {
    initdata (itemid) {
      const baseUrl = process.env.API_ROOT
      this.axios.post(baseUrl + '/procet/getone', {token: 'yxD9NyznUkP5cDsi', id: itemid, limit: 3}).then((res) => {
        res.data.lists.map((item) => {
          item.imgs = Unit.URL + item.imgs
        })
        this.remenddata = res.data.lists
      })
    },
    toinfo (event) {
      let ids = event.currentTarget.dataset.idx
      if (this.requestcls === 'projectadv') {
        this.$emit('dealdata', ids)
        this.initdata(ids)
      } else {
        this.$router.push({
          name: 'Projectinfo',
          params: {id: ids, word: ''}
        })
      }
    }
  }
}
</script>
<style scoped>
    .main{
        overflow: hidden;
        /* margin-bottom: 70px; */
    }
    ul{
        width: 350%;
        overflow: hidden;
    }
    li{
        width: 330px;
        height: 240px;
        list-style: none;
        margin: 0  0 30px;
        position: relative;
    }
    li:hover{
      cursor: pointer;
    }
    li:hover p:nth-child(1){
      color: #da251c;
    }
    li img{
        width: 100%;
        height: 100%;
    }
    .mask{
        width: 330px;
        height: 60px;
        background-color:rgba(0,0,0,.5);
        color: #fff;
        padding: 0 20px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        z-index: 1;
    }
    .mask p:nth-child(1){
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
        margin-top: 10px;
    }
    .mask p:nth-child(2){
        font-size: 14px;
        line-height: 14px;
        margin-top: 10px;
    }
</style>
