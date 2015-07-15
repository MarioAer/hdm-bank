'use strict';

angular.module('swFrontApp')
  .controller('LangCtrl',["$scope", "$translate", function ($scope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };



  }])
  .controller('NavCtrl',["$scope", "$location", function ($scope, $location) {

    angular.element('.sout-btn').show();

    $scope.isActive = function (path) {
      return path === $location.path();
    };


  }])
  .controller('PrintCtrl', ['$scope', function ($scope) {

    $scope.getDatetime = (new Date()).getTime();

  }])
  .controller('MainCtrl',["$scope", function ($scope) {

    $scope.schemeBlack = false;

    $scope.font_norm = false;
    $scope.font_big = false;
    $scope.font_bigger = false;

    $scope.font_n = function () {
      $scope.font_norm = true;
      $scope.font_big = false;
      $scope.font_bigger = false;
    }
    $scope.font_b = function () {
      $scope.font_norm = false;
      $scope.font_big = true;
      $scope.font_bigger = false;
    }
    $scope.font_br = function () {
      $scope.font_norm = false;
      $scope.font_big = false;
      $scope.font_bigger = true;
    }




  }]);
