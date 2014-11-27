var trainingApp = angular.module('trainingApp', ['ngRoute', 
    'trainingControllers', 'trainingServices', 'trainingDirectives']);

trainingApp.config(['$routeProvider', '$controllerProvider',
    function($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'partials/detail.html',
                controller: 'detailViewCtrl'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginViewCtrl'
            })
            .when('/example1', {
                templateUrl: 'partials/example1.html',
                controller: 'exampleController'
            });
    }
]);