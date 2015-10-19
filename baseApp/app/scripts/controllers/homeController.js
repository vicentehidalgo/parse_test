'use strict';
angular.module('baseApp').
    controller('homeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.init = init;





    function init(){
      if (Parse.User.current() == null){
      	window.location = "#/login";
      }else{
        $rootScope.global_menu = [
          {title:'Accounts', url:'#/accounts', active: false},
          {title:'Transactions', url:'#/transactions', active: false},
          {title:'Operations', url:'#/operations', active: false},
          {title:'Log Out', url:'#/logOut', active: false }
        ];
        $scope.user = {};
        $scope.user.nombre = Parse.User.current().get("username");


      }
    }

}]);
