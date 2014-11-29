angular.module('trainingServices', [])
	.service('trainingService', ['$http', '$q', '$filter', function($http, $q, $filter) {
    	this.retrieve = function(url, methodType) {
        	var d = $q.defer();

        	var req = {
             method: methodType,
             url: url,
             headers: {
               'Content-Type': "application/json; charset=utf-8",
               "userId": 1
             },
             data: { test: 'test' },
            }

	        $http(req).success(
            function(data) {
                d.resolve(data);
            }).
            error(function(data, status) {
                d.reject(data, status);
            });

	        return d.promise;
    	}
	}]);