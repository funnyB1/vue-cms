import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import './lib/MUI/css/mui.css'
import './lib/MUI/css/icons-extra.css'
import './lib/MUI/fonts/mui-icons-extra.ttf'

import router from './router.js'

var vm =new Vue({
          el:"#app",
          render:c => c(app),
          router




})