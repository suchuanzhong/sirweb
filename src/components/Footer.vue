<template>
    <div class="footerbox">
        <div class="footer md_part sm_part" :class="{m_footer:!showBol}">
            <!-- <div class="contaner">
                <p class="address"> <span>联系地址:中国·成都·航空路6号丰德国际广场D3座7层</span></p>
                <p class="phonenum"><span> 咨询热线:028-85217099 / 028-85562138 </span></p>
                <p class="webadd"><span>服务邮箱:service@sirchina.cn</span></p>
            </div> -->
            <!-- <div class="erweima" v-if="showBol">
                <img src="../../static/img/erweima.png" alt="">
            </div> -->
            <!-- <p class="copyright">
              <span>Copyright © 2015 成都思睿地产顾问有限公司 All Rights Reserved. </span><br>
              <span>版权所有 蜀ICP备19000191号</span>
            </p> -->
            <div class="copyright">
              <p :class="{copycls:!showBol}"> Copyright © 2015 sirui.org.All Rights Reserved
              <br v-if="!showBol">
              <span v-if="!showBol">中国·成都·航空路6号丰德国际广场D3座7层</span>
              <br v-if="!showBol"><b v-else> | </b>
              Tel:028-85217099 / 028-85562138
              <br v-if="!showBol"><b v-else> | </b>
              Email:service@sirchina.cn</p>
            </div>
            <p class="copyright">版权所有 蜀ICP备19000191号</p>
        </div>
    </div>
</template>
<script>
export default {
  props: ['showBol']
}
</script>
<style scoped>
    .footerbox{
        background-color: #06223c;
    }
    .footer{
        width: 1200px;
        padding-top: 50px;
        margin: auto;
        color:#fff;
        font-size: 18px;
        padding: 33px 0 23px;
    }
    .copyright{
      font-size: 12px;
      line-height: 12px;
      color: #8e98a1;
      text-align: center;
      margin-bottom: 10px;
    }
    .copyright b{
      color: #555;
    }
    /* moble */
    .m_footer{
      width: 100%;
    }
    .copycls{
      line-height: 18px;
    }
    /* .contaner{
        float: left;
    }
    .contaner span{
        margin-left: 12px;
    }
    .contaner img{
        vertical-align: bottom;
    }
    .phonenum,.webadd,.address{
        line-height: 18px;
        margin-top: 20px;
    }
    .copyright{
        clear: both;
        font-size: 16px;
        color: #fff;
        padding-top: 80px;
        padding-bottom: 20px;
        text-align: center;
    } */
    /* moblie */
    /* .mfooter{
        width: 100%;
        height: auto;
        padding: 20px  30px 0;
        display: flex;
        font-size: 12px;
        flex-direction: column;
        justify-content: space-around;
    }
    .mfooter .title{
        width:100%;
        font-size: 24px;
        line-height: 24px;
        padding: 20px 0;
        margin-bottom: 12px;
    }
    .mfooter .address,.mfooter .phonenum,.mfooter .webadd{
        margin-top: 8px;
    }
    .mfooter .contaner span{
        margin-left: 0px;
    }
    .mfooter .copyright{
        font-size: 10px;
        text-align: start;
        padding: 20px 0 8px;
        text-align: center;
    } */
</style>
