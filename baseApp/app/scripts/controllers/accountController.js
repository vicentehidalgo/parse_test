
angular.controller('accountController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
$scope.accountNumber = $routeParams.accountNumber;


}]);
