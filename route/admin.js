/*
* @Author: Active code page: 65001
lvhang
* @Date:   2020-11-24 18:55:54
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
* @Last Modified time: 2020-11-24 23:34:43
*/
// 创建博客的管理页面路由@！
// 创建路由要用到express Router方法！
const express = require('express');
// 创建博客管理页面路由！ 返回值是一个路由对象！
// 用变量去接受！
const admin = express.Router();
// console.log(admin);

// 接下来我们就可以在admin 这个路由下面挂载一个二级路由了！

// 第一个参数是路径， 第二个参数是回调函数!
// admin.get('/', (req, res) => {
// 	// 用res向叶面响应一些内容！
// 	res.send('lvhang-这是博客的管理页面！!')
// })

admin.get('/login', (req, res) => {
	// 使用render进行模板字符串的渲染
	// 第一参数是模板的路径
	// 括号中写模板中的路径！
	res.render('admin/login')
})


// 因为另一个js文件要到路由， 所以我们要把他暴露出去！
// 将路由对象作为模块成员进行导出!
module.exports = admin;












