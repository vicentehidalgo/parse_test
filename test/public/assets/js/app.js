var app = angular.module('testAPP', ['ngRoute'])




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'view/login.html',
        controller: 'loginController'
    })
    .when('/signUp', {
    	templateUrl: 'view/signUp.html',
    	controller: 'signUpController'
    });
  }]);