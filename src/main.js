 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入MUI
import './lib/mui/css/mui.min.css'




Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
