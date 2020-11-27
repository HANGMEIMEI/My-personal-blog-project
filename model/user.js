/*
* @Author: Administrator
* @Date:   2020-11-27 11:14:00
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
* @Last Modified time: 2020-11-27 16:21:01
*/
// 创建用户集合！
// 引入mongoose的第三方模块！
const mongoose = require('mongoose');

// 设定集和规则
// 创建一个Schema的实例
// 他的返回值是一个实集合规则！
// 【如何设定集合规则】
// 我们再创建的Schema构造函数的时候，可以给他传递一个对象参数!
// 这个对象参数里面设定的就是参数的规则!
const userSchema = new mongoose.Schema({
    // 他需要用户名
    // require: true 只能保证在用户注册的时候一定要提供username这个字段
    // 但是这个字段的值是不能保证的！
    // minlength: 2 指定用户名的最小长度！
    // maxlength: 20 指定用户名的最大长度！ 
    username: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    // 如何保证邮箱地址不重复呢?!
    // unique: true 保证邮箱地址不重复！

    email: {
        type: String,
        require: true

    },
    password: {
        type: String,
        require: true
    },
    // 角色
    // 在这儿做强制性规定
    // 如果是普通用户就是
    // normal
    // 如果是超级管理员 就是
    // admin
    role: {
        type: String,
        require: true
    },
    // 状态
    // 0 启用状态 1 禁用状态!
    state: {
        default: 0
    }
});
// 使用规则去创建集合！！
// mongoose.model() 方法
// 创建一个User集合！
// 集合的规则是上面我们定义的规则！
// 集合就是MySQL中的表啦！
// 下面返回的是集合的构造函数！
// 我们可以使用集合的构造函数对集合进行各种各样的操作！
const User = mongoose.model('User', userSchema)

// 我们创建一条记录 创建一个用户
// User.create 的返回值是一个Promise对象

// User.create({
// 	username: 'lvhang',
// 	email: '15523352161@163.com',
// 	password: '58946498',
// 	role: 'normal',
// 	state: 0
// }).then(() => {
// 	console.log('用户创建成功！')
// }).catch(() => {
// 	console.log('用户创建失败!！')
// })
// 开放用户集合！
// 将用户集合作为模块成员进行导出!
module.exports = {
    // 在es6中你的键和值如果是一样的， 那么就可以写成一个！
    // User: User
    User
}