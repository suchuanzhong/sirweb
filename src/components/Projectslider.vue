<template>
    <div class="main">
        <img class='leftcls'  src="../../static/img/left.png" alt="" @click="prev" >
        <img class='rightcls' src="../../static/img/right.png" alt="" @click="next" >
        <ul :style="{left:leftval+'px'}">
            <li>
                <img :src="remenddata[4].imgstr" alt="">
                <div class="mask">
                    <p>{{remenddata[4].text}}</p>
                    <p>{{remenddata[4].texttwo}}</p>
                </div>
                
            </li>
            <li>
                <img :src="remenddata[5].imgstr" alt="">
                <div class="mask">
                    <p>{{remenddata[5].text}}</p>
                    <p>{{remenddata[5].texttwo}}</p>
                </div>
            </li>
            <li v-for="(item,index) in remenddata" :key="index">
                <img :src="item.imgstr" alt="">
                <div class="mask">
                    <p>{{item.text}}</p>
                    <p>{{item.texttwo}}</p>
                </div>
                
            </li>
            <li>
                <img :src="remenddata[0].imgstr" alt="">
                <div class="mask">
                    <p>{{remenddata[0].text}}</p>
                    <p>{{remenddata[0].texttwo}}</p>
                </div>
            </li>
            <li>
                <img :src="remenddata[1].imgstr" alt="">
                <div class="mask">
                  
                    <p>{{remenddata[1].text}}</p> 
                    <p>{{remenddata[1].texttwo}}</p>
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            leftval:-820,
            remenddata:[
                
               {id:0,imgstr:'./static/img/test.png',text:1,texttwo:'成都首个微旅游街区景区标准打造景区标准打'},
               {id:1,imgstr:'./static/img/test.png',text:2,texttwo:'成都首个微旅游街区景区标准打造景区标准打'},
               {id:2,imgstr:'./static/img/test.png',text:3,texttwo:'成都首个微旅游街区景区标准打造景区标准打'},
               {id:3,imgstr:'./static/img/test.png',text:4,texttwo:'成都首个微旅游街区景区标准打造景区标准打'},
               {id:4,imgstr:'./static/img/test.png',text:5,texttwo:'成都首个微旅游街区景区标准打造景区标准打'},
               {id:5,imgstr:'./static/img/test.png',text:6,texttwo:'成都首个微旅游街区景区标准打造景区标准打'}
            ],
          
            screenwval:410
        }
    },
    methods:{
         paly(offset){
           
            var speed = offset/10;
            var newleftval = Math.round(this.leftval+offset);
           
            // this.animated = true;
            var go=()=>{

                if((speed<0&&Math.round(this.leftval)>newleftval) || (speed>0&&Math.round(this.leftval)<newleftval)){
                    this.leftval = this.leftval+speed;
                    console.log(this.leftval,newleftval)
                    setTimeout(go,30)
                }else{
                  
                   if(Math.round(this.leftval) <= -(this.screenwval*7)){
                       this.leftval = -(this.screenwval)
                   }else if(Math.round(this.leftval) > -this.screenwval){
                       this.leftval = -(this.screenwval*6)
                    
                   }
                //    this.animated = false;
                }  
               
            }
            go()

        },
        prev(){
            this.paly(this.screenwval);
        },
        next(){
            this.paly(-this.screenwval);
        },
    }
}
</script>

<style scoped>
    .main{
        width: 1200px;
        overflow: hidden;
        position: relative;
        margin-bottom: 60px;
    }
    .leftcls{
        width: 30px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 1;
        margin-top: -30px;
    }
    .rightcls{
        width: 30px;
        height: 60px;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 1;
         margin-top: -30px;
    }
    ul{
        width: 350%;
        overflow: hidden;
        position: relative;
        
    }
    li{
        width: 380px;
        height: 280px;
        list-style: none;
        margin: 0 30px 0 0;
        float: left;
    }
    li img{
        width: 100%;
        height: 100%;
    }
    .mask{
        width: 380px;
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
        font-size: 18px;
        line-height: 18px;
        font-weight: bold;
        margin-top: 10px;
    }
    .mask p:nth-child(2){
        font-size: 16px;
        line-height: 16px;
        margin-top: 10px;
    }
</style>

