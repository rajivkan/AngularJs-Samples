var trainingControllers = angular.module('trainingControllers', []);
trainingControllers.controller('homeViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams', "trainingService", "studentModel",
    function ($scope, $http, $rootScope, $routeParams, trainingService, studentModel) {
        trainingService.retrieve('data/data.json').then(function(result){
          $scope.studentData = result.student;
          studentModel.setStudents($scope.studentData);
        }, function(err){
          console.log(err);
        });

        $scope.message = "Welcome to Angular JS";

        //$rootScope.$broadcast('test', {name: "AYX"});
        $scope.getMessage = function(){
        	return "Test Message";
        }

        window.addEventListener("ABOUT_EVENT", function(event){
          debugger;
        });
}]);

trainingControllers.controller('aboutViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams',
    function ($scope, $http, $rootScope, $routeParams) {
     //   $rootScope.$on('test', function (event, data) {
     //     	alert(data.name);
  	  //   console.log(data);
  	  // });
      var evt = new CustomEvent("ABOUT_EVENT");
      evt.test = {name: "ABC"};
      window.dispatchEvent(evt);
}]);

trainingControllers.controller('contactViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams',
    function ($scope, $http, $rootScope, $routeParams) {
  
}]);

trainingControllers.controller('menuController', ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
       $scope.menuItems = [{name:'Home', link: '#/'}, {name: 'About', link: '#/about'}, {name: 'Contact', link: '#/contact'}];
       $scope.loadContact = function(){
          //$location.path("/contact");
          window.location.href = "#/contact";
      }
}]);

trainingControllers.controller('detailViewCtrl', ['$scope', '$http', '$routeParams', "studentModel",
    function ($scope, $http, $routeParams, studentModel) {
      var _studentData = studentModel.getStudents();
       for(var i = 0; i < _studentData.length; i++){
        if(_studentData[i].StudentId == $routeParams.id){
          $scope.detail = _studentData[i];
          break;
        }
       }
}]);

