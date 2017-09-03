var mysql=require('mysql');
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'items'
});

conn.connect();

var items={
    product_code:'ID600',
    product_name:'sunsilk',
    product_price:69, 
    product_gst :5,
    
};
var query=conn.query('insert into product set ?',items,function(err,request){
    if(err){
        console.error(err);
        return;

    }
})