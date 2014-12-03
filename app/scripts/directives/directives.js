'use strict';

angular.module('swFrontApp')
	.directive('task', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/task.html',
			controller: 'TaskCtrl'
		}
  })
  .filter('currency', function() {
    return function(number, currencyCode) {
      var currency = {
          USD: "$",
          GBP: "£",
          AUD: "$",
          EUR: "€",
          CAD: "$",
          MIXED: "~"
        },
        thousand, decimal, format;
      if ($.inArray(currencyCode, ["USD", "AUD", "CAD", "MIXED"]) >= 0) {
        thousand = ",";
        decimal = ".";
        format = "%s%v";
      } else {
        thousand = ".";
        decimal = ",";
        format = "%s%v";
      };
      return accounting.formatMoney(number, currency[currencyCode], 2, thousand, decimal, format);
    };
  })
  .directive('numbersOnly', function(){
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        modelCtrl.$parsers.push(function (inputValue) {
          if (inputValue == undefined) return ''
          var transformedInput = inputValue.replace(/[^0-9+(.|,)]/g, '');
          if (transformedInput!=inputValue) {
            modelCtrl.$setViewValue(transformedInput);
            modelCtrl.$render();
          }

          return transformedInput;
        });
      }
    };
  });

