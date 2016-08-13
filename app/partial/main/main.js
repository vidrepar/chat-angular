angular.module('chatApp').controller('MainCtrl',function(
    $scope,
    socketService
){

    $scope.message = {};
    $scope.messages = socketService.messages;

    $scope.onKeyUp = function (event) {

        if(event.keyCode === 13){

            socketService.sendMessage($scope.message.content);
            $scope.message.content = '';

        }

    };

    // Runs the digest cycle
    socketService.socket.on( 'message', function (data) {

    });

});
