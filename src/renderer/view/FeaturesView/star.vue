<template>
  <div id="message">
      <div class="message-list">
        <search/>
        <starlist  :starList='starlistdata'/>
      </div>
      <router-view class="Features-content-View" />
  </div>
</template>

<script>
  import search from '../../components/search';
  import starlist from '../../components/starList';
  export default {
    name: 'message',
    data(){
      return{
        starlistdata:[
          {icon:require("../../assets/star.png"),link:"",lableText:"全部收藏"},
          {icon:require("../../assets/star.png"),link:"",lableText:"链接"},
          {icon:require("../../assets/star.png"),link:"",lableText:"相册"},
          {icon:require("../../assets/star.png"),link:"",lableText:"笔记"},
          {icon:require("../../assets/star.png"),link:"",lableText:"文件"},
          {icon:require("../../assets/star.png"),link:"",lableText:"音乐"},
          {icon:require("../../assets/star.png"),link:"",lableText:"标签"},
        ],
      }
    },
    components: { search ,starlist},
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
    height: 100%;
    overflow: hidden;
  }
</style>
