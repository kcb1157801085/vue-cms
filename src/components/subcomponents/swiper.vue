<template>
    <div>

<!-- 在组件中使用v-for循环的话，一定要用key -->
<!-- 将来，谁使用此轮播图组件，谁为我们传递lunbotuList -->
<!-- 此时，lunbotuList 应该是父组件向子组件传值来设置用  props -->
        <mt-swipe :auto="4000">
     <!-- 在组件中，使用v-for循环的时候一定要绑定key -->
  <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
      <img :src="item.img" alt="" :class="{'full':isfull}">
  </mt-swipe-item>

        </mt-swipe>


    </div>
<!-- 分析：为什么商品评论中的 轮播图图片那么丑：
1、首页中的图片，它的宽高都是使用100% 的宽度
2、在商品详情页面中，轮播图的图片，如果也使用宽高为100%的话，页面不好看
3、商品详情页面的轮播图，期望高度100%，宽度自适应
4、经过分析，得到问题原因：首页中的轮播图和商品详情中的轮播图，分歧点是宽度到底是100%还是自适应
5、既然这两个轮播图，其他方面都是没有冲突的，只有宽度有分歧，那么，我们可以定义一个属性，让使用轮播图的调用者，
手动指定是否为100%的宽度
 -->






</template>
<script>
export default {
    props:["lunbotuList","isfull"]
};
</script>  
<style scoped>
.mint-swipe{
    height: 200px;
}

.mint-swipe-item{
    text-align: center;
}
.mint-swipe-item img{
    /* width: 100%; */
    height: 100%;         
}
.full{
    width: 100%;
}
</style>
