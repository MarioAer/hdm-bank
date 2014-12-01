'use strict';

angular.module('swFrontApp')
  .controller('LangCtrl', function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

  })
  .controller('MainCtrl', function ($scope, $location) {



  })
  .controller('NavCtrl', function ($scope, $location) {

    angular.element('.sout-btn').show();

    $scope.isActive = function (path) {
      return path === $location.path();
    };



  });
