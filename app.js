/*
* @Author: Active code page: 65001
lvhang
* @Date:   2020-11-24 18:21:58
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
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
* @Last Modified time: 2020-11-27 17:18:05
*/
// 要想创建网站服务器， 必须先引入express框架！
const express = require('express');
// 引入系统路径模块！处理路径！
const path = require('path');

// 创建网站服务器！ 

const app = express();

// 数据库连接
require('./model/connect')

// 测试创建用户 但是实际上创建用户应该在路由当中完成！
// require('./model/user')

// 告诉express框架模板所在的位置
// app.set() 就是对express框架的配置
// 1 第一个参数的名称是固定的！
// 第二个参数就是模板的位置！使用绝对路径!
app.set('views', path.join(__dirname, 'views'))

// 告诉express 框架模板的默认后缀是什么
app.set('view engine', 'art');
// 当渲染后缀为art 的模板时 所使用的模板引擎是什么？!
// express 支持使用多种模板
// 1 第一个参数就是模板后缀
// 2 第二个参数就是你当前用的模板的名称
app.engine('art', require('express-art-template'))

// 开放静态资源文件
// 1 用app.use() 拦截所有的请求！
// express.static() 这个方法接收一个目录！
// 这个目录就是静态资源的存放目录！
// 采用绝对路径！
// path.join(__dirname())

app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))

// 导入 home 路由 ; 后缀名可以省掉！这儿我就不省啦！
const home = require('./route/home.js');
// 导入 admin 路由 他的返回值 就是admin下面的module.exports 对象！ 简而言之， 
// 就是你导进来的是社么对象， 就是那个对象
// 所以这儿就是admin路由对象！
const admin = require('./route/admin.js');

// 要使两个路由页面生效， 
// 第一步， 导入两个模块
// 第二步， 调用即可！
// 为路由对象匹配一个一级的请求路径！(为路由匹配请求路径！)
// app.use 进行请求拦截！
app.use('/home', home)
app.use('/admin', admin)


// 如何监听端口， 调用express下面的listen函数!
// 光有网站服务器是不够的，
//  他必须监听一个端口！，
//   才能向外提供服务！
app.listen(3001, () => {
    console.log('本地网站服务器启动成功， 请访问localhost：3001')
});