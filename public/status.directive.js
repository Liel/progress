angular.module('scannerApp').directive('status', function(){
    return {
        templateUrl : "templates/status.html",
        controller: statusController,
        controllerAs: 'scanner',
        scope: true
    }
});

function statusController($scope, socket) {
    var vm = this;

    vm.scanComplete = false;
    vm.countTo = vm.countFrom = vm.progressValue =  0;
    vm.countFrom = 0;
    vm.textStatus = 'Starting...';
    socket.on('status', function(data) {
        vm.textStatus = data.text;
        vm.progressValue = vm.countTo = data.percent;
        if(data.percent == 100)
            vm.scanComplete = true;
        $scope.$apply();
    });
}