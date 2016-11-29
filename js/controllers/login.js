angular.module('myapp').controller('loginController', LoginController);
LoginController.$inject = ['$scope', '$http', '$rootScope','$location', 'storage'];

function LoginController($scope, $http, $rootScope, $location, storage) {
	console.log('Login Controller');

    $scope.user = {};

    $scope.login = function(form) {
        $http({
            method: POST,
            url: '../php/login.php',
            data: $scope.user
        }).then(function(response) {
            console.log.response
        })
    }

};
