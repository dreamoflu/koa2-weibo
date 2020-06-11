const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const {
  SECRET
} = require('../conf/constants')

// node 自带方法
const util = require('util')
const verify = util.promisify(jwt.verify)

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
// 模拟登录
router.post('/login', async (ctx, next) => {
  const {
    userName,
    password
  } = ctx.request.body
  let userInfo
  console.log(ctx.request.body)
  console.log(userName === 'zhangsan')
  console.log(password === 'abc')
  if (userName === 'zhangsan' && password === 'abc') {
    console.log('jhahhahah')
    userInfo = {
      userId: 1,
      userName: 'zhangsan',
      nickName: '张三',
      gender: 1 // 男
    }
  }
  // 加密userInfo
  let token
  if (userInfo) {
    token = jwt.sign(userInfo, SECRET, {
      expiresIn: '1h' // 加密过期时间
    })
  }
  if (userInfo == null) {
    ctx.body = {
      errno: -1,
      msg: '登录失败'
    }
    return
  }
  ctx.body = {
    errno: 0,
    data: token
  }
})

// 获取用户信息

router.get('/getUserInfo', async (ctx, next) => {
  const token = ctx.header.authorization
  try {
    const payload = await verify(token.split(' ')[1], SECRET)
    ctx.body = {
      errno: 0,
      userInfo: payload
    }
  } catch (err) {
    ctx.body = {
      errno: -1,
      userInfo: 'verify toke failed'
    }
  }

})

module.exports = router