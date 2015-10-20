'use strict';

angular.module('baseApp')
  .controller('loginController', ['$scope', '$http','$rootScope', function($scope, $http, $rootScope) {
    $scope.login = login;

    function login(){
		Parse.User.logIn($scope.user.inputUserName, $scope.user.inputPassword, {
                  	success: userLoggedIn,
                    error: gotError
                  });
	}
	function userLoggedIn(user){
    window.location = "#/home";
  }

	function gotError(user, err) {
		console.log("KO ", err);
		alert("Error");
	}

}]);
