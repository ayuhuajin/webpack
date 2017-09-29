#webpack 
=================

# vue2 + webpack + koa + es6 + vue-router + node

###图片与第三方插件 直接从 src 复制至 build  

##html
html文件 利用htmlWebpackPlugin 生成
可指明模板文件的位置 与 生成文件的位置

html 模板 文件
```js
new htmlWebpackPlugin({
    template:'./src/html/index.html', 
    title: 'index',
    filename:'html/index-[hash:5].html',
    inject:false,            //是否自动插入代码,如果需要请设置为true
    date: new Date(),
    minify: {                //文件压缩
        removeComments:true,
        collapseWhitespace:true
    },
    chunks: ['public', 'index','common']   //引入代码模块  
})
```


#css
extract-text-webpack-plugin
将你的行内样式提取到单独css文件夹

```css
const extractCSS = new extractTextPlugin('sass/[name]-[chunkhash].css');
const extractSASS = new extractTextPlugin('sass/[name].css');

```
想要引入css 就在对应的 js中引入
例如在case.js中
```js
import '../sass/case.scss'; (js 语法)
```

#js
webpack.optimize.CommonsChunkPlugin   
可提取公共的文件

```js
new webpack.optimize.CommonsChunkPlugin({
    name:'common', // 注意不要.js后缀   name是提取公共代码块后js文件的名字。
    chunks:['case','public','index','solve']   //只有在vendor中配置的文件才会提取公共代码块至manifest的js文件中
})
```

common 为提取的公共js 文件，名字可自取
chunks 表明 要提取公共模块的几个js文件


```js
{ 
    test: /\.js$/,
    exclude: path.resolve(__dirname,'/node_modules/'), 
    include: path.resolve(__dirname, './src/') ,
    loader: "babel-loader",
    query: {
        presets: ['latest']
    }
}
```

也可单独提取出来配置

Babel的配置文件是 .babelrc ，存放在项目的根目录下


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


###Vue2.X文档  
[Vue 英文](https://vuejs.org/v2/guide/index.html)  
[Vue 中文](https://cn.vuejs.org/v2/guide/index.html)  

###vue-router2.x 文档  
[vue-router2.x 中文](https://router.vuejs.org/zh-cn/index.html)   
[vue-router2.x 英文](https://router.vuejs.org/en/)               

###Vuex2.X 文档  
[Vuex2.X 英文](https://vuex.vuejs.org/en/)  
[Vuex2.X 中文](https://vuex.vuejs.org/zh-cn/)

#vue  ajax   1.axios   2.vue-resource
 
###webapck 2.X 文档  
[webapck 2.X 英文](https://webpack.js.org/)  
[webapck 2.X 中文](https://doc.webpack-china.org/)  

###koa文档  
[koa 英文](http://koajs.com/)        
[koa 中文](http://koa.bootcss.com/) 

###node.js 文档  
[node.js 英文](https://nodejs.org/en/docs/)  
[node.js 中文](http://nodejs.cn/)

###阮一峰 es6 入门  
[阮一峰 es6 入门](http://es6.ruanyifeng.com/)

###git  
[Git](https://github.com/git)



###github项目  
##[GitHub](https://github.com/ayuhuajin)  
##[Blog](http:wsinghai.com)
```html
#基础目录结构
│  .eslintignore    
│  .eslintrc.js
│  .gitignore
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.md
│  temple.html
│  webpack.config.js
│
├─build
│  ├─html
│  │      case.html
│  │      index-7d35b.html
│  │      index.html
│  │      solve.html
│  │
│  ├─images
│  │  ├─base
│  │  │      bulb.png
│  │  │      code.png
│  │  │      favicon.png
│  │  │      upload.png
│  │  │      what.png
│  │  │
│  │  ├─case
│  │  │      code.png
│  │  │
│  │  ├─index
│  │  │      favicon.png
│  │  │
│  │  └─solve
│  │          upload.png
│  │
│  ├─libs
│  │  └─jquery-2.1.4
│  │          jquery.js
│  │
│  ├─sass
│  │      case-ed59a.css
│  │      case.css
│  │      index-808a7.css
│  │      index.css
│  │      solve-429ab.css
│  │      solve.css
│  │
│  └─script
│          case.js
│          common.js
│          index.js
│          public.js
│          solve.js
│
└─src
    ├─html
    │      case.html
    │      index.html
    │      solve.html
    │
    ├─images
    │  ├─base
    │  │      bulb.png
    │  │      code.png
    │  │      favicon.png
    │  │      upload.png
    │  │      what.png
    │  │
    │  ├─case
    │  │      code.png
    │  │
    │  ├─index
    │  │      favicon.png
    │  │
    │  └─solve
    │          upload.png
    │
    ├─libs
    │  └─jquery-2.1.4
    │          jquery.js
    │
    ├─sass
    │      case.scss
    │      index.scss
    │      mReset.scss
    │      public.css
    │      solve.scss
    │
    └─script
            case.js
            index.js
            public.js
            rem.js
            solve.js
```

##关于作者

```js
  var author = {
    nickName  : "wsinghai",
    site : "http://wsinghai.com"
  }
```

##有问题反馈
在使用中有任何`问题`，欢迎反馈给我，可以用以下联系方式跟我交流

* QQ: 455493143
* https://ayuhuajin.github.io/test/


* echo "# webpack" >> README.md
* git init 
* git add README.md
* git commit -m "first commit"
* git remote add origin https://github.com/ayuhuajin/webpack.git
* git push -u origin master
* …or push an existing repository from the command line

* git remote add origin https://github.com/ayuhuajin/webpack.git
* git push -u origin master
* …or import code from another repository
* You can initialize this repository with code from a Subversion, Mercurial, or TFS project.