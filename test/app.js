angular.module("myapp",["ngRoute","ctrls","sevices","ngAnimate"]).
    config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"index.html",
        controller:"index"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"show.html"
    }).otherwise("/")
})