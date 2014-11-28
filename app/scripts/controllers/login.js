'use strict';

angular.module('swFrontApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.login = function () {
      if ($scope.loginForm.$valid) {
        console.log('sending request to server');
      } else {
        $scope.loginForm.submitted = true;
      }
    }
  });
