# vue-cms

> vue项目

##用（传统方式）命令行把修改过后的代码上传到码云
1    git add .
2    git commit -m "提交信息 "
3    git push


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



项目流程
##一、制作首页APP组件
1、完成header区域，使用Mint-UI中的header组件
2、制作底部的Tabbar区域，使用的是MUI的Tabbar.html
+制作购物车小图标的时候，先把扩展图标的css样式，拷贝到项目中，在把字体样式拷贝到项目中，再在main.js里面引用
3、要在中间区域放置一个router-view俩展示路由匹配到的组件
##改造tabbar为router-link
1设置路由高亮
2点击tabbar中的路由链接，展示对应的路由组件


制作首页轮播图布局

加载首页轮播图数据
1、获取数据，使用 vue-resource
2、使用vue-resource的this.$http.get获取数据
3、获取到的数据，要保存到data 身上
4、使用v-for循环渲染每个item项



改造新闻资讯路由链接


新闻资讯页面制作
1 绘制界面  使用 MUI  中的media-list
2、使用vue - resource 获取数据
3、 渲染真实数据


实现 新闻资讯列表   点击跳转到新闻详情
1、把列表中的每一项改造为 router-link 同时，在跳转的时候应该提供唯一的id标识符
2、创建新闻详情的组件页面  newsinfo.vue
3、在路由模块中，将新闻详情的路由地址和组件页面对应起来

实现新闻详情的页面布局 和数据渲染 

单独封装一个comment.vue评论子组件
1 先创建一个单独的comment.vue 组件模版
2 在需要使用 comment组件的页面中，先手动导入coment组件
   import comment from './comment.vue'
3 在父组件中，使用components 属性，将刚才导入 comment 组件，注册为子级的子组件
4 将注册子组件的时候，注册名称，以标签的形式在页面中引用即可


获取所有的评论数据显示到页面中


实现点击加载更多评论的功能
1、为加载更多按钮，绑定点击事件，在事件中去请求下一页数据
2、点击加载更多，让pageIndex++ 然后重新调用this.getComments() 方法重新获取最新一页的数据
3、为了防止新数据覆盖老数据的情况，我们应该 让老数据cocat拼接上新数据

发表评论
1、把文本框做双向数据绑定
2、为发表按钮绑定一个事件
3、校验评论内容是否为空，如果为空，则toast 提示用户评论内容不能为空
4、通过vue-resource 发送一个请求，把评论内容提交给服务器
5、当发表评论成功后，重新刷新列表，以查看最新的评论
   ++ 如果调用getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
   换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论，追加到data中comments的开头；这样，就能完美实现刷新评论列表的需求    




##改造图片分享按钮为路由的链接并显示对应的组件页面
##绘制图片列表 组件页面结构并美化样式

1、制作顶部的滑动条
2、制作底部的图片列表

制作顶部滑动条的坑
1、需要借助于 MUI 中的 tab-top-webview-main.html  
2、需要把slider 区域的mui-fullscreen 类去掉 
3、滑动条无法正常触发滑动，通过检查官方文档，发现这是js组件，需要被初始化一下
导入   mui.js 

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
}); 

4、我们在初始化滑动条的时候，导入mui.js 但是，服务台报错，webpack 打包的时候出现严格模式，导致mui.js里面的caller等语法不能用，解决方案
1、：mui.js   中的非严格模式的代码改掉，不现实
2、把webpack打包的时候的严格模式禁用掉
  
npm install babel-plugin-transform-remove-strict-mode -D
5、刚进入图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化滑动条，必须要等DOM元素加载完毕，所以，我们把初始化滑动条的代码，搬到了mounted 生命周期函数中
6、当滑动条调试ok后，发现tabbar 无法正常工作中，这时候，我们需要把每个tabbar按钮的样式中 ‘mui-tab-item’ 重新改一下名字；

### 制作图片列表区域
1、图片列表需要使用懒加载技术，我们可以用 mint-ui 提供的现成的组件lazy-load 
2、根据lazy-load 的使用文档，尝试使用
3、渲染图片列表数据 

###  实现点击图片跳转到图片详情页面
1、在改造li成router-link  的时候，需要使用tag 属性指定要渲染为那种元素

##  实现详情页面的布局和美化，同时获取数据渲染页面

##   实现 图片详情中缩略图的功能
1、使用插件  vue-preview 这个缩略图插件
2、获取到所有的图片列表，然后使用v-for指令渲染数据
3、注意img 标签上的class不能去掉
4、注意 每个图片数据对象中，必须有w 和 h 属性

##  绘制  商品列表  页面基本结构并美化


##   尝试在手机上去进行项目的预览和测试
1、要保证自己的手机可以正常运行；
2、要保证手机和开发项目的电脑处于同一个wifi环境中，也就是说手机可以访问到电脑的ip
3、打开自己的项目中的package.json 文件，在dev脚本中，添加一个 --host指令，把当前电脑的wifi ip地址
设置为 --host指令
 +如何查看自己电脑所处wifi的ip呢，在cmd 终端中运行 'ipconfig' ,查看无线网的ip地址







