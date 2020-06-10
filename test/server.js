/**
 * @description 测试http 请求
 * @author liyjun
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)