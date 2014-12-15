'use strict';

angular.module('swFrontApp')
  .controller('LoginCtrl', function ($scope, $location) {

    $scope.check = true;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.login = function () {
      if ($scope.loginForm.$valid) {
        console.log('sending request to server');
      } else {
        $scope.loginForm.submitted = true;
      }



    }
  });
