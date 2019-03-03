 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)


//导入moment格式化时间插件
import moment from 'moment'


//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root ='http://www.liulongbin.top:3005';
//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true ;



//导入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)







// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入自己的router.js路由模块
import router from './router.js'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import mui from './lib/mui/js/mui.js'
Vue.prototype.mui = mui

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站，肯定会调用main.js ,在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到我们的store   
var car= JSON.parse(localStorage.getItem('car') || '[]')


var store = new Vuex.Store({ 
state:{  //this.$store.state.***
   car:car    //将购物车中的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，咱们可以设计成这个样子
   //{id:商品的id, count:要购买的数量,price: 商品的单价 , selected :false} 
},
mutations:{  //this.$store.commit('方法的名称'," 按需传递唯一的参数")
addToCar(state,goodsinfo){//点击加入购物车，把商品信息保存到store中的car 上
    //分析：1、如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      //2、如果没有，则直接把商品数据 push到car中即可 
      //假设在购物车中没有找到对应到商品
var flag = false;

      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          item.count+=parseInt(goodsinfo.count)
          flag = true
          return true
        } 
      })
      //如果，循环完毕，得到的flag还是false 则直接把商品数据 push到购物车中 
   if(!flag){
     state.car.push(goodsinfo)
   }
   //当更新car 之后，把car 数组，存储到本地的localStorage 中
   localStorage.setItem('car', JSON.stringify(state.car))

},
updateGoodsInfo(state,goodsinfo){
  //修改购物车中商品的数量值
  state.car.some(item=>{
    if(item.id==goodsinfo.id){
      item.count=parseInt(goodsinfo.count)
      return true
    }
  })
//当修改完商品的数量，把最新的购物车数据保存到本地存储中
  localStorage.setItem('car', JSON.stringify(state.car))
},
removeFormCar(state,id){
  //根据id，从store中的购物车中删除对应的那条商品数据
    state.car.some((item,i)=>{
      if(item.id==id){
        state.car.splice(i,1)
        return true;
      }
    })
    //将删除完毕后的，最新的购物车数据，同步到本地存储中
    localStorage.setItem('car', JSON.stringify(state.car))
},
  updateGoodsSelected(state,info){
    state.car.some(item => {
      if(item.id == info.id){
        item.selected = info.selected
      }
    })
    //最新的购物车数据，同步到本地存储中
    localStorage.setItem('car', JSON.stringify(state.car))
  }
    
},
getters:{  //this.$store.getters.***
    getAllCount(state){  
       var c = 0 ;
       state.car.forEach(item =>{
         c+= item.count
       })
       return c ;
    },
    getGoodsCount(state){
      var o ={}
      state.car.forEach(item =>{
         o[item.id]=item.count
      })
      return o
    } ,
    getGoodsSelected(state){
      var c = {}
      state.car.forEach(item =>{
        c[item.id] = item.selected
      })
      return c;
    },
    getGoodsCountAndAmount(state){
      var o ={
        count:0,  //勾选的数量
        amount:0   //勾选的总价

      }
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count
          o.amount+= item.price* item.count
        }
      })
      return o
    }
}
})








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, //挂载路由对象到VM实例上
  store    //挂载vuex状态管理对象
})





