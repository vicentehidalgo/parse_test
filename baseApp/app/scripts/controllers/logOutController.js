angular.controller('logOutController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

  Parse.User.logOut();
  console.log("OK");

  $rootScope.global_menu = [
          {title:'SignUp', url:'#/signUp'},
          {title:'Login', url:'#/login'}
        ];
  window.location = "#/login";
}]);
