var _mysql = require('mysql');

//创建连接
var mysql = _mysql.createConnection({
    //主机
    host: 'localhost',
    //用户
    user: 'root',
    //密码
    password: 'root',
    //端口
    port: 3306,
    //数据库名
    database: 'cm'
});var _sql = "select * from user";

//创建一个数据库连接
mysql.connect(function (err) {
    if (err) {
        console.log('connect-' + err);
    }
    console.log('connect succeed...');
});


mysql.query(_sql, function (err, rows) {
    if (err) {
        console.log("query-" + err);
    }
    console.log("query succeed..." + rows);

});

//关闭连接
mysql.end(function (err) {
    if (err) {
        return;
    }
    console.log("close succeed...");
});

