<template>
        <div class="bannerandtext" :class="{mbannerandtext:!showBol}" :style="{'background-image': 'url('+bannerdata.urlstr+')'}">
            <p>{{bannerdata.textone}}</p>
            <p v-if="hiddentext!=0">{{bannerdata.texttwo}}</p>
        </div>
</template>
<script>
export default {
  name: 'Bannertext',
  props: ['bannerdata', 'showBol', 'hiddentext'],
  data () {
    return {}
  }
}
</script>
<style scoped>
    .bannerandtext{
        height: 400px;
        background-size: 100% 100%;
        font-size: 26px;
        padding:0 50px;
        color: #fff;
        line-height: 26px;
        text-align: center;
        overflow: hidden;
        text-shadow: 0 2px 2px #575757;
    }
    .bannerandtext p:nth-child(1){
        margin-top: 130px;
    }
    .bannerandtext p:nth-child(2){
        font-size: 20px;
        line-height: 20px;
        margin-top: 20px;
    }
    /* moblie */
    .mbannerandtext{
        width: 100%;
        height: 150px;
        font-size: 18px;
        line-height: 24px;
        padding:0 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .mbannerandtext p:nth-child(1){
        margin-top: 0;
    }
    .mbannerandtext p:nth-child(2){
        font-size: 16px;
        line-height: 20px;
        margin-top: 20px;
    }
</style>
