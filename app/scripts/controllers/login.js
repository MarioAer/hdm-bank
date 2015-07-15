'use strict';

angular.module('swFrontApp')
  .controller('LoginCtrl', ["$scope","$location", function ($scope, $location) {


    angular.element('#navbar').hide();

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.login = function () {
      $scope.go('/main');
      angular.element('#navbar').show();
    }

  }]);
