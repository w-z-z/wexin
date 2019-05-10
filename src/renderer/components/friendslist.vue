<template>
 <div>
   <div v-for="item in friendsList"  v-bind:key="item.lableText"  class="friendsList">
    <div class="friends-icon">
        <img :src="item.icon" alt="friends-icon">
    </div>
    <div  class="friends-content">
       {{item.lableText}}
    </div>
  </div>
 </div>
</template>

<script>

  export default {
    name: 'friendsList',
     props:{
         friendsList: {
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
  .friendsList{
      padding: 10px 0;
      width: 100%;
      /* background-color: #DBD9D8; */
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
  }
  .friends-icon{
      height: 40px;
      width:40px;
      
  }
  .friends-icon img{
      height: 100%;
      width:100%;
      border-radius: 5px;
  }
  .friends-content{
      padding-left: 10px;
      line-height: 20px;
      font-size: 14px;
      overflow: hidden;
      max-width: 170px;
      text-overflow:ellipsis;
      white-space: nowrap;
      display: inline-block;
       vertical-align: middle;
  }
</style>
