var socket=io();
socket.on('connect',function () {
    console.log("connected to server successfully");
    socket.emit('createMessage Event',{
        from:"abdf@gmail.com",
        text:"uiuiu"
    });
});
socket.on('disconnect',function () {
    console.log("disconnected from server");
});
socket.on('newMessage Event',function(newmsg){
    console.log("a message is recieved",newmsg);
});



