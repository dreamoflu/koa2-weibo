/**
 * @description 连接redis 的方法get set
 * @author liyjun
 */

const redis = require('redis')
const {
    REDIS_CONF
} = require('../conf/db')
//创建客户端
const redisClent = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClent.on('error', err => {
    console.error('redis error', err)
})

/**
 * 
 * @param {string} key 键
 * @param {string} val 值
 * @param {numberi} timeout 过期时间 单位s 
 */
function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClent.set(key, val)
    redisClent.expire(key, timeout)

}

/**
 * redis get
 * @param {string} key 键 
 */
function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClent.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resolve(null)
                return
            }
            try {
                // 尝试变为object 如果不能变为object则走 catch
                resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }
        })
    })
    return promise
}

module.exports = {
    set
}