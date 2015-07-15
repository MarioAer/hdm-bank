'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('OrderCtrl',["$scope", function ($scope) {

    angular.element('.sout-btn').show();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
