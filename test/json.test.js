/**
 * @description 测试http 请求
 * @author liyjun
 */
const server = require('./server')
test('json 接口返回数据格式正确', async () => {
    const res = await server.get('/json')
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json')
})

// test('post 接口测试', async () => {
//     const res = await (await server.post('/login')).send({
//         userName: 'zhangsan',
//         password: '123'
//     })

// })