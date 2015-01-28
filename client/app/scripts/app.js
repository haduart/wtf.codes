'use strict';
angular.module('app', ['ui.router',
  'ui.bootstrap',
  'ngMaterial'
]).config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    views: {
      'main': {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }
    }
  });
});

