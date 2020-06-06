const {
    Blog,
    User
} = require('./model');

!(async function () {
    // 删除一条博客
    // const delBlogRes = await Blog.destroy({
    //     where: {
    //         id: 4
    //     }

    // })
    // console.log('delBlogRes', delBlogRes > 0)
    // 删除一个用户 此时用户和博客是通过userId外键关联的，删除用户对应的博客也将全部删除
    // 如果删除操作失败，要检查一下外键的连接方式是不是CASCADE的方式

    const delUserRes = await User.destroy({
        where: {
            id: 1
        }
    })
    console.log('delUserRes', delUserRes > 0)
})()