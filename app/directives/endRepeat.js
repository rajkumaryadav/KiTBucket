
		app.directive('endRepeat', ['$timeout', function ($timeout) {
			return {
				restrict: 'A',
				link: function (scope, element, attr) {
					console.log(scope.$last)
					if (scope.$last === true) {
						$timeout(function () {
							scope.$emit('ngRepeatFinished');
						});
					}
				}
			}
		}]);