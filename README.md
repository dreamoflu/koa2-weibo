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
 2. 实例在 test 文件中


 ### 完善开发环境
1. 配置esline,以及pre-commit
  eslint
> 根目录下新建文件 .eslintrc.json (eslint 配置文件) .eslintignore (配置那些文件忽略eslint校验)
> npm i eslint babel-eslint --save-dev
> package.json 配置  "lint": "eslint --ext .js ./src"
  pre-commit
> 在代码 git commit之前必须执行的操作 例如必须 eslint 校验通过
> cnpm install pre-commit --save-dev
>2.在package.json 中配置
2. inspect 调试
> 使用chrome 浏览器调试node程序
> node 本身支持不用下载插件 
> 1.修改package.json中的dev命令
>  "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon --inspect=9229 bin/www"
> // inspect 默认端口 9229
> 2. 运行 npm run dev 之后 在chrome浏览的地址栏中输入 chrome://inspect 回车之后点击页面中的inspect
3. 404页和错误页

### node 连接mysql的配置
1. npm install sequelize mysql2 --save
2. 配置文件在 src/db 路径下


### jwt 加密用户信息（具体演示在jwt-test中）
>jwt -- json web token
>用户认证成功后，server端返回一个加密的token给客户端
>客户端后续每次请求都带token,以示当前的用户身份
>.演示方法 在routes/users.js 中
> 使用过程
> 1.安装依赖  npm install koa-jwt --save
> 2.app.js 中引用和配置
> 3.加密工具 npm install jsonwebtoken --save (使用方法在user.js 中)

