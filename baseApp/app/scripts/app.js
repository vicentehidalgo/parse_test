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
        controllerAs: 'vm'
    })
    .when('/signUp', {
    	templateUrl: 'views/signUp.html',
    	controller: 'signUpController',
        controllerAs: 'vm'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
    })
    .when('/logOut', {
        templateUrl: 'views/login.html',
        controller: 'logOutController',
        controllerAs: 'vm'
    })
    .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'accountsController',
        controllerAs: 'vm'
    })
    .when('/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'transactionsController',
        controllerAs: 'vm'
    })
    .when('/withdrawn', {
        templateUrl: 'views/withdrawn.html',
        controller: 'withdrawnController',
        controllerAs: 'vm'
    })
    .when('/transfer', {
        templateUrl: 'views/transfer.html',
        controller: 'transferController',
        controllerAs: 'vm'
    })
    .when('/deposit', {
        templateUrl: 'views/deposit.html',
        controller: 'depositController',
        controllerAs: 'vm'
    })
    .when('/account/:accountNumber', {
        templateUrl: 'views/account.html',
        controller: 'accountController',
        controllerAs: 'vm'
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
