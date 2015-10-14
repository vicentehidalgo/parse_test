
app.controller('accountsController', ['$scope', '$http', function($scope, $http) {
  $scope.init = init;

  function init(){
    var account = Parse.Object.extend("account");
    var query = new Parse.Query(account);
    query.find({
      success: function(results) {
        // alert("Successfully retrieved " + results.length);
        console.log(results);
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
