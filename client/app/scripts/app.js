'use strict';
angular.module('app', ['ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'restangular'
]).config(function($stateProvider, $httpProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/language/all');

  $stateProvider.state('app', {
    abstract: true,
    url: '/',
    views: {}
  })
    .state('app.language', {
      url: 'language/:language',
      views: {
        'main@': {
          templateUrl: 'views/main.html',
          controller: 'mainController'
        },
        'menu@': {
          templateUrl: 'views/menu.html',
          controller: 'menuController'
        },
        'header@': {
          templateUrl: 'views/header.html',
          controller: 'headerController'
        }
      }
    });
}).run(function($rootScope, $state) {
  //Restangular.setBaseUrl('http://mpapi.alpha.redmart.com/v1.0/');
  $rootScope.state = $state;
});


