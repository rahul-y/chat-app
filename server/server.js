const express =require('express');
const http=require('http');
const path=require('path');
const socketIO=require('socket.io');
const publicPath=path.join(__dirname,'../public');

const port =process.env.PORT || 3000;
var app=express();

var server=http.createServer(app);

var io=socketIO(server);

io.on('connection',(socket)=>{
   console.log("new user is connected");

   socket.on('createMessage',(message)=> {
       console.log('createMessage', message);
       io.emit('newMessage', {
           from: message.from,
           text: message.textt,
           createdAt: new Date().getTime()
   });
   });

   socket.on('disconnect',()=>{
       console.log("user was dissconnected");
   });
});
app.use(express.static(publicPath));





server.listen(port,()=>{
    console.log("server is up on port",port);
});
