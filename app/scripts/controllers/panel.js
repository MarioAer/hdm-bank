'use strict';

angular.module('swFrontApp')
	.controller('PanelCtrl', function ($scope, $location) {
		
		$scope.title = 'Some Random Title';

		$scope.content = 'Some random Content';

		$scope.isActive = function (path) {
			return path === $location.path();
		};

	});