angular.module('homeController', ['ngRoute'])



.controller('homeController','$scope', '$http', [function($scope, $http) {
  $scope.init = function(){
    console.log('asdasdadasd');
  }
}]);
