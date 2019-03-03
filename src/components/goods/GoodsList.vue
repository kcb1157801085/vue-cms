<template>
    <div class="goods-list">
      <!-- <router-link :to="'/home/goodsinfo/'+item.id" tag='div ' class="goods-item" v-for="item in goodslist" :key="item.id"> -->
        <!-- </router-link> -->

<!-- 在网页中，有两种跳转方式 -->
<!-- 方式1：使用a标签的形式叫做标签跳转 -->
<!-- 方式2：使用window.location.href 的形式，叫做编程式导航 -->

      <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt=""> 
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
     <span class="now">￥{{item.sell_price}}</span>
     <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
     <span>热卖中</span>
     <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
            
      </div>

<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>


    </div>
 
</template>

<script>
export default {
    data(){
        return{
        pageindex:1,  //分页的页数
        goodslist:[]  //存放商品列表的数组
        };
    },
    created(){
       this.getGoodsList();
    },
    methods:{
      getGoodsList(){
          this.$http.get("api/getgoods?pageindex="+this.pageindex)
          .then(result =>{
              if(result.body.status===0){
                  //注意：加载更多此处要先拼接一下之前的数据
              this.goodslist =this.goodslist.concat( result.body.message);
              }
          })
      },
      getMore(){
          this.pageindex++;
          this.getGoodsList();
      } ,
      goDetail(id){
          //this.$route 是路由【参数对象】，所有路由中的参数  params query 都属于它
          //this.$router 是一个路由【导航对象】，用它 可以方便的使用js代码，实现路由的前进后退
          //跳转到新的url地址
          //使用js的形式进行路由导航
        //   router.push('/home/goodsinfo/'+id);
        //传递命名的路由
        this.$router.push({name:"goodsinfo" , params:{id}});
      }
    }
 









}
</script>


<style  scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin:4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.title{
    font-size: 14px;
}
p{
  margin: 0px;
  padding: 5px;    
}
.goods-item img{
    width: 100%;
}

.info{
   background-color: #eee;

}
.now{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>
