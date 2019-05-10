<template>
  <div>
    <div  v-for="item in messageList"  v-bind:key="item.lableText"   class="messageList">
      <div class="mess-icon">
          <img :src="item.icon"  alt="mess-icon">
      </div>
      <div  class="mess-content">
          <div class="content-header">
              <div class="mess-digest">{{item.messName}}</div>
              <div class="mess-time">{{item.messTime}}</div>
          </div>
          <div class="last-mess">{{item.lastWord}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'messageList',
     props:{
         messageList: {
            type: Array,
            required: true
        },
    },
    // components: {  },
    methods: {
    //   open (link) {
    //     this.$electron.shell.openExternal(link)
    //   }
    }
  }
</script>

<style>
  .messageList{
      padding: 10px 0;
      width: 100%;
      /* background-color: #DBD9D8; */
      display: flex;
      align-items: top;
      justify-content: flex-start;
      flex-direction: row;
  }
  .mess-icon{
      height: 40px;
      width:40px;
      
  }
  .mess-icon img{
      height: 100%;
      width:100%;
      border-radius: 5px;
  }
  .mess-content{
      padding-left: 10px;
      line-height: 20px;
  }
  .mess-digest{
      font-size: 14px;
      width: 98px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      display: inline-block;
       vertical-align: middle;
  }
  .mess-time{
      display: inline-block;
      width: 62px;
      color: gray;
      font-size: 12px;
      vertical-align: middle;
  }
  .last-mess{
      font-size: 12px;
      width: 130px;
      color: gray;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
</style>
