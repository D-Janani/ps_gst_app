var Hapi= require('hapi');
var server=new Hapi.Server();
server.connection({
    host:'localhost',
    port:5000
})
var plugins=[
    require('./shop')
];

server.register(plugins,function(err){
    if(err){
        return console.error(err);
    }
    server.start(function() {
    console.log('server started')
})

})




