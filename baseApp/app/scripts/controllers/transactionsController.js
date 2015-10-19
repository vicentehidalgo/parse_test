
angular.controller('transactionsController', ['$scope', '$http', function($scope, $http) {

    var transactions = Parse.Object.extend("transactions");
    var query = new Parse.Query(transactions);



    // ["1001"]

    query.find({
      success: function(results) {
        console.log(results);
        $scope.transactions = results;
        $scope.$apply();

      },
      error: function(error) {
      }
    })
}]);
