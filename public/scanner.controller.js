angular.module('scannerApp').controller('ScanController', function($scope, socket) {
    var vm = this;

    vm.files = ['newFile.doc', 'importantFIle.doc', 'superDoc.doc', 'data.xsl'];
    vm.scan = function() {
        socket.emit('scanFiles', vm.files);
    };
    vm.addFile = function() {
        vm.files.push(vm.newFile + vm.fileType);
        vm.newFile = "";
    };
});