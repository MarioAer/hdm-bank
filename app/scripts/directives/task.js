'use strict';

angular.module('swFrontApp')
	.directive('task', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/task.html',
			controller: 'PanelCtrl'
		}
	})