angular.module('myapp').controller('galeryController', GaleryController);
GaleryController.$inject = ['$scope', '$routeParams', '$window', '$timeout'];

function GaleryController($scope, $routeParams, $window, $timeout) {
	console.log('Galery Controller');

	var arr = [
		{
			id: 1,
			url: "../img/110.jpg"
		},
		{
			id: 2,
			url: "../img/111.jpg"
		},
		{
			id: 3,
			url: "../img/112.jpg"
		},
		{
			id: 4,
			url: "../img/113.jpg"
		},
		{
			id: 5,
			url: "../img/114.jpg"
		},
		{
			id: 6,
			url: "../img/115.jpg"
		},
		{
			id: 7,
			url: "../img/116.jpg"
		},
		{
			id: 8,
			url: "../img/117.jpg"
		},
		{
			id: 9,
			url: "../img/118.jpg"
		},
		{
			id: 10,
			url: "../img/119.jpg"
		},
		{
			id: 11,
			url: "../img/120.jpg"
		},
		{
			id: 12,
			url: "../img/121.jpg"
		},
		{
			id: 13,
			url: "../img/122.jpg"
		},
		{
			id: 14,
			url: "../img/123.jpg"
		},
		{
			id: 15,
			url: "../img/124.jpg"
		},
		{
			id: 16,
			url: "../img/125.jpg"
		},
		{
			id: 17,
			url: "../img/126.jpg"
		},
		{
			id: 18,
			url: "../img/127.jpg"
		},
		{
			id: 19,
			url: "../img/128.jpg"
		},
		{
			id: 20,
			url: "../img/129.jpg"
		},
		{
			id: 21,
			url: "../img/130.jpg"
		},
		{
			id: 22,
			url: "../img/131.jpg"
		},
		{
			id: 23,
			url: "../img/132.jpg"
		},
		{
			id: 24,
			url: "../img/133.jpg"
		},
		{
			id: 25,
			url: "../img/134.jpg"
		},
		{
			id: 26,
			url: "../img/135.jpg"
		},
		{
			id: 27,
			url: "../img/136.jpg"
		},
		{
			id: 28,
			url: "../img/137.jpg"
		},
		{
			id: 29,
			url: "../img/138.jpg"
		},
		{
			id: 30,
			url: "../img/139.jpg"
		},
		{
			id: 31,
			url: "../img/140.jpg"
		},
		{
			id: 32,
			url: "../img/141.jpg"
		},
		{
			id: 33,
			url: "../img/142.jpg"
		},
		{
			id: 34,
			url: "../img/143.jpg"
		},
		{
			id: 35,
			url: "../img/144.jpg"
		},
		{
			id: 36,
			url: "../img/145.jpg"
		},
		{
			id: 37,
			url: "../img/146.jpg"
		},
		{
			id: 38,
			url: "../img/147.jpg"
		},
		{
			id: 39,
			url: "../img/148.jpg"
		}
	];

	$scope.images = [];
	$scope.alowd = true;
	$scope.images = arr.slice(0, 12);

	$scope.delete = function(index) {

		$scope.images.splice(index, 1);

	};

	$window.onscroll = function() {

		var limit = 3;
		var scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);

		if (document.documentElement.clientHeight + $window.pageYOffset === scrollHeight) {
			console.log('YES!');
			if($scope.alowd) {
				$timeout(function() {
					for (var i = 0; i < arr.length; i++) {
						if (!$scope.images.includes(arr[i])) {
							if (limit) {
								$scope.images = $scope.images.concat(arr[i]);
								limit--;
							}
						}
					}
				}, 50)
			} else {
				console.log('Ups, something get wrong')
			}
		}
	};
};
