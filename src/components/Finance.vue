<template>
    <!-- IP -->
      <div class="contant">
        <div id="seven" class="money" :class="{m_money:!showBol}">
          <div class="titlebox" :class="{m_titlebox:!showBol}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>金融服务</p>
          </div>
          <img src="../../static/img/manage5.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol'],
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped>
    .contant{
        background-color: #fff;
        overflow: hidden;
    }
    .titlebox{
      font-size: 24px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 90px;
      line-height: 24px;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:70px auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    /* 资产运营 */
    .money{
      width: 100%;
      overflow: hidden;
      text-align: center;
      padding:0 0 150px;
    }
    .money img{
      width: 1200px;
    }
    /* moblie */
    .m_titlebox{
      padding: 1px 30px 0;
      margin:0 auto 30px;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
    }
    .m_titlebox .com_dot{
      margin:20px auto ;
    }
    .m_money{
      padding: 0 0 50px;
    }
    .m_money img{
      width: 100%;
    }
</style>
