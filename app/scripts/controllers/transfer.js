'use strict';





angular.module('swFrontApp')
  .controller('TransferCtrl', function ($scope, $location, $http) {

    //angular.element(document).ready(function () {
    //
    //
    //});

    $scope.currentTransferElement;
    $scope.recipientCheck = true;
    $scope.canceledTrasfer = false;
    $scope.ammountExcedsBalance = false;

    $scope.transferElements = [
      angular.element('.transfer-step0'),
      angular.element('.transfer-step1'),
      angular.element('.transfer-step2'),
      angular.element('.transfer-step3'),
      angular.element('.transfer-step4'),
      angular.element('.transfer-step5')
    ]

    $scope.transferData = {
      recipient : '',
      amount : '',
      left : ''
    }

    $http.get('/scripts/data.json')
      .then(function(res){
        $scope.bankInfo = res.data.hdm_bank_data;
        $scope.accoutnBalance = $scope.bankInfo.account.balance;
        $scope.recipients = $scope.bankInfo.recipients;
      });

    $scope.$watch( 'ammountInput' , function () {
      if ($scope.transferAmmountForm.transferAmmountInput.$dirty && ! $scope.transferAmmountForm.transferAmmountInput.$error.pattern && !$scope.transferAmmountForm.transferAmmountInput.$error.required) {
        $scope.transferData.amount = $scope.ammountInput;
        if ($scope.ammountInput.indexOf(",") > -1) {
          $scope.transAmmountInput = $scope.ammountInput.replace(',','.');
        }else {
          $scope.transAmmountInput = $scope.ammountInput;
        }
        if ($scope.accoutnBalance - $scope.transAmmountInput < 0) {
          $scope.ammountExcedsBalance = true;
        } else {
          $scope.ammountExcedsBalance = false;
        }
      }
      }
    );

    $scope.selectedIndex = -1; // Whatever the default selected index is, use -1 for no selection

    $scope.itemClicked = function ($index) {
      $scope.selectedIndex = $index;
      $scope.recipientCheck = false;
      $scope.transferData.recipient = $scope.recipients[$index].name;
      console.log($scope.transferData.recipient)
    };

    $scope.startTransfer = function () {
      angular.element('.sout-btn').hide();

      $scope.transferElements[0].hide();
      $scope.transferElements[1].show();

      $scope.currentTransferElement = 1;
      $scope.recipientCheck = true;
      $scope.canceledTrasfer = false;
      $scope.ammountInput = '';
    }

    $scope.nextStepTransfer = function() {
      if ($scope.currentTransferElement != 6){
        $scope.transferElements[$scope.currentTransferElement].hide();
        $scope.transferElements[$scope.currentTransferElement+1].show();
      }
      $scope.currentTransferElement = $scope.currentTransferElement+1;
    }

    $scope.backStepTransfer = function () {
      if ($scope.currentTransferElement != 0){
        $scope.transferElements[$scope.currentTransferElement].hide();
        $scope.transferElements[$scope.currentTransferElement-1].show();
      }
      $scope.currentTransferElement = $scope.currentTransferElement-1;
    }

    $scope.cancelTransfer = function () {
      angular.element('.sout-btn').show();
      for (var i=0; i < $scope.transferElements.length ; i++){
        $scope.transferElements[i].hide();
      }
      $scope.transferElements[0].show();
      $scope.transferData = {
        recipient : '',
        amount : '',
        left : ''
      }
      $scope.canceledTrasfer = true;
      $scope.currentTransferElement = 0;
      $scope.recipientCheck = true;
    }

    $scope.go = function ( path ) {
      $location.path( path );
    };

  })

