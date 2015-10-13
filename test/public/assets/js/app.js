var app = angular.module('testAPP', ['ngRoute'])




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginController'
    })
    .when('/signUp', {
    	templateUrl: 'view/signUp.html',
    	controller: 'signUpController'
    })
    .when('/registered', {
        templateUrl: 'view/registered.html',
        controller: 'registeredController'
    })


    ;
  }]);