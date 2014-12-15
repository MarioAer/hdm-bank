'use strict';

angular.module('swFrontApp')
  .controller('LangCtrl', function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };



  })
  .controller('NavCtrl', function ($scope, $location) {

    angular.element('.sout-btn').show();

    $scope.isActive = function (path) {
      return path === $location.path();
    };


  })
  .controller('PrintCtrl', ['$scope', function ($scope) {

    $scope.getDatetime = (new Date()).getTime();

  }])
  .controller('MainCtrl', function ($scope) {


  });
