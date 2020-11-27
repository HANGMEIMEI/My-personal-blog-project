/*
* @Author: Administrator
* @Date:   2020-11-27 11:13:26
* @Last Modified by:   Administrator
* @Last Modified time: 2020-11-27 13:28:04
*/
// 引入mongoose第三方模块
const mongoose = require('mongoose');

// 连接数据库
// 第一个要写数据库的地址以及名字
// 这是一个独立的模块， 要到入口文件处引入才可以!
// 起初我们是没有my-Personal-blog-project这个数据库的， 但是
// mongoDB会自动为我们创建的！
mongoose.connect('mongodb://localhost/my-Personal-blog-project', 
 { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('数据库连接成功！'))
	.catch(() => console.log('数据库连接失败！'))