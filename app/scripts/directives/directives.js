'use strict';

angular.module('swFrontApp')
	.directive('task', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/task.html',
			controller: 'TaskCtrl'
		}
	})
  .directive('onlyDigits', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attr, ctrl) {
      function inputValue(val) {
        if (val) {
          var digits = val.replace(/[^0-9.]/g, '');

          if (digits !== val) {
            ctrl.$setViewValue(digits);
            ctrl.$render();
          }
          return parseFloat(digits);
        }
        return undefined;
      }
      ctrl.$parsers.push(inputValue);
    }
  }
  });
