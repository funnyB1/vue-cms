import VueRouter from 'vue-router'

import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import shopcar from './components/tabbar/Shopcar.vue'
import search from './components/tabbar/Search.vue'





var router=new VueRouter({

   routes:[

   {path:'/home',component:home},
   {path:'/member',component:member},
   {path:'/shopcar',component:shopcar},
   {path:'/search',component:search}
   ],
   linkActiveClass:'mui-active'

})

export default router