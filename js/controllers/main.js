angular.module('myapp').controller('mainController', MainController);
MainController.$inject = ['$scope', '$http', '$location', 'storage'];

function MainController($scope, $http, $location, storage) {
	console.log('Main Controller');
	$scope.userStatus = storage.getDefault();
};
