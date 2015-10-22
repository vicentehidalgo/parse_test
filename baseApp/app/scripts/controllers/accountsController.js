'use strict';

angular.module('baseApp')
  .controller('accountsController', ['$scope', '$http', '$q', function($scope, $http, $q) {
  var vm = this;
  vm.init = init;
  vm.accounts = [];
  vm.initOK = initOK;
  function initOK(results) {
      Parse.Cloud.run('listAccounts',{},{
      success: function(result){
          console.log(result);
      },
      error: function(error) {
        // alert("Error: " + error.code + " " + error.message);
    }});




     // alert("Successfully retrieved " + results.length);
     console.log(results[0].get('balance'));
     vm.accounts = results;
     /*for (var account in vm.accounts) {
       vm.accounts[account].iban = vm.accounts[account].get('iban');
       vm.accounts[account].name = vm.accounts[account].get('name');
       vm.accounts[account].balance = vm.accounts[account].get('balance');
     }*/

     for (var i = 0; i < vm.accounts.length; i++) {
       vm.accounts[i].iban = vm.accounts[i].get('iban');
       vm.accounts[i].name = vm.accounts[i].get('name');
       vm.accounts[i].balance = vm.accounts[i].get('balance');
     }
     console.log(vm.accounts);
     $scope.$digest();
  }
  function init(){
    var accountsDfd = $q.defer();
    var account = Parse.Object.extend("account");
    var query = new Parse.Query(account);

    query.containedIn("iban", Parse.User.current().get('accounts'));
    // ["1001"]
    query.find({
      success: vm.initOK,
      error: function(error) {
        // alert("Error: " + error.code + " " + error.message);
      }
    });


  }




/*
  var ArticleDfd = $q.defer();
  var Article = Parse.Object.extend('Article');
  var queryArticle = new Parse.Query(Article);
  queryArticle.equalTo('name', 'Angular and Parse Working Together');
  queryArticle.find().then(function (data) {
  	ArticleDfd.resolve(data);
  }, function (error) {
  	ArticleDfd.reject(data);
  });
  ArticleDfd.promise
  .then(function (article) {
  	$scope.currentArticle = article;
  })
  .catch(function (error) {
  	//do something with the error
  });


*/




}]);
