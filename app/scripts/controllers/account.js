'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('AccountCtrl', function ($scope, $http, billDrawer) {

    angular.element('.sout-btn').show();

    $http.get('/scripts/data.json')
      .then(function(res){
        $scope.bankInfo = res.data.hdm_bank_data;
        $scope.accountBalance = $scope.bankInfo.account.balance;
        $scope.recipients = $scope.bankInfo.recipients;
        $scope.bills = billDrawer.draw($scope.accountBalance);
        console.log($scope.bills)
      });

    $scope.getNumber = function(num) {
      return new Array(num);
    }


  });
