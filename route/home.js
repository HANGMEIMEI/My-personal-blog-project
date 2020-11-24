/*
* @Author: Active code page: 65001
lvhang
* @Date:   2020-11-24 18:54:52
* @Last Modified by:   Active code page: 65001
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
* @Last Modified time: 2020-11-24 19:28:22
*/
// 创建博客的展示页面路由！
// 创建路由要用到express router方法！
// 必须先引入express框架！
const express = require('express');
// 创建博客展示页面路由！ 返回值是一个路由对象！
// 用变量去接受！
const home = express.Router();
// console.log(home);

// 接下来我们就可以在home 这个路由下面挂载一个二级路由了！

// 第一个参数是路径， 第二个参数是回调函数!
home.get('/', (req, res) => {
	// 用res向叶面响应一些内容！
	res.send('lvhang-这是博客的首页!')
})

// 因为另一个js文件要到路由， 所以我们要把他暴露出去！
// 将路由对象作为模块成员进行导出!
module.exports = home;

// console.log(module.exports)


