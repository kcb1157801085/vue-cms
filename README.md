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
























