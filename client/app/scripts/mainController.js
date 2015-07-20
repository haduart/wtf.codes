'use strict';
angular.module('app').controller('mainController', function($scope, $stateParams) {

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
    }, {
      language: 'ActionScript',
      id: 4,
      code: '<div>foo3</div>',
      description: 'Someone did it',
      creator: 'dmoskovsov',
      date: new Date().getMilliseconds(),
      comments: [],
      rating: -5
    }
  ];

  $scope.codes = _.filter($scope.codes, function(code) {
    return $stateParams.language === "All" || code.language === $stateParams.language;
  });

});
