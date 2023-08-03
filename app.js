var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templaterUrl: 'pages/home.html',
        controller: 'HomeController'
    })
    .when('/blog',{
        templaterUrl: 'pages/blog.html',
        controller: 'BlogController'
    })
    .when('/about',{
        templaterUrl: 'pages/about.html',
        controller: 'AboutController'
    })
    .otherwise({redirectTo:'/'});
});
app.controller('HomeController', function($scope){
    $scope.message= 'Hello from HomeController';
});
app.controller('BlogController', function($scope){
    $scope.message= 'Hello from BlogController';
});
app.controller('AboutController', function($scope){
    $scope.message= 'Hello from AboutController';
});