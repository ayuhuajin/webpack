const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');//html模板生成器
const cleanPlugin = require('clean-webpack-plugin');//文件夹清除工具
const copyWebpackPlugin = require('copy-webpack-plugin');//文件拷贝
const extractTextPlugin = require('extract-text-webpack-plugin');//将你的行内样式提取到单独css文件夹
const extractCSS = new extractTextPlugin('sass/[name]-[chunkhash].css');
const extractSASS = new extractTextPlugin('sass/[name].css');


module.exports={
	
	entry: {
		"public" : './src/script/public.js',
		"index"  : './src/script/index.js',
		"solve"  : './src/script/index.js',
		"case"   : './src/script/index.js'
	},
	output:{
		path: path.resolve(__dirname + '/build/'),
		filename:'script/[name].js'		
	},
	module:{
		loaders:[

			{   
        test:/\.css$/, 
				use:extractCSS.extract(['css-loader','postcss-loader'])
			},

			{
				test: /\.scss$/i,
				use: extractSASS.extract([ 'css-loader', 'sass-loader','postcss-loader'])
			},

			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader?&name=images/[name].[ext]',
			},

			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=2000&name=images/[name].[ext]'
				/*query:{
					name:path.resolve(__dirname, './build/images/[name]-[hash:8].[ext]')
				}*/
			},

			{ 
				test: /\.js$/,
				exclude: path.resolve(__dirname,'/node_modules/'), 
				include: path.resolve(__dirname, './src/') ,
				loader: "babel-loader",
				query: {
					presets: ['latest']
				}
			}

		]
	},

	plugins: [

      //1.清空build文件夹
		  new cleanPlugin(['build']/*, {
          root: '', // An absolute path for the root  of webpack.config.js
          verbose: false,// Write logs to console.
          dry: true // Do not delete anything, good for testing.
      }*/),

      //1.压缩代码
      //2.排除关键字
      /*new webpack.optimize.UglifyJsPlugin({ 
          compress: {
            warnings: false
          },
          except: ['$super', '$', 'exports', 'require']
      }),*/


      //new webpack.optimize.UglifyJsPlugin(),//压缩
      new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
          mangle: {
              except: ['$super', '$', 'exports', 'require', 'module', '_']
          },
          compress: {
              warnings: false
          },
          output: {
              comments: false,
          }
      }),

      //1.拷贝图片文件夹
      //2.拷贝libs文件夹
  		new copyWebpackPlugin([
  				{from: './src/images', to: 'images'},
  				{from: './src/libs', to: 'libs'}     
  		]),

      //bannerPlugin可以将任何字符串加到生成的bundle文件的顶部（例如版权信息等）
    	new webpack.BannerPlugin('This file is created by wsinghai'),

    	// 提供公共代码
		  new webpack.optimize.CommonsChunkPlugin({
            name:'common', // 注意不要.js后缀   name是提取公共代码块后js文件的名字。
            chunks:['case','public','index','solve']   //只有在vendor中配置的文件才会提取公共代码块至manifest的js文件中
      }),

      //调整模块的打包顺序，用到次数更多的会出现在文件的前面
      new webpack.optimize.OccurrenceOrderPlugin(),

      //html 模板 文件
    	new htmlWebpackPlugin({
    		template:'./src/html/index.html',
      		title: 'index',
      		filename:'html/index-[hash:5].html',
      		inject:false,
      		date: new Date(),
      		minify: {
      			removeComments:true,
      			collapseWhitespace:true
      		},
      		chunks: ['public', 'index','common']
    	}),

    	new htmlWebpackPlugin({
    		template:'./src/html/index.html',
      		title: 'the second',
      		filename:'html/index.html',
      		inject:'body',
      		chunks: ['index','common']
    	}),

    	new htmlWebpackPlugin({
    		template:'./src/html/solve.html',
      		title: 'the second',
      		filename:'html/solve.html',
      		inject: 'body',
      		chunks: ['solve','common']
    	}),

    	new htmlWebpackPlugin({
    		template:'./src/html/case.html',
      		title: 'the second',
      		filename:'html/case.html',
      		inject: 'body',
      		chunks: ['case','common']
    	}),

    	extractCSS,
    	extractSASS

  	]
} 