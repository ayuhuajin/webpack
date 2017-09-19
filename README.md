# simba-v9.0前端规范

> * **浏览器兼容要求** ： `ie9+（包括IE9）` `谷歌` `火狐` 等其他一些主流浏览器
> * **分辨率兼容要求** `1366*768` 至 `1920*1080`
> * 劳烦UI出一个**浏览器不兼容友情提示页面**告知用户需更换合适的浏览器
> * `404等页面` UI也应该提供，部分页面排版应考虑**无数据**和**数据过多**时这两个极端情况
> * 若涉及过多的图标，UI应在**阿里巴巴字体图标库**生成图标供web前端使用
> * 如有不合理之处，可提出共同探讨并稍作修改

---

## 通用
- [x] 文件编码采用**UTF-8**格式
- [x] 使用**4个空格**作为缩进，**sublime编辑器**可以把**tab转为空格**
- [x] 所有文件结尾留一个空行，多余的要删除
- [x] 开发阶段一律使用未压缩的文件，后期会使用gulp对相关文件进行压缩
- [x] 养成**合理注释**的习惯，该换行的换行，该缩进的缩进，该空格的空格，**不要全部堆在一起**

---

## html书写规则
- [x] 文件名称使用中文命名，形如 `登入.html` `下载.html`
- [x] 每个页面的**body**添加一个形如 `.page-index` `.page-login`的类名来表示 `css命名空间`
- [x] 标签属性使用双引号，删除空值属性，属性书写顺序 `id` > `css` > `其余属性任意`
- [x] 若无特别需求，反对写 `style="color:red;"` `onclick="alert('不建议把脚本写html标签上')"`
- [x] 不要指定引入资源所带的具体协议。当引入图片或其他媒体文件，还有样式和脚本时，URLs 所指向的具体路径，不要指定协议部分（http:, https:），除非这两者协议都不可用。
```html
/*不推荐*/
<script src="http://cdn.com/foundation.min.js"></script>
/* 推荐：*/
<script src="//cdn.com/foundation.min.js"></script>
```
###html模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <title>主体框架</title>
    </head>
    <body class="page-frame">
        <!-- 框架头部 开始 -->
        <div class="head-box clearfix">

            <!-- 右侧菜单 开始 -->
            <ul class="menu-list clearfix">
                <li>
                    <i class="iconfont icon-gg"></i>
                    <span>公告</span>
                    <em class="animated">88</em>
                </li>
            </ul>
            <!-- 右侧菜单 结束 -->

            <!-- 全屏按钮 开始 -->
            <a class="btn-full-page iconfont icon-zdh" href="javascript:;"></a>
            <!-- 全屏按钮 结束 -->
        </div>
        <!-- 框架头部 结束 -->

        <!-- 脚本引入 开始 -->
        <script src="../js/page.js"></script>
        <!-- 脚本引入 结束 -->
    </body>
</html>
```
- [x] 所有页面的模板结构都基于 `模板.html`页面

---

##css书写规则

- [x] 以形如 `.p-header` `.p-footer` 的类名表明该样式是可以被复用的
- [x] `css预处理器` 采用 `sass`，相同性质的属性应写一行
- [x] 某个页面的样式文件命名 采用 `pageIndex.scss` 的形式
```css
// 二级菜单
.inner-menu-wrap{

    & > li{
        position: relative;
        padding-left:19px;
        &:before{
            position: absolute; content: "";
            left:0;top:0;bottom:0;
            width:3px;
            transform: scaleY(0);
            transition-duration: 0.2s;
            background:#f90;
        }

        &:hover:before{
            transform: scaleY(1);
        }
    }
}
```

- [x] url() 、属性选择符、属性值使用双引号
```css
/* 不建议这么做 */
html{font-family: 'open sans', arial, sans-serif;}
.selector[type='text']{color:#333;}
/* 建议这么做 */
html{font-family: "open sans", arial, sans-serif;}
.selector[type="text"]{color:#333;}
```

---

##js书写规则
- [x] 变量命名规范
```js
s：表示字符串。例如：sName，sHtml;
n：表示数字。例如：nPage，nTotal;
b：表示逻辑。例如：bChecked，bHasLogin;
a：表示数组。例如：aList，aGroup;
r：表示正则表达式。例如：rDomain，rEmail;
f：表示函数。例如：fGetHtml，fInit;
o：表示以上未涉及到的其他对象，例如：oButton，oDate;
```

- [x] 变量、函数、函数的参数 使用 驼峰 命名法
```js
var oLoadingModules = {};
function fSetVerificCode(object,nTotalTime)
{
    ...
}
```

- [x] 常量全部字母大写，单词间下划线分隔的命名方式
```js
var HTML_ENTITY = {};
```

- [x] 私有属性、变量和方法以下划线 _ 开头
```js
var _oPrivateMethod = {};
var _this = $(this);
```
---

#simba-v9.0前端目录结构

```html
simba-v9.0
    │  gulpfile.js   【gulp编译配置脚本】
    │  package.json  【组件依赖关系】
    │  readMe.md     【该项目说明文档】
    │
    ├─build  【产出目录】
    │  ├─css
    │  ├─html
    │  ├─images
    │  ├─scripts
    │  └─widget
    └─src    【源码目录】
        ├─html
        │      价格.html
        │      模板.html
        │
        ├─images
        │  ├─base
        │  │      android.png
        │  │      ke-fu.png
        │  │
        │  ├─demo
        │  │      01.jpg
        │  │      02.jpg
        │  │
        │  └─index
        │          banner-01.jpg
        │
        ├─sass
        │      main.scss      【样式主入口】
        │      pageIndex.scss 【首页页面对应的sass】
        │      public.scss    【复用样式】
        │      resetPc.scss   【基础重置样式】
        │
        ├─scripts
        │      public.js      【公用脚本】
        │      tab.js         【自己封装的选项卡脚本】
        │      throttle.js    【自己封装的函数节流脚本】
        │
        └─widget              【第三方插件】
            └─jquery-v1.11.3  【JQ插件】
                    jquery.js
```

##github项目


* [github](http://mouapp.com/) 

##关于作者

```javascript
  var ihubo = {
    nickName  : "wsinghai",
    site : "http://wsinghai.com"
  }
```


##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(xxxxx@gmail.com, 把#换成@)
* QQ: 455493143
* twitter: [@ihubo](http://xxxxxxxx)
* https://ayuhuajin.github.io/test/


echo "# webpack" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/ayuhuajin/webpack.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/ayuhuajin/webpack.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.