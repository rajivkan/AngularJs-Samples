angular.module('trainingDirectives', [])
 .directive('contact' , ['trainingService', function(trainingService) {
 	return {
	    	restrict: "E",
	     	templateUrl: 'components/contact.html',
	       //  template: '<div>Hello there <span ng-transclude></span></div>',
	      	// transclude: true
	    };
 }])
 .directive('login', [function(){
 	return {
	    	restrict: "E",
	     	templateUrl: 'components/login.html'
	    };
 }])