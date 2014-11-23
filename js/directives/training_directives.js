angular.module('trainingDirectives', [])
 .directive('contact' , ['trainingService', function(trainingService) {
    return {
        restrict: "E",
        templateUrl: 'components/contact.html'
    };
 }])