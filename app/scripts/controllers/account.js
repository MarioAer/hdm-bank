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
        $scope.currency = billDrawer.draw($scope.accountBalance);
        var a=0,b=0;
        $scope.bills = [];
        $scope.coins = [];
        for (var i = 0; i < $scope.currency.length; i++){
          if ($scope.currency[i].type == 'bill'){
            $scope.bills[a] = $scope.currency[i];
            a++;
          } else if($scope.currency[i].type == 'coin'){
            $scope.coins[b] = $scope.currency[i];
            b++;
          }
        }

      });

    $scope.getNumber = function(num) {
      return new Array(num);
    }


  });
