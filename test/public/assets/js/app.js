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
    .when('/home', {
        templateUrl: 'view/home.html',
        controller: 'homeController'
    })
    .when('/logOut', {
        templateUrl: 'view/login.html',
        controller: 'logOutController'
    })
    .when('/accounts', {
        templateUrl: 'view/accounts.html',
        controller: 'accountsController'
    })
    .when('/transactions', {
        templateUrl: 'view/transactions.html',
        controller: 'transactionsController'
    })
    .when('/withdrawn', {
        templateUrl: 'view/withdrawn.html',
        controller: 'withdrawnController'
    })
    .when('/transfer', {
        templateUrl: 'view/transfer.html',
        controller: 'transferController'
    })
    .when('/deposit', {
        templateUrl: 'view/deposit.html',
        controller: 'depositController'
    })
    .when('/account/:accountNumber', {
        templateUrl: 'view/account.html',
        controller: 'accountController'
    })
    .otherwise({
        redirectTo: '/home'
      });
  }]);
