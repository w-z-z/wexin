<template>
  <div id="messageContent">
    <div class="Conheader">
        <div class=""></div>
      真真棒
    </div>
    <div class="Conmessages">

    </div>
    <div class="Coneditor">

    </div>
   
  </div>
</template>

<script>
  export default {
    name: 'messageContent',
    methods: {
    //   open (link) {
    //     this.$electron.shell.openExternal(link)
    //   }
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
     font-weight: 600;
     padding: 10px 10px 10px 30px;
     font-size: 20px;
     line-height: 50px;
 }
 /* .Conmessages{
   
 } */
</style>
