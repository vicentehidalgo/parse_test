
app.controller('homeController', ['$scope', '$http', function($scope, $http) {

  $scope.init = function(){
    console.log('asdasdadasd');
    if (Parse.User.current() != null){
    	window.location = "#/registered";
    } else {
    	window.location = "#/login";
    }
  }
}]);
