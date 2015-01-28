'use strict';
angular.module('app').controller('mainController', function ($scope) {
  $scope.languages = [{name: 'ActionScript', count: 48}, {name: 'JavaScript', count: 234}, {name: 'Clojure', count: 12}]
});
