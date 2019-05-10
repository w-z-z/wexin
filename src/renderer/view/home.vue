<template>
  <div  id="home">
      <lefttab/>
      <!-- messgae -->
      <router-view class="Features-View"></router-view>
  </div>
</template>

<script>
  import lefttab from '../components/lefttab';

  export default {
    name: 'landing-page',
    components: { lefttab },
    created: function(){
      this.open();
    },
    methods: {
      open () {
        //  this.$electron.shell.openExternal("www.baidu.com") //打开一个网址
          // this.$electron.clipboard.writeText("www.baidu.com") //剪切板
          //主进程和渲染进程通信并传递参数
          // this.$electron.ipcRenderer.send("message"," send a  message when this was created")
          // this.$electron.ipcRenderer.on("backmessage",function(event,arg){
          //  console.log(arg)
          // })
          //remote 远程对象
          // 1 打开新的窗口 并且在窗口里打开 github
          // let  BrowserWindow=this.$electron.remote.BrowserWindow;
          // let newWindwow = new  BrowserWindow({width:"500",height:"600"})
          // newWindwow.loadURL("https://github.com")
          // 2
          let app = this.$electron.remote.app;
          console.log(app)
      }
    }
  }
</script>

<style>
  #home{
    height: 100%;
    padding-left: 60rpx;
    width: 100%;
  }
  .Features-View{
    width: calc( 100vw - 60px );
    display: inline-block;
    margin-left: 60px;
  }
</style>
