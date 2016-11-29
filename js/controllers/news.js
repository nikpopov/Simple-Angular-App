angular.module('myapp').controller('newsController', NewsController);
NewsController.$inject = ['$scope', '$http', '$location', 'storage'];

function NewsController($scope, $http, $location, storage) {
    console.log('News Controller');

    $scope.newses = [
        {
            content_id: "1",
            content_type: "news",
            content_img: "../img/news1.jpg",
            content_title: 'Some News from the other hand of the world #1',
            content_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            content_text: ""
        },
        {
            content_id: "2",
            content_type: "news",
            content_img: "../img/news2.jpg",
            content_title: 'Some News from the other hand of the world #2',
            content_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            content_text: ""
        },
        {
            content_id: "3",
            content_type: "news",
            content_img: "../img/news3.jpg",
            content_title: 'Some News from the other hand of the world #3',
            content_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            content_text: ""        
        },
        {
            content_id: "4",
            content_type: "news",
            content_img: "../img/news4.jpg",
            content_title: 'Some News from the other hand of the world #4',
            content_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            content_text: ""        
        }
    ];

    $scope.read_news = function(news) {
        console.log(news.content_id);

    };
};
