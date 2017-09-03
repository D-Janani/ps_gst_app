function shop(server,option,next){

    server.route({
        method:'GET',
        path:'/',
        handler:function(request,reply){
            reply('Hello world')
        }
    })
   
    next()
}

shop.attributes={
    name:'grocery-shop'
}
module.expot=shop;