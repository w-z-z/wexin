<template>
  <div id="message">
      <div class="message-list">
        <search/>
        <messagelist :messageList='messagelist'/>
      </div>
      <windowtools class="windowtools"/>
      <router-view class="Features-content-View" />
  </div>
</template>

<script>
  import search from '../../components/search';
  import messagelist from '../../components/messageList';
  import windowtools from '../../components/windowTools';
  export default {
    name: 'message',
     data(){
      return{
        messagelist:[
          {icon:require("../../assets/userheader.jpg"),link:"",messName:"DAnn蛋",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/01.jpg"),link:"",messName:"小肚肚",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/02.jpg"),link:"",messName:"一花一一",messTime:"下午 4：00",lastWord:"你有点飘"},
          {icon:require("../../assets/03.jpg"),link:"",messName:"花花哈哈",messTime:"上午 1：30",lastWord:"你有点飘"},
          {icon:require("../../assets/04.jpg"),link:"",messName:"Luciaww",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/05.jpg"),link:"",messName:"丫头哇",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/06.jpg"),link:"",messName:"哼哼",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/07.jpg"),link:"",messName:"精致猪",messTime:"下午 3：00",lastWord:"你有点飘"},
          {icon:require("../../assets/08.jpg"),link:"",messName:"哦哟哟",messTime:"下午 3：00",lastWord:"你有点飘"},
        ],
      }
    },  
    components: { search,messagelist,windowtools },
    methods: {
    //   open (link) {
    //     this.$electron.shell.openExternal(link)
    //   }
    }
  }
</script>

<style>
  #message{
    height: 100%;
    padding-left:250px;
    position: relative;
  }
  .message-list{
   display: inline-block;
   height: 100vh;
   overflow: auto;
   width: 250px;
   background-color: #E6E5E5;
   padding: 15px;
   padding-bottom: 0;
   position: absolute;
   top: 0;
   left: 0;

  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
 .message-list::-webkit-scrollbar  {  
    width: 5px;  
    height: 10px;  
}  
  
/*定义滑块 内阴影+圆角*/  
 .message-list::-webkit-scrollbar-thumb  {  
    border-radius: 5px;  /*滚动条的圆角*/
    background-color: gainsboro;  /*滚动条的背景颜色*/
    max-height: 100px;
}
  .Features-content-View{
    width: 100% ;
    height: calc( 100% - 30px)  ;
    overflow: hidden;
  }
</style>
