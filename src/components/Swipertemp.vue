<template>
    <div :class="{m_slider:!showBol}">
        <div v-if="showBol" class="brandslidermain" :style="{width:countwidth+'px'}">
            <div class="imgbox" :style="{width:countwidth+'px'}">
                <div class="contant" :style="{left:leftval+'px',width:countwidth*10+'px'}">
                    <div class="contantimg "
                    :style="{width:countwidth+'px'}"
                    v-for="(item,index) in sliderdata"
                    :key="index"
                    :data-idx="item.id" >
                    <div class="leaderpic">
                      <img :src="item.imgs[1]" alt="">
                    </div>
                        <div class="introductbox">
                          <p class="titlename">{{item.name}} {{item.ename}}</p>
                          <p class="zccls"><span v-for="(item,index) in item.introduction.zcarr" :key="index" ><span v-if="(index+1)%2===0"> | </span><br v-else-if="index!==0">{{item}}  </span></p>
                          <p class="introdute">{{item.introduction.introtext}}</p>
                          <p class="line" v-if="item.introduction.major!==''">专业方向</p>
                          <p >{{item.introduction.major}}</p>
                          <p class="line" v-if="item.id<4">服务客户</p>
                          <p class="line" v-else>典型案例</p>
                          <!-- <p class="line" v-if="item.introduction.project!==''">{{item.id<=3 ?'服务客户':'典型案例'}}</p> -->
                          <p>{{item.introduction.project}}</p>
                      </div>
                    </div>
                </div>
                <div class='leftcls' @click="prev" ></div>
                <div class='rightcls' @click="next" ></div>
            </div>
            <div class="sliderlist" :style="{width:countwidth+'px'}" v-if="showBol">
                <div class="slideritem"
                v-for="(item,index) in bigdata"
                :key="index"
                :data-num="index+1"
                @click="toimg($event)"
                >
                    <img :src="item.imgs[0]" alt="">
                    <div class="leadername" :class="{active:item.bol}">
                      <p v-if="!item.bol">{{item.name}}&nbsp;&nbsp;&nbsp;{{item.ename}}</p>
                      <p v-if="!item.bol" style="margin-top:5px;">{{item.zw}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else  class="m_box">
          <div class="m_boxmain" :style="{width:158*8+'px'}">
            <div class="m_itembox" v-for="(item, index) in bigdata" :key="index">
              <img :src="item.imgs[0]" alt="">
              <div class="leadername">
                <p>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.ename}}</p>
                <p style="margin-top:5px;">{{item.zw}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['screenw', 'showBol', 'screenh'],
  data () {
    return {
      bigdata: [
        {id: 1, name: '刘劲松', ename: 'David Liu', zw: '思睿地产执行董事', imgs: ['./static/img/ljs_block2.png', './static/img/ljs_block.jpg'], bol: true, mask: false, introduction: {zcarr: ['思睿地产执行董事', '昆明睿信城市运营公司董事', '华西希望农旅集团副总裁', '法国欧韵酒店集团大中华区董事'], introtext: '业内公认的商旅地产专家，毕业于上海交通大学，曾任蓝光BRC集团商业地产主要负责人之一，拥有超20年、100余个商业、文旅、产业地产项目开发全链条实操及运营管理服务经验 。', major: '各类型房地产投融资金融、项目开发策略、资产运营管理', project: '望江名门顶级公寓、蓝光“耍都”系列、华西希望“花舞”系列、金杯半山康养等'}},
        {id: 2, name: '曾学锦', ename: 'Jim Zeng', zw: '董事总经理', imgs: ['./static/img/zxj_block2.png', './static/img/zxj_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['董事总经理', '成都房地产市场研究奠基人', '王志纲工作室资深成员'], introtext: '成都房地产市场研究的奠基人，善以敏锐的目光对在新经济背景下企业的发展趋势给予洞察，对于各种专业资源的整合运作，复杂系统的结构与顺序的把握有独到的见解，目前全面负责战略策划工作', major: '区域经济发展、产业地产策划、企业战略咨询、整合战略定位和营销推广', project: '万科地产、龙湖地产、中海地产、保利地产、和黄地产、华西希望集团、星光文旅、金杯半山等'}},
        {id: 3, name: '陈 强', ename: 'Jack Chen', zw: '董事副总经理', imgs: ['./static/img/cq_block2.png', './static/img/cq_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['董事副总经理/策划中心总监', '思睿博道规划设计院副院长', '成都毕贝塔数据科技有限公司副总经理', 'EMBA 、ICSC（美国国际购物中心协会）会员'], introtext: '资深全程策划专家，具有超20年房地产从业经验，负责和参与超过100个、约2000万㎡房地产项目。全程参与拿地、策划、设计、销售、招商、运营等方面工作，提出了商业地产策划、销售、经营的“6力模型”、“商业地产成功开发的12大运作系统” 、房地产规划设计的“6位一体”的设计思路。', major: '房地产全程策划、规划设计、数据研究', project: '万科地产、保利地产、华润地产、中海地产、中铁地产、蓝光BRC、华西希望、建发地产、蓝润地产等'}},
        // {id: 3, name: '陈 强', ename: 'Jack Chen', zw: '董事副总经理', imgs: ['./static/img/cq_block2.png', './static/img/cq_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['董事副总经理/策划中心总监', '思睿博道规划设计院副院长', '成都毕贝塔数据科技有限公司副总经理', 'EMBA 、ICSC（美国国际购物中心协会）会员'], introtext: '资深全程策划专家，具有超20年房地产从业经验，负责和参与超过100个、约2000万㎡房地产项目。全程参与拿地、策划、设计、销售、招商、运营等方面工作，在房地产价值体系和核心IP提炼方面有独到见解，创造性提出了商业地产策划、销售、经营的“6力模型”、“商业地产成功开发的12大运作系统” 、房地产规划设计的“6位一体”的设计思路。', major: '房地产全程策划、规划设计、数据研究', project: ''}},
        {id: 4, name: '舒大荣', ename: 'Simon Shu', zw: '超群资产管理总经理', imgs: ['./static/img/sdr_block2.jpg', './static/img/sdr_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['超群资产管理总经理', '华西希望集团希望城总经理', '昆明睿信城市运营管理公司副总经理', '四川省政府采购专家、成都市物业管理行业专家'], introtext: '超20年商业物业从业经验，曾就职万达集团、联想光大集团、蓝光集团BRC等大型商业地产集团，现供职于华西希望集团、昆明空港投资集团控股子公司昆明睿信城市运营管理公司，服务过的商业物业面积超2000万㎡。', major: '商业规划设计、商业工程设备配置、设计评审、招商运营、资产管理、物业管理', project: '南坪万达广场、金融街万达广场、石景山万达广场、大融城购物中心（观音桥店）、希望城、锦弘广场、大商汇、万科钻石广场、耍都、世纪商业广场、空港总部基地、滇中新区展示中心等'}},
        {id: 5, name: '黄 飞', ename: 'Ham fee', zw: '策划中心总监', imgs: ['./static/img/hf_block2.jpg', './static/img/hf_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['策划中心 总监'], introtext: '四川师大文化旅游专业硕士，专注于文旅产业及商业地产研究、整合策划，具有文旅的广度和商业地产的深度专业能力；广泛涉猎城市特色商业街区、文旅特色小镇、主题公园地产、乡村旅游地产、健康医养地产等细分领域，在市场研究、项目定位、产品规划、租售与运营等多个层面为客户提供顾问解决之道。', major: '文旅地产研究、商业地产策划、旅游项目策划', project: '华润地产、中海地产、海骏达地产、永立集团、三目集团、新华联文旅集团、北京星光文旅、曲江文旅、大明宏信、川报文旅、广汇集团、华西希望'}},
        // {id: 5, name: '黄 飞', ename: 'Ham fee', zw: '策划中心 总监', imgs: ['./static/img/hf_block2.jpg', './static/img/hf_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['策划中心 总监'], introtext: '四川师大文化旅游专业硕士，专注于文旅产业及商业地产研究、整合策划，具有文旅的广度和商业地产的深度专业能力；广泛涉猎城市特色商业街区、文旅特色小镇、主题公园地产、乡村旅游地产、健康医养地产等细分领域，在市场研究、项目定位、产品规划、租售与运营等多个层面为客户提供顾问解决之道。', major: '文旅地产研究、商业地产策划、旅游项目策划', project: '新华联铜官窑、永立星成都、郫都海骏达城、华西希望伯克利小镇、药王仙谷文旅养产业谷、峨眉半山•七里坪国际旅游度假区、东方太阳谷太阳小镇、半山生命小镇、热带雨林文旅小镇、彩灯小镇'}},
        {id: 6, name: '王方君', ename: 'Alex', zw: '营销中心总监', imgs: ['./static/img/wfj_block2.png', './static/img/wfj_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['营销中心 总监'], introtext: '7年以上房地产从业经验，擅长商业项目的整体定位、主题包装与营销执行，并能结合项目实际从前期规划设计，招商运营等多个层面为项目谋划综合解决方案，具有卓越的整体营销策划、定位、项目团队组织、执行能力。', major: '房地产整合营销、项目定位及主题包装、新媒体运用、品牌建设', project: '蓝润•锦江春天、中铁•马家公馆、中铁九天、北成8号、永立星城都、锦弘•泓景湾、华西希望•玫瑰湾'}},
        {id: 7, name: '孟 简', ename: 'Jian Meng', zw: '招商中心总监', imgs: ['./static/img/mj_block2.jpg', './static/img/mj_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['招商中心 总监'], introtext: '十六年购物中心及商业地产招商运营经验，擅长全程项目规划、客户管理、招商定位、业态划分，对商业零售市场的设计、工程条件、品牌组合有深入认知，在多个地产项目的开发、招商、运营管理中梳理出全程管控方法论，并建立起全面的经营管理系统。', major: '招商及规划、城市商业研究、物业定位建议', project: '水瑾唐、永立星城都、北城八号、钻石广场、龙樾湾、青龙广场、润扬双铁、海天腾逸、海骏达、海搏春天'}},
        {id: 8, name: '陈 立', ename: 'Laura', zw: '战略发展部高级经理', imgs: ['./static/img/cl_block2.jpg', './static/img/cl_block.jpg'], bol: false, mask: false, introduction: {zcarr: ['战略发展部 高级经理'], introtext: '毕业于南洋理工大学，具备6年以上商业地产、产业园运营管理经验，曾经任职龙湖集团，擅长购物中心经营数据分析、会员管理及体系搭建、投融资评审、多业态品牌运营管理、文旅IP孵化，同时在孵化体系顶层设计、科技项目孵化管理、海内外项目前期筹备等方面具备丰富经验。', major: '资产管理、创新项目孵化、企业创新与发展战略、产业发展趋势', project: '国家信息中心大数据创新创业（成都）基地项目、龙湖时代天街、龙湖北城天街、重庆WFC环球金融中心、国信优易-以色列特拉维夫项目'}}
      ],
      sliderdata: [],
      leftval: 0,
      idx: 1,
      Timer: null,
      screenwidth: this.screenwval,
      screenwval: 1200,
      screenhval: 600,
      transitionEnd: true
    }
  },
  computed: {
    countwidth () {
      return Math.round(this.screenw)
    }
  },
  watch: {
    'countwidth': function (val) { // 监听屏幕宽度变化
      this.leftval = -Math.round(this.screenw)
      this.screenwval = Math.round(this.screenw)
      this.screenhval = Math.round(this.screenw * 0.666)
      this.idx = 1
      this.initdata()
    }
  },
  mounted () {
    this.initdata()
  },
  methods: {
    initdata () {
      let imgarr = JSON.parse(JSON.stringify(this.bigdata))
      imgarr.push(imgarr[0])
      imgarr.unshift(imgarr[4])
      this.sliderdata = imgarr
    },
    toimg (event) {
      let num = parseInt(event.currentTarget.dataset.num)
      let offset = num - this.idx
      this.idx = num
      if (offset > 0) {
        this.paly(-Math.round(this.screenwval) * offset, num)
      } else if (offset < 0) {
        this.paly(Math.round(this.screenwval) * (-offset), num)
      }
    },
    paly (offset, num) {
      if (!this.screenwidth && this.showBol) {
        this.screenwidth = Math.round(this.screenwval)
        this.screenwval = Math.round(this.screenw)
        this.leftval = -Math.round(this.screenw)
      }
      this.bigdata.map((item, index) => {
        item.bol = (num - 1) === index
      })
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          // 防止多次点击transitionEnd
          this.transitionEnd = true
          if (Math.round(this.leftval) <= -(this.screenwval * 9)) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * 8)
          }
        }
      }
      go()
      this.anminbol = true
    },
    prev () {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      if (this.idx === 1) {
        this.idx = 8
      } else {
        this.idx--
      }
      this.paly(this.screenwval, this.idx)
    },
    next () {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      if (this.idx === 8) {
        this.idx = 1
      } else {
        this.idx++
      }
      this.paly(-this.screenwval, this.idx)
    }
  }
}
</script>
<style scoped>
    .brandslidermain{
        width: 1200px;
        margin: auto;
    }
    .imgbox{
        width: 1200px;
        height: 367px;
        position: relative;
        overflow: hidden;
    }
    .mask{
        width:100%;
        padding: 15px 0;
        box-sizing: content-box;
        background-color: rgba(0,0,0,.15);
        color: #fff;
        position: absolute;
        text-indent: 30px;
        text-align: start;
        bottom: 0;
        z-index: 2;
    }
    .imgtitle{
        font-size: 26px;
        line-height: 26px;
        margin: 0 0 10px 0;
        font-weight: bold;
        color: rgba(255,255,255,.91)
    }
    .imgtext{
        font-size: 20px;
        line-height: 20px;
    }
    .contant{
        position: absolute;
    }
    .contantimg{
      float: left;
      overflow: hidden;
      color: #333;
      padding: 0 0 0 76px;
      font-size: 16px;
      line-height: 26px;
      display: flex;
      justify-content: flex-start;
    }
    .leaderpic{
      width: 28.6667%;
      padding-bottom: 31.6658%;
      height:0;
      margin-right: 50px;;
    }
    .contantimg img{
      width: 100%;
      /* width: 320px;
      height: 380px; */
    }
    .introductbox{
      width: 65%;
      float: left;
    }
    .titlename{
      font-size: 26px;
      line-height: 26px;
      font-weight: bold;
      margin-bottom: 15px;;
    }
    .zccls{
      display: block;
    }
    .introdute{
      margin:14px 0 0;
      padding-right: 20%;
    }
    .line{
      display: block;
      line-height: 18px;
      height: 18px;
      font-weight: 600;
      padding-left: 10px;
      margin: 19px 0 15px;
      border-left: 4px solid #da251c;
    }
    .leftcls{
        width:2.3%;
        padding-bottom: 3%;
        background: url('../../static/img/left.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 2;
    }
    .rightcls{
        width: 2.3%;
        padding-bottom: 3%;
        background: url('../../static/img/right.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        right: 0;
        z-index: 2;
    }
    .sliderlist{
        width: 1200px;
        padding: 70px 0 0;
        display: flex;
        justify-content: space-between;
    }
    .slideritem{
        width: 200px;
        height: 200px;
        position: relative;
    }
    .leadername{
      width: 100%;
      padding: 8px 0 8px 20px;
      background-color: rgba(0,0,0,.5);
      font-size: 14px;
      line-height: 14px;
      position: absolute;
      bottom: 0;
      z-index: 3;
      color: #fff;
    }
    .slideritem img{
        width: 100%;
        height: 100%;
    }
    .active{
      height: 100%;
        background-color: #d5281f;
        opacity: 0.4;
    }
    /* moblie */
     .m_box{
        width: 100%;
        overflow-y: auto;
    }
    .m_boxmain{
      /* width: 550%; */
      padding: 0 30px;
      overflow: hidden;
      /* display: flex; */
      /* justify-content: flex-start; */
    }
    .m_itembox{
      width: 150px;
      height: 200px;
      /* margin-right: 15px; */
      float: left;
      overflow: hidden;
      position: relative;
    }
    .m_itembox img{
      width: 100%;
      height: 100%;
    }
    .m_itembox .leadername{
      padding: 5px 10px;
      font-size: 12px;
      text-align: center;
    }
    .m_itembox .leadername p:nth-child(2){
      margin-top: 3px !important;
    }
</style>
