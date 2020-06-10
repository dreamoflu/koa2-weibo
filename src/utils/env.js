/**
 * @description 环境变量
 * @author liyjun
 */

const ENV = process.env.NODE_ENV

module.exports = {
    isDev: ENV === 'dev',
    noeDev: ENV !== 'dev',
    isProd: ENV === 'production',
    notProd: ENV !== 'production',
    isTest: ENV === 'test',
    noeTest: ENV !== 'test',
}