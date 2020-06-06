show databases;
use koa2_weibo_db;
select * from users;
select username,nickname from users where username='zhangsan'and`password` = '123';
insert into users (username,`password`,nickname) values ('lisi','123','李四');
insert into blogs (title,content,userid) values ('标题5','内容5','88');
update blogs set content = '内容1内容1' where id = '1';
delete from blogs where id = 3;
select * from blogs order by id desc; -- 倒序排列
select count(*) as `count` from blogs;
select count(id) as `count` from blogs; -- 查询数量
select * from blogs order by id desc limit 2; -- 分页查询
select * from blogs order by id desc limit 2 offset 2; -- 分页查询 跳过两条也就是查询第二页的数据

-- --连表查询
select * from blogs;
select * from users;

select * from blogs inner join users on users.id = blogs.userid; -- 不一定有外键
select blogs.*, users.username,users.nickname from blogs inner join users on users.id = blogs.userid;
select blogs.*, users.username,users.nickname from blogs inner join users on users.id = blogs.userid where users.username = 'lisi';