
app.controller('signUpController', ['$scope', '$http', function($scope, $http) {
    $scope.signUp = signUp;

    function signUp(){
      var user = new Parse.User();
      user.set("username", $scope.user.inputUserName);
      user.set("email", $scope.user.inputEmail);
      user.set("password", $scope.user.inputPassword);

      user.signUp(null, { success: userRegistered,
                            error: gotError});

      function userRegistered(user){
        console.log("OK", user);
      }
      function gotError(user, err) {
        console.log("KO ", err);
      }
    }

}]);
