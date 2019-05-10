<template>
  <div class="left-tab">
    <div class="tabBox">
        <div class="userHeaderImg">
            <img   class="tab-bar-img" src="~@/assets/userheader.jpg" alt="userHeaderImg">
        </div>
        <div  class="tab-bar">
          <router-link to="/message">
            <img  class="tab-bar-img" src="~@/assets/message.png" alt="tab-bar-img">
          </router-link>
        </div>
        <div   class="tab-bar">
           <router-link to="/person">
             <img   class="tab-bar-img"  src="~@/assets/person.png" alt="tab-bar-img">
           </router-link>
        </div>
        <div    class="tab-bar">
           <router-link to="/star">
             <img   class="tab-bar-img"  src="~@/assets/star.png" alt="tab-bar-img">
           </router-link>
        </div>
    </div>
    <div class="tabBox lasttab">
        <div class="tab-bar">
          <router-link to="/menu">
            <img   class="tab-bar-img"  src="~@/assets/menu.png" alt="tab-bar-img">
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'left-tab',
    // data:{
    //      navtabList:[
    //        {link:"",aclink:"",routerLink:""}
    //      ]  
    // },
    // components: {  },
    methods: {
     
    }
  }
</script>

<style>
  .left-tab{
    height: 100%;
    width: 61px;
    background-color: #2D2928;
    display: flex;
    position: absolute;
    /* -webkit-user-select: none;
    -webkit-app-region: drag; */
    left: 0;
    top: 0;
    align-items: center;
    flex-direction: column;
    justify-content:space-between;
    padding: 20px 0;
  }
  .tabBox  .userHeaderImg{
     height: 35px;
     width: 35px; 
     border-radius: 15px;
      margin: 0px auto;
  }
  .tab-bar{
    height: 28px;
    width: 28px; 
    margin: 20px auto;
    text-align: center;
    cursor: pointer;
  }
  .tab-bar-img{
    height: 100%;
  }
  .lasttab{
    margin-bottom: 0;
  }
</style>
