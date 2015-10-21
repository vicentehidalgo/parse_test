'use strict';

angular.module('baseApp')
  .controller('accountsController', ['$scope', '$http', function($scope, $http) {
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
     for (var account in vm.accounts) {
       vm.accounts[account].iban = vm.accounts[account].get('iban');
       vm.accounts[account].name = vm.accounts[account].get('name');
       vm.accounts[account].balance = vm.accounts[account].get('balance');
     }
     console.log(vm.accounts);
     $scope.$digest();
  }
  function init(){
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

}]);
