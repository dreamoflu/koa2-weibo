/**
 * @description 存储配置
 * @author liyjun
 */

const {
    isProd
} = require('../utils/env')
let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Lyj,1340705151',
    port: '3306',
    database: 'koa2_weibo_db'
}
if (isProd) {
    // 线上
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'Lyj,1340705151',
        port: '3306',
        database: 'koa2_weibo_db'
    }

}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}