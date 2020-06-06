const Sequelize = require('sequelize')
const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

// 线上环境 使用连接池
conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000 //  如果一个连接池10s之内没有被使用，则释放
}

const seq = new Sequelize('koa2_weibo_db', 'root', 'Lyj,1340705151', conf)


// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch(() => {
//     console.log('err')
// })
module.exports = seq