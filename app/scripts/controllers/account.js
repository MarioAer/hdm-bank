'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('AccountCtrl', function ($scope) {

    angular.element('.sout-btn').show();
    $scope.account = {
      amount : '540.50'
    }

  });
