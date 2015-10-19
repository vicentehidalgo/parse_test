'use strict';
angular.module('baseApp').
    controller('accountsController', ['$scope', '$http', function($scope, $http) {
  $scope.init = init;
  $scope.accounts = [];

  function init(){


console.log();

    var account = Parse.Object.extend("account");
    var query = new Parse.Query(account);

    query.containedIn("iban", Parse.User.current().get('accounts'));


    // ["1001"]

    query.find({
      success: function(results) {
        // alert("Successfully retrieved " + results.length);
        console.log(results[0].get('balance'));
        $scope.accounts = results;
        $scope.$apply();
        // Do something with the returned Parse.Object values
        // for (var i = 0; i < results.length; i++) {
        //   var object = results[i];
        //   alert(object.id + ' - ' + object.get('playerName'));
        // }
      },
      error: function(error) {
        // alert("Error: " + error.code + " " + error.message);
      }
    });
  }

}]);
