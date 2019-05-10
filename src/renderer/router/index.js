import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',//首页
      component: require('@/view/home').default,
      redirect:{name:'message'},
      children:[
        {
           path:"/message",name:"message",meta:"用户中心",
           component:resolve=>require(["@/view/FeaturesView/message"],resolve),
           redirect:{name:'messageContent'},
           children:[
            {
               path:"/messageContent",name:"messageContent",meta:"消息内容",
               component:resolve=>require(["@/view/FeaturesView/messageContent"],resolve),
          },
          ]
      },
        { path:"/person",name:"person",meta:"通讯录",component:resolve=>require(["@/view/FeaturesView/person"],resolve)},
        { path:"/star",name:"star",meta:"收藏",component:resolve=>require(["@/view/FeaturesView/star"],resolve)},
        { path:"/menu",name:"menu",meta:"菜单",component:resolve=>require(["@/view/FeaturesView/menu"],resolve)},
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
