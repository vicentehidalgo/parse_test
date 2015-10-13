
app.controller('loginController', ['$scope', '$http', function($scope, $http) {
    $scope.login = login;

    function login(){
		Parse.User.logIn($scope.user.inputEmail, $scope.user.inputPassword, {
                        	success: userLoggedIn,
                        	error: gotError
                        });
	}
	function userLoggedIn(user){
        console.log("OK", user);

      }
    
	function gotError(user, err) {
		console.log("KO ", err);
		alert("Error");
	}   

}]);
