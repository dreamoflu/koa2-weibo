> koa2 脚手架
> npm install -g koa-generator 创建koa2的node项目

> npm i cross-env -D  // 环境变量的工具
>
### git 的部分使用规范

> git commit -m "" 备注信息规范
  refactor: 大的功能改动
  feat： 新增功能

  > 数据库创建 外键
  > 外键作用
  > 1.更新限制和删除级联
  > 2.连表查询
  >

  ### 使用redis

 > Mac 下载 brew install redis
 > 启动 redis-server, redis-cli 连接

 >设置值 set name 'liyajun'
> 取值  get name
> 查看所有的值 keys *


### node 操作redis 具体使用在 _redis.js中
> 下载redis npm install redis -D

### koa2中使用radis 和配置session 
1.npm i koa-redis koa-generic-session --save
2. app.js 中来配置

### 单元测试 jest的使用
>1. *.test.js 文件
>2. 常用的断言
>3. 测试http接口
1. npm install jest --save-dev
2. package.json 中配置启动命令  "test": "cross-env NODE_ENV=dev jset --runInBand --forceExit --colors"

###  jest 测试http请求
 1. npm install supertest --save-dev