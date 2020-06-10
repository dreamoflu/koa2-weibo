/**
 * @description sequelize 同步数据库
 * @author liyajun
 */


const seq = require('./seq')
// require('./model')

// 测试连接
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('err')
})

// 执行同步 force: true 已经有表的话就覆盖没有就创建新的
seq.sync({
    force: true
}).then(() => {
    console.log('sync oks')
    process.exit()
})