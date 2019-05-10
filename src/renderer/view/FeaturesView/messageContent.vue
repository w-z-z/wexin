<template>
  <div id="messageContent">
    <div class="Conheader">
        <div class=""></div>
      {{friend.name}}
    </div>
    <div class="Conmessages">
      <div  v-for='item in record ' v-bind:key="item.key"  :class=" [item.sendType==1 ? 'is-left' : 'is-right', '_mess']">
        <div class="_mess-img">
            <!-- friend -->
            <img v-if='item.sendType==1' :src="friend.headerImg" alt="">
            <!-- user -->
            <img v-if='item.sendType==0' :src="userinfo.headerImg" alt="">
        </div>
        <div class="_mess-content">
           {{item.content}}
        </div>
      </div>
       
    </div>
    <!-- <editor/> -->
  <div id='editor'>
    <div class="edTools">
        <ul class="toolLeft">
          <li>
              <img src="~@/assets/smile.png" alt="">
          </li>
            <li>
              <img src="~@/assets/file.png" alt="">
          </li>
            <li>
              <img src="~@/assets/cut.png" alt="">
          </li>
            <li>
              <img src="~@/assets/mess.png" alt="">
          </li>
        </ul>
        <ul class="toolRight">
            <li>
              <img src="~@/assets/tel.png" alt="">
          </li>
            <li>
              <img src="~@/assets/video.png" alt="">
          </li>
        </ul>
    </div>
    <div class="edContent">
      <textarea   @keydown.native="listen($event)" v-model="inputText" name="edContent" id="edContent" >

      </textarea>
    </div>
    <div class="edSend">
        <button>发送(s)</button>
    </div>
 </div>
  </div>
</template>

<script>
  import editor from '../../components/editor';
  export default {
    name: 'messageContent',
    data(){
       return{
         friend:{
          headerImg:require("../../assets/04.jpg"),
          name:"一花一叶"
         },
         userinfo:{
          headerImg:require("../../assets/userheader.jpg"),
          name:"真真棒"
         },
         record:[
           {content:"你迟怕是有点子飘哦",type:1,sendType:1,key:"1302"},
           {content:"你才有点子飘哦",type:1,sendType:0,key:"1132"},
            {content:"你迟怕是有点子飘哦",type:1,sendType:1,key:"1322"},
           {content:"你才有点子飘哦",type:1,sendType:0,key:"1332"},
            {content:"你迟怕是有点子飘哦",type:1,sendType:1,key:"1342"},
           {content:"你才有点子飘哦",type:1,sendType:0,key:"1532"},
          {content:"你迟怕是有点子飘哦",type:1,sendType:1,key:"1632"},
           {content:"你才有点子飘哦",type:1,sendType:0,key:"1732"},
          {content:"你迟怕是有点子飘哦",type:1,sendType:1,key:"8132"},
           {content:"你有点飘",type:1,sendType:0,key:"1382"},
         ],
       }
    },
    components: { editor },
    methods: {
     listen (event) {
        if (event.keyCode === 13) {
            this.enterToSendeMessage() // 发送文本
            event.preventDefault() // 阻止浏览器默认换行操作
            return false
        }
    },
      enterToSendeMessage(){
          console.log(this.inputText)
          let inputText=this.inputText;
          if(inputText){
            let _message= ` <div  class="  _mess is-right">
                              <div class="_mess-img">
                                  <!-- friend -->
                                  <img v-if='item.sendType==1' :src="friend.headerImg" alt="">
                                  <!-- user -->
                                  <img v-if='item.sendType==0' :src="userinfo.headerImg" alt="">
                              </div>
                              <div class="_mess-content">
                                {{item.content}}
                              </div>
                            </div>`


          }
        }
    }
  }
</script>

<style>
 #messageContent{
     background-color: #E6E5E5;
 }
 .Conheader{
     height:  60px;
     border-bottom: 1px solid gainsboro;
     /* font-weight: 600; */
     padding: 10px 10px 10px 30px;
     font-size: 18px;
     line-height: 50px;
      background: rgb(245, 245, 245);
 }
 .Conmessages{
   height: calc( 100% - 210px)  ;
   background: rgb(245, 245, 245);
   padding: 20px 30px;
   overflow: auto;
 }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
 .Conmessages::-webkit-scrollbar  {  
    width: 5px;  
    height: 10px;  
}  
  
/*定义滑块 内阴影+圆角*/  
 .Conmessages::-webkit-scrollbar-thumb  {  
    border-radius: 5px;  /*滚动条的圆角*/
    background-color: gainsboro;  /*滚动条的背景颜色*/
    max-height: 100px;
}
 ._mess{
    display: -webkit-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    line-height: normal;
    cursor: move;
    align-items: top;
  }
  ._mess ._mess-img{
      position: relative;
      display: inline-block;
      width: 35px;
      height: 35px;
      cursor: pointer;
  }
  ._mess ._mess-img img{
      display: inline-block;
      width: 35px;
      height: 35px;
  }
  ._mess ._mess-content{
      min-height: 35px;
      padding:7px 7px;
      border: 1px solid gainsboro;
      max-width: 204px;
      background: white;
      border-radius: 3px;
      max-width: 500px;
      position: relative;
  }
  ._mess  ._mess-content::after{
    width:8px;
    content: "";
    height:8px;
    background-color: white;
    position: absolute;
    top: 11px;
  }
  ._mess.is-left ._mess-content{
    margin-left: 10px;
  }
 
  ._mess.is-left ._mess-content::after{
    transform:rotate(45deg);
    border-bottom: 1px solid gainsboro;
    border-left: 1px solid gainsboro;
    left: -5px;
  }
  .is-right{
    -webkit-box-direction: reverse;
    -moz-box-direction: reverse;
    -o-box-direction: reverse;
    -webkit-box-orient: horizontal;
    -moz-box-orient: horizontal;
    -o-box-orient: horizontal;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -o-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
 ._mess.is-right ._mess-content{
    margin-right: 10px;
  }
 
  ._mess.is-right ._mess-content::after{
    transform:rotate(45deg);
    border-top: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
    right: -5px;
  }
</style>
