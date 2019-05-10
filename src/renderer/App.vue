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
/*页面公共样式*/
/* 禁用iPhone中Safari的字号自动调整 */
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
/* 去除iPhone中默认的input样式 */
input[type="submit"], input[type="reset"], input[type="button"], input, button {  resize: none;  }
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {  -webkit-appearance: none;  }
button{  border: none;outline:none }
/* 设置HTML5元素为块 */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {  display: block;  }
/* 图片自适应 */
img {
  max-width: 100%;
  height: auto;  width: auto\9;
  -ms-interpolation-mode: bicubic;
}
/* 初始化 */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form,
table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  margin: 0;
  padding: 0;
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*取消链接高亮*/ ;
}
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #333333;
  font-size: 14px;
  min-width: 800px;
  min-height: 500px;
  height: 100vh;
  width: 100vm;
  background: #fcfcfc;
  overflow: hidden
}
#app{
  height: 100%;
  width: 100%;
}

textarea:focus,input:focus{
outline: none;
}
button:focus{
outline: none;
border-color: transparent;
}
select:focus{
outline: none;
}
em, i {
  font-style: normal;
}
h1, h2, h3, h4, h5, h6{
  font-weight: 400;
}
strong {
  font-weight: normal;
}

.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.clearfix {
  zoom: 1;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
}

a:hover, a:active, a:visited {
  text-decoration: none;
  color: inherit
}
ul, ol {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-family: Microsoft YaHei; margin: 0
}

img {
  border: none;
  vertical-align: middle;
}

body, html {
  width: 100%;
  margin: 0 auto;
  font-family: Microsoft YaHei;
  position: relative;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  color: #333
}
.shadow{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  background: rgba(2, 2, 2, 0.53);
}
.warp{
  width: 100%;
  max-width: 1200px;
  margin:  0 auto;
}
/*用户中心的页面*/
.usermodel{
  width: 100%;
  min-width: 1200px;
}
._block {
  background: white;
  height: 50px;
}
.none{
  display: none;
}
.left{
  text-align:left ;
}
.right{
  text-align:right ;
}
.center{
  text-align:center ;
}
.dispaly_inline{
  display: inline-block;
  vertical-align: top;
}
.bgshadw{
  -webkit-box-shadow: 0px 0.25rem 0.27rem 0px rgba(229, 233, 239, 0.57);
  box-shadow: 0px 0.25rem 0.27rem 0px rgba(229, 233, 239, 0.57);
}


</style>
