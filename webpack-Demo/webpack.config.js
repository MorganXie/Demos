var webpack = require('webpack');
var path  = require ('path');
module.exports = {
	//定义打包入口文件
	entry:'./js/index.js',
	//定义打包输出文件路径
	output:{
		path:path.resolve(__dirname, 'bin/'),
		filename:'webpack.merge.js'
	}
	
}