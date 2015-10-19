'use strict';

/**
 * @ngdoc overview
 * @name baseAppApp
 * @description
 * # baseAppApp
 *
 * Main module of the application.
 */
angular
  .module('baseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
    })
    .when('/signUp', {
    	templateUrl: 'views/signUp.html',
    	controller: 'signUpController',
        controllerAs: 'signUp'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .when('/logOut', {
        templateUrl: 'views/login.html',
        controller: 'logOutController',
        controllerAs: 'logOut'
    })
    .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'accountsController',
        controllerAs: 'accounts'
    })
    .when('/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'transactionsController',
        controllerAs: 'transactions'
    })
    .when('/withdrawn', {
        templateUrl: 'views/withdrawn.html',
        controller: 'withdrawnController',
        controllerAs: 'withdrawn'
    })
    .when('/transfer', {
        templateUrl: 'views/transfer.html',
        controller: 'transferController',
        controllerAs: 'transfer'
    })
    .when('/deposit', {
        templateUrl: 'views/deposit.html',
        controller: 'depositController',
        controllerAs: 'deposit'
    })
    .when('/account/:accountNumber', {
        templateUrl: 'views/account.html',
        controller: 'accountController',
        controllerAs: 'account'
    })
    .otherwise({
        redirectTo: '/home'
      });
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
