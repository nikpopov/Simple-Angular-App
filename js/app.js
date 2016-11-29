var app = angular.module('myapp', ['ngRoute']);

//Page Routing Configuring
app.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/main.html',
                controller: 'mainController'
            })          
            .when('/news', {
                templateUrl: '../views/news.html',
                controller: 'newsController'
            })
//            .when('/news/:newsOneID', {
//                templateUrl: '../views/newsOne.html',
//                controller: 'newsOneController'
//            })        
            .when('/galery', {
                templateUrl: '../views/galery.html',
                controller: 'galeryController'
            })
//            .when('/galery/:imgID', {
//                templateUrl: '../views/galleryView.html',
//                controller: 'photoController'
//            })
            .when('/contacts', {
                templateUrl: '../views/contacts.html',
                controller: 'contactsController'
            })
            .when('/profile', {
                templateUrl: '../views/profile.html',
                controller: 'profileController'
            })
            .when('/login', {
                templateUrl: '../views/login.html',
                controller: 'loginController'
            })
            .when('/register', {
                templateUrl: '../views/register.html',
                controller: 'registerController'
            })
            .otherwise({
                redirectTo: '/'
            });  
}]);


app.service('storage', function() {
    var userStatus = {
        userID: '',
        userFirstName: '',
        userLastName: '',
        isLoggedIn: true,
        isAdmin: true,
        isForgotPass: true
    };
    this.getDefault = function() {
        return userStatus
    };
    this.getStatus = function(name) {
        return userStatus[name]
    };
    this.setStatus = function(name, value) {
        userStatus[name] = value
    }
});


app.run(['$window', '$rootScope', 'storage', function($window, $rootScope, storage) {
    
    storage.setStatus('isAdmin', false);

}]);


app.controller('profileController', function($scope, storage) {
    console.log('Profile Controller');
});

app.controller('contactsController', function($scope, storage) {
    console.log('Contacts Controller');
});
