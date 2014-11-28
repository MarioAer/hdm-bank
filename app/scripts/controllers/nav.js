'use strict';

angular.module('swFrontApp')
	.controller('NavCtrl', function ($scope, $location) {
		
		$scope.isActive = function (path) {
			return path === $location.path();
		};

	});