'use strict';
angular.module('app').controller('menuController', function($scope) {
  $scope.languages = [{name: 'All', count: 268},
    {name: 'ActionScript', count: 48},
    {name: 'JavaScript', count: 234},
    {name: 'Clojure', count: 12}];
});
