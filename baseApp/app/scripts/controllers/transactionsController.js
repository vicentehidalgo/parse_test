'use strict';

angular.module('baseApp')
  .controller('transactionsController', ['$scope', '$http', function($scope, $http) {
    var vm = this;
    vm.transactions = [];


    var transactions = Parse.Object.extend("transactions");
    var query = new Parse.Query(transactions);


    // ["1001"]

    query.find({
      success: function(results) {
        vm.transactions = results;
        for (var i = 0; i < vm.transactions.length; i++) {
          vm.transactions[i].concept = vm.transactions[i].get('concept');
          vm.transactions[i].name = vm.transactions[i].get('data');
          vm.transactions[i].destination = vm.transactions[i].get('destination');
          vm.transactions[i].origin = vm.transactions[i].get('origin');
          vm.transactions[i].quantity = vm.transactions[i].get('quantity');
          vm.transactions[i].type = vm.transactions[i].get('type');
        }
        console.log(vm.transactions);

        $scope.$apply();

      },
      error: function(error) {
      }
    })
}]);
