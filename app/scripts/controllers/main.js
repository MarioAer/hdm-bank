'use strict';

angular.module('swFrontApp')
  .controller('LangCtrl', function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

  })
  .controller('MainCtrl', [ '$scope', '$location', 'myService', function ($scope, $location, myService) {



  }])
  .controller('NavCtrl', function ($scope, $location) {

    angular.element('.sout-btn').show();

    $scope.isActive = function (path) {
      return path === $location.path();
    };



  });
