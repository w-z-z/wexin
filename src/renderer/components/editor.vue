<template>
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
</template>

<script>

  export default {
    name: 'editor',
     data(){
        return{
          inputText:"",
        }
    },
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
      }
    }
  }
</script>

<style>
  #editor{
    height: 150px;
    background-color: white;
    border-top: 1px solid gainsboro;
    padding: 10px 30px;
  }
  .edContent{
    height: 60px;
    margin: 8px 0;
  }
  #edContent{
      height: 100%;
      width: 100%;
      border: none;

  }
  .edTools{
    display: flex;
    align-items: center;
    min-height: 30px;
    justify-content: space-between;
  }
  .edTools ul>li,.edTools ul>li>img{
    height: 20px;
    list-style: none;
    float: left;
    margin: 0 2px;
  }
  .edSend{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .edSend>button{
      padding: 5px 8px;
      background-color: gainsboro;
      color: grey;
      border: none;
  }
</style>
