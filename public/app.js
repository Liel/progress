angular.module('scannerApp', ['ngRoute',"ui.bootstrap","countTo"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/index.html'
  });
}]);

