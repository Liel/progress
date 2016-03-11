angular.module('scannerApp').controller('ScanController', function($scope, socket) {
    var vm = this;
    vm.files = ['newFile.doc', 'importantFIle.doc', 'superDoc.doc', 'data.xsl'];
    vm.scanComplete = false;
    vm.join = function() {
        socket.emit('scanFiles', vm.files);
    };
    var amt = 0;
    vm.addFile = function() {
        vm.files.push(vm.newFile + vm.fileType);
        vm.newFile = "";
    };
    vm.countTo = vm.countFrom = vm.progressValue =  0;
    vm.countFrom = 0;
    vm.textStatus = 'Starting...';
    socket.on('status', function(data) {
        vm.textStatus = data.text;
        vm.progressValue = vm.countTo = data.precent;
        if(data.precent == 100)
            vm.scanComplete = true;
        $scope.$apply();
    });
});