<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
   <p class="subtitle">
   <span>发表时间：{{photoinfo.add_time| dateFormat}}</span>
   <span>点击：{{photoinfo.click}}次</span>
   </p>


<hr>
<!-- 缩略图区域 -->
 <vue-preview :slides="list" @close="handleClose"></vue-preview>

  <div class="content" v-html="photoinfo.content"></div> 
 <!-- 放置一个现成的评论子组件 -->
    
<cmt-box :id="id"></cmt-box>









  </div>
</template>
<script>
//1、导入评论子组件
import comment from '../subcomponents/comment.vue'


export default {
    data(){
        return{
       id:this.$route.params.id,  //从路由中获取到的图片id 
       photoinfo:{},//图片详情
       list:[] //缩略图的数组
        };
    },
    created(){
        this.getPhotoInfo();
       
    },
    methods:{
       getPhotoInfo(){
          //获取图片的详情
         this.$http.get('api/getimageInfo/'+this.id).then(result=>{
             if(result.body.status === 0){
     this.photoinfo = result.body.message[0];
             }
         })   
       },
     getThumbs(){
         this.$http.get('api/getthumimages/'+this.id).then(result =>{
        if(result.body.status ===0){
            result.body.message.forEach(item => {
                item.w = 600;
                item.h = 400;
            });
            //把完整的数据保存到list中
            this.list = result.body.message;
        } 
         })
     },
      handleClose () {
        console.log('close event')
      }
    },
    components:{  //注册评论子组件
        'cmt-box':comment
    }
}
</script>







<style scoped> 
.photoinfo-container{
     padding: 3px;

}
.photoinfo-container h3{
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin:15px 0;

}
.subtitle{
     display: flex;
     justify-content: space-between;
     font-size: 13px;

}
.content{
    font-size: 13px;
    line-height: 30px;
}
</style>



