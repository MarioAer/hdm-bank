'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('AccountCtrl', function ($scope, $http) {

    angular.element('.sout-btn').show();

    $http.get('/scripts/data.json')
      .then(function(res){
        $scope.bankInfo = res.data.hdm_bank_data;
        $scope.accoutnBalance = $scope.bankInfo.account.balance;
        $scope.recipients = $scope.bankInfo.recipients;
      });

  });
