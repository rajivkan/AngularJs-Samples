var trainingControllers = angular.module('trainingControllers', []);
trainingControllers.controller('homeViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams', "trainingService", "studentModel",
    function ($scope, $http, $rootScope, $routeParams, trainingService, studentModel) {
        trainingService.retrieve('data/data.json').then(function(result){
          $scope.studentData = result.student;
          studentModel.setStudents($scope.studentData);
        }, function(err){
          console.log(err);
        });
        // $http.get('data/data.json')
        // .success(function(result){
        //   $scope.studentData = result.student;
        //   _studentData = $scope.studentData;
        // })
        // .error(function(error){

        // });
        $scope.message = "Welcome to Angular JS";
        //$rootScope.$broadcast('parent', 'Some data');
        $scope.getMessage = function(){
        	return "Test Message";
        }
}]);

trainingControllers.controller('aboutViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams',
    function ($scope, $http, $rootScope, $routeParams) {
   //     $rootScope.$on('parent', function (event, data) {
   //     	alert(data);
	  //   console.log(data); // 'Some data'
	  // });
}]);

trainingControllers.controller('contactViewCtrl', ['$scope', '$http', '$rootScope', '$routeParams',
    function ($scope, $http, $rootScope, $routeParams) {
  
}]);

trainingControllers.controller('menuController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
       $scope.menuItems = [{name:'Home', link: '#/'}, {name: 'About', link: '#/about'}, {name: 'Contact', link: '#/contact'}];
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

