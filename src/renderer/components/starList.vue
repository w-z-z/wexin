<template>
  <div>
    <div v-for="item in starList"  v-bind:key="item.lableText"  class="starList">
        <div class="star-icon">
            <img :src="item.icon" alt="star-icon">
        </div>
        <div  class="star-content">
        {{item.lableText}}
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'starList',
    props:{
         starList: {
            type: Array,
            required: true
        },
    },
    created: function(){
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
  .starList{
      padding: 10px 0;
      width: 100%;
      /* background-color: #DBD9D8; */
      display: flex;
      align-items: bottom;
      justify-content: flex-start;
      flex-direction: row;
  }
  .star-icon{
      height: 20px;
      width:  20px;
      
  }
  .star-icon img{
      height: 100%;
      width:100%;
      border-radius: 5px;
  }
  .star-content{
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
      overflow: hidden;
      max-width: 170px;
      text-overflow:ellipsis;
      white-space: nowrap;
      display: inline-block;
       vertical-align: middle;
  }
</style>
