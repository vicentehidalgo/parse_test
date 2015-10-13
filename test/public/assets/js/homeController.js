
app.controller('homeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.logout = logout;
    $scope.init = init;

    $scope.user = {};
    $scope.user.nombre = Parse.User.current().get("username");



    function logout() {
      Parse.User.logOut();
      console.log("OK");
      window.location = "#/login";
    }

    function init(){
      if (Parse.User.current() == null){
      	window.location = "#/login";
      }else{
        $rootScope.global_menu = [
          {title:'Home', url:'#/home'},
          {title:'Accounts', url:'#/accounts'},
          {title:'Transactions', url:'#/transactions'},
          {title:'Withdrwan', url:'#/withdrwan'},
          {title:'Transfer', url:'#/transfer'},
          {title:'Deposit', url:'#/deposit'},
          {title:'Log Out', url:'#/logOut'}
        ];
      }
    }

}]);
