angular.module('chatApp').factory('socketService',function(
    NET,
    socketFactory

) {

    var socketService = {
        socket:null,
        messages:[],
        connect:function(){

            var socketIo = io.connect(NET.SIO_URL, { path:'/socket.io' });

            // socketFactory should update the scope
            socketService.socket = socketFactory({ ioSocket : socketIo });

            socketIo.on('connect', function () {

                socketIo.on('message', function (data) {

                    console.log(data);
                    socketService.messages.push(data);

                });

            });

        },
        sendMessage:function (msg) {

            socketService.socket.emit('message', { content:msg })

        }
    };

    return socketService;
});
