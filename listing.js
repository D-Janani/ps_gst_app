var mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'items'
});

conn.connect();
conn.query('select * from product',function(err,result){
    console.log(result);
});