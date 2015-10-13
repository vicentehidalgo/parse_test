
app.controller('homeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.init = init;





    function init(){
      if (Parse.User.current() == null){
      	window.location = "#/login";
      }else{
        $rootScope.global_menu = [
          {title:'Home', url:'#/home', active: false},
          {title:'Accounts', url:'#/accounts', active: false},
          {title:'Transactions', url:'#/transactions', active: false},
          {title:'Withdrwan', url:'#/withdrwan', active: false},
          {title:'Transfer', url:'#/transfer', active: false},
          {title:'Deposit', url:'#/deposit', active: false},
          {title:'Log Out', url:'#/logOut', active: false }
        ];
        $scope.user = {};
        $scope.user.nombre = Parse.User.current().get("username");
      }
    }

}]);
