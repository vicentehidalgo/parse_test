
'use strict';
angular.module('baseApp')
    .controller('accountController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
$scope.accountNumber = $routeParams.accountNumber;


}]);
