'use strict';
angular.module('app').controller('mainController', function ($scope) {
  $scope.languages = [{name: 'ActionScript', count: 48}, {name: 'JavaScript', count: 234}, {
    name: 'Clojure',
    count: 12
  }];

  $scope.codes = [
    {
      language: 'Clojure',
      id: 0,
      code: 'function MyCtrl ( $scope, $sanitize ){\n$scope.rawHtml = hello;$scope.sanitizedHmtl($scope.rawHtml);}',
      description: 'Someone did it',
      creator: 'dmoskovsov',
      date: new Date().getMilliseconds(),
      comments: [],
      rating: 3
    }, {
      language: 'Clojure',
      id: 1,
      code: '<div>foo2</div>',
      description: 'Someone did it',
      creator: 'dmoskovsov',
      date: new Date().getMilliseconds(),
      comments: [],
      rating: 5
    }, {
      language: 'JavaScript',
      id: 2,
      code: '<div>foo3</div>',
      description: 'Someone did it',
      creator: 'dmoskovsov',
      date: new Date().getMilliseconds(),
      comments: [],
      rating: -5
    }
  ];
});
