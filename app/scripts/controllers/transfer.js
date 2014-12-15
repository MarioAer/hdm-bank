'use strict';

angular.module('swFrontApp')
  .controller('TransferCtrl', function ($scope, $location, $http, ngDialog, billDrawer) {

    $scope.currentTransferElement;
    $scope.recipientCheck = true;
    $scope.canceledTrasfer = false;
    $scope.ammountExcedsBalance = false;
    $scope.pausedTrasfer = false;
    $scope.selectedIndex = -1; // Whatever the default selected index is, use -1 for no selection
    $scope.cancelWarningMsg = false;

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

    // get the account data
    $http.get('/scripts/data.json')
      .then(function(res){
        $scope.bankInfo = res.data.hdm_bank_data;
        $scope.accoutnBalance = $scope.bankInfo.account.balance;
        $scope.recipients = $scope.bankInfo.recipients;
      });

    $scope.go = function ( path ) {
      $location.path( path );
    };

    // sets variables to start a new transfer
    $scope.startTransfer = function () {
      angular.element('.sout-btn').hide();

      $scope.transferElements[0].hide();
      $scope.transferElements[1].show();

      $scope.currentTransferElement = 1;
      $scope.recipientCheck = true;
      $scope.canceledTrasfer = false;
      $scope.pausedTrasfer = false;
      $scope.ammountInput = '';

      $scope.step4Value1 = false;
      $scope.step4Value2 = false;

    }

    $scope.stopTransfer = function () {
      $scope.pausedTrasfer = true;
    }

    $scope.cancelWarning = function () {
      $scope.cancelWarningMsg = !$scope.cancelWarningMsg;
    }


    $scope.cancelTransfer = function () {
      angular.element('.sout-btn').show();
      angular.element('.cancel-warning').hide();
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

    $scope.pauseTransfer = function () {
      angular.element('.sout-btn').show();
      angular.element('.pause-warning').hide();
      for (var i=0; i < $scope.transferElements.length ; i++){
        $scope.transferElements[i].hide();
      }
      $scope.transferElements[0].show();
      $scope.transferData = {
        recipient : '',
        amount : '',
        left : ''
      }
      $scope.pausedTrasfer = true;
      $scope.currentTransferElement = 0;
      $scope.recipientCheck = true;
    }



    $scope.nextStepTransfer = function() {

      $scope.pausedTrasfer = false;
      $scope.cancelWarningMsg = false;

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

    // dialog control for any new transfer recipiants
    $scope.addTransferRecipient = function (){
      ngDialog.open({
        template: '<form role="form" ng-submit="close()"> <div class="form-group"> <label for="exampleInput1">Name</label> <input type="text" class="form-control" id="exampleInput1" placeholder="Name"> <p class="help-block">Suspendisse vel consequat elit, et vehicula tortor.</p></div><div class="form-group"> <label for="exampleInput2">Bank</label> <input type="text" class="form-control" id="exampleInput2" placeholder="Bank"> <p class="help-block">Suspendisse vel consequat elit, et vehicula tortor.</p></div><div class="form-group"> <label for="exampleInput3">IBAN</label> <input type="text" class="form-control" id="exampleInput3" placeholder="IBAN"> <p class="help-block">Suspendisse vel consequat elit, et vehicula tortor.</p></div><button type="submit" class="btn btn-default">Submit</button> </form>',
        plain: true,
        controller: ['$scope', function($scope) {
          $scope.close = function () {
            $scope.closeThisDialog('');
          }
        }]
      });
    }

    // lets the user just select one user at a time
    $scope.itemClicked = function ($index) {
      $scope.selectedIndex = $index;
      $scope.recipientCheck = false;
      $scope.transferData.recipient = $scope.recipients[$index].name;
      console.log($scope.transferData.recipient)
    };

    // watches transfer ammount input field for any changes
    $scope.$watch( 'ammountInput' , function () {
      if ($scope.transferAmmountForm.transferAmmountInput.$dirty && !$scope.transferAmmountForm.transferAmmountInput.$error.pattern && !$scope.transferAmmountForm.transferAmmountInput.$error.required) {

        //check if the user inserts a comma, and replace it with a .
        if ($scope.ammountInput.indexOf(",") > -1) {
          $scope.transAmmountInput = $scope.ammountInput.replace(',','.');
        }else {
          $scope.transAmmountInput = $scope.ammountInput;
        }

        // check if the user has enough money in their account
        if ($scope.accoutnBalance - $scope.transAmmountInput < 0) {
          $scope.ammountExcedsBalance = true;
        } else {
          $scope.ammountExcedsBalance = false;
        }


        // draw bills function @TODO still not working
        if ($scope.ammountExcedsBalance == false && !$scope.transferAmmountForm.transferAmmountInput.$error.pattern){
          $scope.currency = billDrawer.draw($scope.transAmmountInput);
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
        }

        // give ammount to the transferData object
        $scope.transferData.amount = $scope.transAmmountInput;

        // calculate how much money is left
        $scope.transferData.left = $scope.accoutnBalance - $scope.transferData.amount;

      }

      $scope.getNumber = function(num) {
        return new Array(num);
      }

    });
  })

