<template>
  <div class="searchInput">
    <div class="searchInputBox">
      <input  type="text"/>
    </div>
    <div class="addSome">
      ＋
    </div>
  </div>
</template>

<script>

  export default {
    name: 'searchInput',
    // components: {  },
    methods: {
    //   open (link) {
    //     this.$electron.shell.openExternal(link)
    //   }
    }
  }
</script>

<style>
  .searchInput{
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
     /* -webkit-user-select: none;
     -webkit-app-region: drag; */
  }
  .searchInputBox{
    height: 100%;
  }
  .searchInputBox input{
    border: none;
    background: #DBD9D8;
    height: 100%;
    border-radius: 5px;
  }
  .addSome{
    height: 25px;
    width: 25px;
    font-size:15px;
    line-height: 25px;
    background: #DBD9D8;
    color: gray;
    border-radius: 5px;
    text-align: center;
  }
</style>
