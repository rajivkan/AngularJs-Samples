angular.module('trainingServices', [])
	.service('trainingService', ['$http', '$q', '$filter', function($http, $q, $filter) {
    	this.retrieve = function(url) {
        	var d = $q.defer();

        	//Retrieve the specified hermesResponse
	        $http.get(url).success(
            function(data) {
                d.resolve(data);
            }).
            error(function(data, status) {
                d.reject(data, status);
            });

	        return d.promise;
    	}
	}]);