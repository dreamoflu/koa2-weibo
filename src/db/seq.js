/**
 * @description 数据库配置
 * @author liyajun
 */

const Sequelize = require('sequelize')
const {
    MYSQL_CONF
} = require('../conf/db')
const {
    isProd,
    isTest
} = require('../utils/env')
const {
    host,
    user,
    password,
    database
} = MYSQL_CONF
const conf = {
    host,
    dialect: 'mysql' // 要连接什么类型的数据库啊
}

if (isTest) { // 单元测试不打印sql语句
    conf.logging = () => {}
}

// 线上环境 使用连接池
if (isProd) {
    conf.pool = {
        max: 5, // 连接池中最大的连接数量
        min: 0, // 最小
        idle: 10000 //  如果一个连接池10s之内没有被使用，则释放
    }

}


const seq = new Sequelize(database, user, password, conf)


// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch(() => {
//     console.log('err')
// })
module.exports = seq