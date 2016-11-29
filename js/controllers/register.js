angular.module('myapp').controller('registerController', RegisterController);
RegisterController.$inject = ['$scope', '$http', '$location', 'storage'];

function RegisterController($scope, $http, $location, storage) {
	console.log('Register Controller');

    $scope.user = {};

    $scope.register = function(user) {

        $http({
            method: 'POST',
            url: '../php/register.php',
            data: $scope.user
        }).then(function(response) {
            console.log.response
            $scope.user = {};
            $location.path('/');
        })
    }

};
