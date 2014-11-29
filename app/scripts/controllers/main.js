'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('MainCtrl', function ($scope, $location) {

  })
  .controller('NavCtrl', function ($scope, $location) {

    $scope.isActive = function (path) {
      return path === $location.path();
    };

  });
