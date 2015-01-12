(function() {

  'use strict';

  angular.module('angularD3', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
     when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
     .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'MapController'
    })
    .otherwise({
      redirectTo: '/' 
    });
  }]);

  console.log('Hello World');

}());
