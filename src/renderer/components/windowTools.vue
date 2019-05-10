<template>
  <div class="toolbox">
          <ul class="toollist">
              <li>
               <img @click="windowTools('setWindowTop')" src="~@/assets/systempan.png" alt="toollist-icon">
              </li>
               <li>
               <img  @click="windowTools('small')"  src="~@/assets/small.png" alt="toollist-icon">
              </li>
               <li>
               <img  @click="windowTools('full')"  src="~@/assets/full.png" alt="toollist-icon">
              </li>
               <li>
               <img  @click="windowTools('close')"  src="~@/assets/close.png" alt="toollist-icon">
              </li>
          </ul>
    </div>
</template>

<script>
import { fail } from 'assert';
import { truncate } from 'fs';

  export default {
    name: 'starList',
    props:{
        //  starList: {
        //     type: Array,
        //     required: true
        // },
    },
    data(){
        return{
          biggest:false,
        }
    },
    created: function(){
    },
    // components: {  },
    methods: {
      windowTools (link) {
          let that = this;
        switch(link){
            case "setWindowTop":
                this.$electron.ipcRenderer.send('setWindowTop')
            break;
            case "small":
                this.$electron.ipcRenderer.send('hide-window')
            break;
            case "full":
               if(that.biggest){
                this.$electron.ipcRenderer.send('orignal-window') 
                this.biggest=false;
               }else{
                this.$electron.ipcRenderer.send('show-window')      
                 this.biggest=true; 
               }
            break;
            case "close":
              this.$electron.ipcRenderer.send('window-all-closed')
            break;
        }
      }
    }
  }
</script>

<style>
  .toolbox{
     width: 100%;
     height: 30px;
     display: flex;
     justify-content: flex-end;
     background-color: #E6E5E5;
     align-items: center;
     /* -webkit-user-select: none;
     -webkit-app-region: drag; */
  }
 .toollist{
     height: 15px;
     width: 150px;
 }
 .toollist>li{
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    cursor: pointer;
 }
  .toollist>li:hover{
    background-color: gainsboro;
 }
  .toollist>li>img{
     width: 13px;
 }
</style>
