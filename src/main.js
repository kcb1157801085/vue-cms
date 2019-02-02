 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)





//导入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'









// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入自己的router.js路由模块
import router from './router.js'






Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router //挂载路由对象到VM实例上
})
