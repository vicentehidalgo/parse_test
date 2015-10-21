'use strict';

angular.module('baseApp')
  .controller('globalController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

	$scope.init = function(){
    // console.log('asdasdadasd');
    document.getElementsByClassName("navbar-toggle collapsed")[0].setAttribute("onclick", "mostrarMenu()")
	    if (Parse.User.current() == null){
	    	window.location = "#/login";
	    }
	}



	if (Parse.User.current() == null){
		$rootScope.global_menu = [
			{title:'SignUp', url:'#/signUp'},
			{title:'Login', url:'#/login'}
		];
		window.location = "#/login";
	} else {
		$rootScope.global_menu = [
			{title:'Accounts', url:'#/accounts', active: false},
			{title:'Transactions', url:'#/transactions', active: false},
			{title:'Operations', url:'#/operations', active: false},
			{title:'Log Out', url:'#/logOut', active: false }
		];
		$scope.user = {};
		$scope.user.nombre = Parse.User.current().get("username");
	}
}]);


function mostrarMenu(argument) {

  console.log("pepe");



  if (document.getElementById("menu").style.display == "none"){
    document.getElementById("menu").style.display = "block";

  } else {
    document.getElementById("menu").style.display = "none";
  }
}
