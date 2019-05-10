<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue'
  }
</script>

<style>
  /* CSS */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body , #app{ 
    /* font-family: 'Source Sans Pro', sans-serif;  */
    height: 100vh;
    width: 100vm;
    background: #fcfcfc;
    overflow: hidden
  }
</style>
