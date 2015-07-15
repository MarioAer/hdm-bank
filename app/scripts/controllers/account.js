'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('AccountCtrl', ["$scope","$http","billDrawer", function ($scope, $http, billDrawer) {

    angular.element('.sout-btn').show();

    $scope.accountNumber = 'AC30345897';

    $http.get(  'http://localhost:3000/accounts/' + $scope.accountNumber,
      { "headers": { "Authorization": "Basic " + btoa("bob" + ":" + "secret") }
    }).success(function(response) {
        $scope.accountBalance = parseFloat(response[0].currentBalance)/100;
        $scope.balanceSorted = billDrawer.draw($scope.accountBalance);
        var tmp_a = 0, tmp_b = 0;
        $scope.bills = [];
        $scope.coins = [];
        for (var i = 0; i < $scope.balanceSorted.length; i++){
          if ($scope.balanceSorted[i].type == 'bill'){
            $scope.bills[tmp_a] = $scope.balanceSorted[i];
            tmp_a++;
          } else if($scope.balanceSorted[i].type == 'coin'){
            $scope.coins[tmp_b] = $scope.balanceSorted[i];
            tmp_b++;
          }
        }
      });

    $scope.getNumber = function(num) {
      return new Array(num);
    }


  }]);
