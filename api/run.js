// Setup the express app
const express = require('express');
const app = express();

// Setup socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3033);

io.on('connection', (socket)=> {

    socket.emit('message', { hello:'From the server' });

    socket.on('message', (data)=>{

        // 1. For returning it back to myself
        socket.emit( 'message', data );
        // 2. For everyone else
        socket.broadcast.emit( 'message', data );

    });

});