const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建User 模型 。 数据表的名字是users user会自动变为users
const User = seq.define('user', {
    // id 会自动创建，并设为主键，自增
    userName: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        comment: '用户名'
    },
    password: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: Sequelize.STRING, // varchar(255)
        comment: '昵称'
    }
    // 自动创建 createdAt 和 updatedAt
})
// 创建Blog 模型
const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'blog标题'

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: 'Blog内容'

    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '关联用户表id'

    }
})
// 关联外键 这里连个都写，可以做到先查任何一个连表查询另一个
// 方法1
Blog.belongsTo(User, {
    // 创建外键 Blog.usrId -> User.id
    foreignKey: 'userId'
})
// 方法2
User.hasMany(Blog, {
    // 创建外键 Blog.usrId -> User.id
    foreignKey: 'userId'
})
module.exports = {
    User,
    Blog
}