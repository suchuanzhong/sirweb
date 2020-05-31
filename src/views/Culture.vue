<template>
    <div>
        <Banner  @istransform="istransform"/>
        <div class="lefttime" :style="is_left?{transform:'translateX(220px)'}:{transform:'translateX(0%)'}">
          <Bannertext :bannerdata="bannerdata" :showBol="screenshow"/>
          <div class="titlebox" :class="{m_titlebox:!screenshow}">
            <div class="com_dot"><i></i><i></i><i></i></div>
            <p>企业核心价值观</p>
          </div>
          <div class="values" :class="{m_values:!screenshow}">
            <div>
              <p class="title">善思睿行、成就客户；臻于至善、使命必达。</p>
              <div class="valuestext"><span class="dot"></span> <span :class="{dottext:!screenshow}">强烈的求知欲和不断学习进步的渴望，驱使我们不断进取，上下求索，开拓创新；</span> </div>
              <div class="valuestext"><span class="dot"></span> <span :class="{dottext:!screenshow}">以“客户”的需求实现和利益最大化为永续驱动力，不断探索高效、价值最大化的服务方案；</span></div>
              <div class="valuestext"><span class="dot"></span> <span :class="{dottext:!screenshow}">关注行业发展、聚焦客户需求，以最佳的状态和卓越的服务为客户的发展保驾护航；</span> </div>
              <div class="valuestext"><span class="dot"></span> <span :class="{dottext:!screenshow}">以“使命达成”为核心要义，关注执行力与协作性，从而实现对自身及对客户的承诺。</span> </div>
            </div>
            <div class="valuesimg">
              <img src="../../static/img/culture2.png" alt="">
              <div class="redbox" v-if="screenshow"></div>
            </div>
          </div>
          <!-- 人才观 -->
          <div class="talentview" :class="{m_talentview:!screenshow}">
            <div class="titlebox" :class="{m_titlebox:!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>人才观</p>
            </div>
            <div class="talent" :class="{m_talent:!screenshow}">
              <p class="title">任人唯贤，能者居上</p>
              <p class="valuestext">思睿主张“任人唯贤，能者居上”，无论你处于哪个岗位，亦或是初出茅庐，要你愿意拼搏、敢于展现，思睿都会为你提供最适合自己的舞台！</p>
              <div class="talentmain">
                <div class="talencont" v-for="(item, index) in talentdata" :key="index">
                  <div class="tal_text">
                    <div>
                      <p class="t_etext">{{item.textone}}</p>
                      <p class="t_name">{{item.texttwo}}</p>
                    </div>
                    <img :src="item.imgstr" alt="">
                  </div>
                  <P class="t_des">{{item.textthree}}</P>
                </div>
              </div>
            </div>
          </div>
          <!-- 员工活动 -->
          <div class="staff" :class="{m_staff:!screenshow}">
            <div v-if="!screenshow" class="titlebox ygtitlebox" :class="{m_titlebox:!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>员工活动</p>
            </div>
            <div class="staffbar" :class="{m_staffbar:!screenshow}">
              <span v-if="screenshow" class="stitle">员工活动</span>
              <div class="barmain" v-if="screenshow">
                <span v-for="(item, index) in activitydata" :key="index" :class="{active: item.bol}" :data-num="index+1" @click="toimg($event)">{{item.title}}</span>
              </div>
              <div class="m_barmain" v-else>
                <div >
                <div class="m_bar">
                <span v-for="(item, index) in activitydata" :key="index" :class="{active: item.bol}" :data-num="index+1" @click="toimg($event)">{{item.title}}</span>
                </div>
                </div>
              </div>
            </div>
            <div v-if="screenshow" class="imgbox" :class="{m_imgbox:!screenshow}" :style="{width:screenWidth+'px'}">
              <div class="contant" :style="{left:leftval+'px',width:screenWidth*6+'px'}">
                <div class="staffmain" :style="{width:screenWidth+'px'}" :class="{m_staffmain:!screenshow}" v-for="(item, index) in activitydata" :key="index">
                  <div class="staffitem" v-for="(item, index) in item.child" :key="index">
                    <img :src="item.imgstr" alt="">
                    <div class="mask">
                      <p class="maskone">{{item.textone}}</p>
                      <p class="masktwo">{{item.texttwo}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="homeslidermain" :class="{m_homeslidermain:!screenshow}">
              <div class="imgbox" :style="{width:countwidth+'px',height:screenHeight+'px'}">
                  <div class="contant" :style="{left:leftval2+'px',width:countwidth*5+'px'}">
                      <div class="contantimg"
                      :style="{width:countwidth+'px',height:screenHeight+'px'}"
                      v-for="(item,index) in mimgdata"
                      :key="index"
                      :data-idx="item.id"
                      @click="toinfo($event)">
                          <img :style="{width:countwidth+'px'}"  :src="item.imgstr" alt="">
                          <!-- <div class="mask" :style="showBol?{width:countwidth+'px',height:Math.round(screenhval/4.6) +'px'}:{width:countwidth-20+'px',height:Math.round(screenhval/4.2) +'px'}">
                              <p class="imgtitle">{{item.title.split('：')[0].substring(0,18)}}</p>
                              <p class="imgtext" v-if="tipstext === '精选项目'">{{item.title.indexOf('：')!=-1?item.title.split('：')[1].substring(0,22):''}}</p>
                          </div> -->
                      </div>
                  </div>
                  <div class='leftcls' @click="prev"></div>
                  <div class='rightcls' @click="next"></div>
              </div>
            </div>
          </div>
          <!-- 以奋斗为本 -->
          <div class="struggle" :class="{m_struggle:!screenshow}">
            <div class="titlebox" :class="{m_titlebox:!screenshow}">
              <div class="com_dot"><i></i><i></i><i></i></div>
              <p>思睿：以奋斗者为本</p>
            </div>
            <div class="strugglebox" :class="{m_strugglebox:!screenshow}">
              <p>思睿生于成都，壮大于西南，正逐步发展成为全国化、良好口碑与行业影响力兼具的商旅及城市运营综合平台服务商。一路走来，筚路蓝缕，披荆斩棘，顽强生长，靠的就是一股不服输、咬牙干的韧劲，和顽强拼搏、自强不息的奋斗精神。这种“奋斗精神”已逐步融入公司的血液中，塑造了我们“思睿人”特有的团队DNA：客户为先、言出必行；谦逊好学、求真务实；协同作战、成就他人；尊重个性、拥抱变化。</p>
              <p>近年来，国内外形势不断变化，我们所在的行业，发展逻辑正在经历更新，企业与个人面临着挑战与机遇并存、重塑与更新并行的新形势和新需求。之于思睿，既是挑战，更是机遇。思睿已做好充分准备，在新的战略聚焦下，苦炼内功、重构能力、拥抱变化。</p>
              <p>目前思睿已进入到新的发展阶段，我们真诚欢迎更多的“奋斗者”加入这支充满“上进心”、“责任心”、“包容心”、“执行力”和“学习力”的队伍。奉献定当得到合理的回报，思睿决不会辜负每一个奋斗者，会通过各种手段激发奋斗者的活力，保护奋斗者的热情，用刚性的制度约束和激励，保证奋斗激情能够持久地奔腾涌流。自胜者强，自强者胜。愿全体“思睿人”一起为企业梦努力，拥抱我们共同的事业，享受持续奋斗的人生！</p>
            </div>
          </div>
          <Footer :showBol="screenshow"/>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner'
import Bannertext from '@/components/Bannertext'
import Footer from '@/components/Footer'
export default {
  components: {Banner, Footer, Bannertext},
  data () {
    return {
      screenshow: true, // 屏幕大小显示，
      screenWidth: 1200,
      idx: 1,
      leftval: 0,
      bannerdata: {textone: '思睿文化', texttwo: '', urlstr: './static/img/culture1.jpg'},
      talentdata: [
        {imgstr: './static/img/culture3.png', textone: 'S（Star） Plan', texttwo: '“星”世代计划', textthree: '思睿坚信,未来是属于新世代的！"星"世代计划是面向校园应届毕业生的人才培养计划，由经理级别及以上管理人员进行1对1带教，意在培养专业技能全面、实战经验丰富的业务经理。'},
        {imgstr: './static/img/culture4.png', textone: 'I (Innovation) Plan', texttwo: '创新计划', textthree: '思睿不会辜负每一个努力奋斗、无私奉献的人！“创新计划”面向团队中有潜质且工作2年以上的员工进行选拔，制定定向培养计划，由副总监及以上级别管理人员进行1对1带教，意在培养能独挡一面的部门经理。'},
        {imgstr: './static/img/culture5.png', textone: 'R (Reborn) Plan', texttwo: '新生计划', textthree: '针对中层骨干的晋升培养制度，由公司副总及以上级别高管进行1对1 带教，意在培养高层管理人员，为公司战略发展储备新的血液。'}
      ],
      activitydata: [
        {
          id: 0,
          title: '圣诞活动',
          bol: true,
          child: [
            {id: 0, imgstr: '../../static/img/activity1.png', textone: '圣诞节活动', texttwo: '盲选礼物环节最大的乐趣在于送和收都充满了未知的惊喜'},
            {id: 1, imgstr: '../../static/img/activity2.jpg', textone: '圣诞节活动', texttwo: '圣诞茶话会，水果、蛋糕、咖啡、糖果……应有尽有'},
            {id: 2, imgstr: '../../static/img/activity3.jpg', textone: '圣诞节活动', texttwo: '合照'}
          ]
        },
        {
          id: 1,
          title: '年会',
          bol: false,
          child: [
            {imgstr: '../../static/img/activity4.png', textone: '年会', texttwo: '思睿地产新年摩登派对'},
            {imgstr: '../../static/img/activity5.jpg', textone: '年会', texttwo: '董事会刘总、陈总和曾总拍照区合影'},
            {imgstr: '../../static/img/activity6.jpg', textone: '年会', texttwo: '董事会特别嘉奖环节合影'}
          ]
        },
        {
          id: 2,
          title: '户外拓展活动',
          bol: false,
          child: [
            {imgstr: '../../static/img/activity7.png', textone: '户外拓展活动', texttwo: '“青城山醉氧之行”出发前的大合照'},
            {imgstr: '../../static/img/activity8.jpg', textone: '户外拓展活动', texttwo: '在山谷中逶迤前行，或高、或低、或快、或慢，都是团队的缩影，也是自我力量的爆发'},
            {imgstr: '../../static/img/activity9.jpg', textone: '户外拓展活动', texttwo: '队伍前行过程中沿途的风景'}
          ]
        },
        {
          id: 3,
          title: '羽毛球运动会',
          bol: false,
          child: [
            {imgstr: '../../static/img/activity10.png', textone: '羽毛球运动会', texttwo: '“思睿杯”第三届羽毛球友谊赛'},
            {imgstr: '../../static/img/activity11.jpg', textone: '羽毛球运动会', texttwo: '美少女啦啦队，也是本次友谊赛的颜值担当！她们的目标是：让现场更加躁动！'},
            {imgstr: '../../static/img/activity12.png', textone: '羽毛球运动会', texttwo: '比赛异常激烈，凭着熟练的技艺和精湛的技术变化出不同姿势沉着应对对手的攻势。'}
          ]
        },
        {
          id: 4,
          title: '三八女神节活动',
          bol: false,
          child: [
            {imgstr: '../../static/img/activity13.png', textone: '三八女神节活动', texttwo: '成都各项目上的思睿女神'},
            {imgstr: '../../static/img/activity14.jpg', textone: '三八女神节活动', texttwo: '成都各项目上的思睿女神'},
            {imgstr: '../../static/img/activity15.jpg', textone: '三八女神节活动', texttwo: '来自广汉、邛崃、宜宾、江油的思睿女神们'}
          ]
        },
        {
          id: 5,
          title: '团队拓展活动',
          bol: false,
          child: [
            {imgstr: '../../static/img/activity16.png', textone: '团队拓展活动', texttwo: '“赢在执行，胜在携手”团队拓展训练'},
            {imgstr: '../../static/img/activity17.jpg', textone: '团队拓展活动', texttwo: '翻越毕业墙：下面有我们护着你，你放心！'},
            {imgstr: '../../static/img/activity18.jpg', textone: '团队拓展活动', texttwo: '高空断桥：要求参与者从木板的一侧，凌空跨越至另一侧，60厘米的距离，因为高度而显得格外有挑战性。'}
          ]
        }
      ],
      is_left: false,
      activeindex: 0,
      countwidth: 0,
      leftval2: 0,
      idx2: 1,
      mimgdata: []
    }
  },
  watch: {
    '$store.state.screenval': function (val) { // 监听屏幕宽度变化
      if (val > 1200) {
        this.screenWidth = Math.round(1907 * 0.62926)
      } else {
        this.screenWidth = val
      }
    }
  },
  mounted () {
    this.showscreen()
    this.initpic(0)
  },
  methods: {
    istransform (data) {
      this.is_left = data
    },
    toimg (event) {
      let num = parseInt(event.currentTarget.dataset.num)
      if (this.screenshow) {
        let offset = num - this.idx
        this.idx = num
        if (offset > 0) {
          this.paly(-this.screenWidth * offset, num)
        } else if (offset < 0) {
          this.paly(this.screenWidth * (-offset), num)
        }
      } else {
        this.activitydata.map((item, index) => {
          item.bol = (num - 1) === index
        })
        this.initpic(num - 1)
      }
    },
    paly (offset, num) {
      if (!this.screenwidth && this.showBol) {
        this.screenwidth = this.screenwval
        this.screenwval = this.screenw
        this.leftval = -this.screenw
      }
      this.activitydata.map((item, index) => {
        item.bol = (num - 1) === index
      })
      var speed = offset / 10
      var newleftval = Math.round(this.leftval + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval) > newleftval) || (speed > 0 && Math.round(this.leftval) < newleftval)) {
          this.leftval = this.leftval + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval) <= -(this.screenwval * 6)) {
            this.leftval = -(this.screenwval)
          } else if (Math.round(this.leftval) > -this.screenwval) {
            this.leftval = -(this.screenwval * 5)
          }
          this.animated = false
        }
      }
      go()
    },
    initpic (num) {
      let mimgdata = []
      let newdata = JSON.parse(JSON.stringify(this.activitydata[num].child))
      mimgdata = newdata
      mimgdata.unshift(newdata[2])
      mimgdata.push(newdata[1])
      this.mimgdata = mimgdata
    },
    prev () {
      if (this.idx2 === 1) {
        this.idx2 = 3
      } else {
        this.idx2--
      }
      this.paly2(this.countwidth)
    },
    next () {
      if (this.idx2 === 3) {
        this.idx2 = 1
      } else {
        this.idx2++
      }
      this.paly2(-this.countwidth)
    },
    paly2 (offset) {
      var speed = offset / 10
      var newleftval = Math.round(this.leftval2 + offset)
      this.animated = true
      var go = () => {
        if ((speed < 0 && Math.round(this.leftval2) > newleftval) || (speed > 0 && Math.round(this.leftval2) < newleftval)) {
          this.leftval2 = this.leftval2 + speed
          setTimeout(go, 30)
        } else {
          if (Math.round(this.leftval2) <= -(this.countwidth * 4)) {
            this.leftval2 = -(this.countwidth)
          } else if (Math.round(this.leftval2) > -this.countwidth) {
            this.leftval2 = -(this.countwidth * 3)
          }
          this.animated = false
        }
      }
      go()
    },
    showscreen () {
      if (document.documentElement.clientWidth < 767) {
        this.screenshow = false
        this.screenWidth = document.documentElement.offsetWidth - 60 // 窗口宽度
        this.leftval2 = -Math.round(document.documentElement.offsetWidth - 60)
        this.screenHeight = 200 // 窗口高度
        this.countwidth = document.documentElement.offsetWidth - 60// 窗口宽度
      }
    }
  }
}
</script>
<style  scoped>
    /* ... */
    .lefttime{
      transition: all ease-in-out 0.3s;
    }
    .titlebox{
      font-size: 24px;
      color: #333;
      font-weight: bold;
      text-align: center;
      margin-bottom: 70px;
    }
    .com_dot{
      width: 4px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin:60px auto 20px;
    }
    .com_dot i{
      display: block;
      width: 4px;
      height: 4px;
      margin: 3px 0 0;
      border-radius: 50%;
      background-color: #d62c28;
    }
    .ygtitlebox{
      color:#fff;
    }
    .ygtitlebox i{
      background-color: #fff;
    }
    /* 价值观 */
    .values{
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }
    .title{
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
      padding-bottom: 20px;
      color: #333;
    }
    .valuestext{
      font-size: 14px;
      color: #666;
      line-height: 14px;
      margin-top: 20px;
    }
    .dot{
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #333;
      vertical-align: middle;
      margin-right: 10px;
    }
    .valuesimg{
      width: 520px;
      height: 300px;
    }
    .valuesimg img{
      float: left;
      width: 520px;
      height: 300px;
    }
    .redbox{
      width: 60px;
      height: 20px;
      background-color: #d62c28;
      float: left;
      margin-left: -30px;
      margin-top: -210px;
    }
    /* 人才观 */
    .talentview{
      background-color: #eee;
      padding: 1px 0 90px;
      margin-top: -65px;
      background: url(/static/img/homenumbj.5995036.jpg);
      /* background-size: 100% 100%; */
    }
    .talent{
      width: 1200px;
      margin: auto;
    }
    .talentmain{
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
    }
    .talencont{
      width: 30%;
      background-color: #fff;
      padding: 60px 40px;
    }
    .talencont:hover{
      background-color: #f7f7f7;
      box-shadow: 0 20px 20px rgba(102,102,102,.5);
    }
    .tal_text{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tal_etext{
      font-size: 14px;
      color: #333;
    }
    .t_name{
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .t_des{
      font-size: 14px;
      line-height: 24px;
      color: #666;
      padding: 40px 30px 0 0;
      /* text-align: justify; */
    }
    /* 员工活动 */
    .staff{
      padding: 100px 0 140px;
      background-color: #ce2a26;
    }
    .staffbar{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      color: #fff;
    }
    .stitle{
      font-size: 24px;
      font-weight: bold;
    }
    .barmain{
      width: 700px;
      height: 60px;
      padding: 0 40px;
      font-size: 14px;
      color: #666;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
    }
    .barmain span{
      line-height: 57px;
      border-bottom: 3px solid #fff;
    }
    .barmain:hover span{
       cursor: pointer;
    }
    .active{
      border-bottom: 3px solid #ebba11 !important;
    }
    /* 图册 */
    .staffmain{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      float: left;
    }
    .imgbox{
      width: 1200px;
      height: 260px;
      position: relative;
      overflow: hidden;
      margin:117px auto 0;
    }
    .contant{
        position: absolute;
    }
    .staffitem{
      width: 30%;
      height: 260px;
      position: relative;
    }
    .staffitem:hover .mask{
      display: block;
    }
    .mask{
      width: 100%;
      height: 100%;
      padding: 50px 40px;
      background-color: rgba(0,0,0,.5);
      position: absolute;
      top: 0;
      color: #fff;
      display: none;
    }
    .maskone{
      font-size: 14px;
      color: #d0262e;
      line-height: 14px;
    }
    .masktwo{
      font-size: 16px;
      color: #fff;
      line-height: 22px;
      margin-top: 11px;
    }
    /* 以奋斗为本 */
    .struggle{
      padding: 1px 0 90px;
      background: url('../../static/img/homenumbj.jpg');
      /* background-size: 100% 100%; */
    }
    .strugglebox{
      width: 1200px;
      margin: auto;
    }
    .strugglebox p {
      font-size: 16px;
      color: #666;
      margin-bottom: 30px;
      text-indent: 30px;
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
    /* 价值观 */
    .m_values .title, .m_talent .title{
      font-size: 16px;
      padding-bottom: 3px;
    }
    .dottext{
      display: inline-block;
      width: 93%;
    }
    .m_values .dot{
      /* margin-top: -40px; */
      margin-right: 6px;
    }
    .m_values .valuestext{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 20px;
      margin-top: 14px;
    }
    .m_values, .m_talent{
      width: 100%;
      padding: 0 30px;
      flex-wrap: wrap;
    }
    .m_values .valuesimg{
      height: 200px;
      margin-top: 20px;
      overflow: hidden;
    }
    .m_values img{
      margin-top: -100px;
      width: 100%;
    }
    /* 人才 */
    .m_talentview{
      margin-top: 20px;
      padding: 1px 0 34px;
    }
    .m_talent .valuestext{
      line-height: 20px;
      margin-top: 14px;
    }
    .m_talent .talentmain{
      flex-wrap: wrap;
      margin-top: 20px;
    }
    .m_talent .talencont{
      width: 100%;
      margin-bottom: 16px;
      padding: 30px 40px;
    }
    .m_talent .t_des{
      padding:20px 30px 0 0;
    }
    /* 员工 */
    .m_staff{
      padding: 0 0 50px;
    }
    .m_homeslidermain{
      width: 100%;
      padding: 0 30px 0;
      flex-wrap: wrap;
    }
    .m_homeslidermain .imgbox{
      margin-top: 30px;
    }
    .contantimg{
      float: left;
    }
    .leftcls{
        width:24px;
        height: 34px;
        background: url('../../static/img/right2.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        margin-top: -17px;
        left: 0;
        z-index: 2;
      transform: rotate(180deg);
    }
    .rightcls{
        width:24px;
        height: 34px;
        background: url('../../static/img/right2.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top:50%;
        margin-top: -17px;
        right: 0;
        z-index: 2;
    }
    .m_staffbar{
      width:100%;
      padding: 0 30px;
      flex-direction: column;
      align-items: center;
    }
    .m_barmain{
      width: 100%;
      font-size: 14px;
      color: #666;
      background-color: #fff;
      border-radius: 10px;
      overflow-y: auto;
    }
    .m_bar{
      width: 700px;
      height: 60px;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .m_bar span{
      line-height: 57px;
      border-bottom: 3px solid #fff;
    }
    .m_imgbox{
      height: 450px;
      margin: 0px auto 0 ;
    }
    .m_staffmain{
      /* width: 100%; */
      /* padding:  0 30px; */
      flex-wrap: wrap;
    }
    .m_staffmain .staffitem{
      /* width: 300px; */
       width: 100%;
      height: 200px;
      margin-top: 20px;;
    }
    .m_staffmain .staffitem img{
      width: 100%;
      height: 100%;
    }
    /* 奋斗 */
    .m_strugglebox{
      width:100%;
      padding: 0 30px;
    }
    .m_strugglebox p{
      margin-bottom: 20px;
    }
    .m_struggle{
      padding: 1px 0 35px;
    }
</style>
