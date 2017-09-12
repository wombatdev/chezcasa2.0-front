
"use strict";

(function() {
    angular.module ("chezcasa", [
            "ui.router",
            "ngResource",
            "ngAnimate",
            // "meals"
        ])
        .config ([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            RouterFunction
        ])

        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true)
            $stateProvider
                .state("About", {
                    url: "/",
                    templateUrl: "/js/about.html",
                    controller: "AboutController",
                    controllerAs: "AboutViewModel"
                })
                .state("Home", {
                    url: "/index",
                    templateUrl: "/js/index.html",
                    controller: "HomeController",
                    controllerAs: "HomeViewModel"
                })
                .state("Meals",{
                    url:"/meals",
                    templateUrl:"/js/meals/meals.html",
                    controller: "MealsController",
                    controllerAs: "MealsViewModel"
                })
                .state("Signin",{
                    url:"/signin",
                    templateUrl:"/js/chefs/signin.html",
                    controller: "SigninController",
                    controllerAs: "SigninViewModel"
                })
                .state("Signup",{
                    url:"/signup",
                    templateUrl:"/js/chefs/signup.html",
                    controller: "SignupController",
                    controllerAs: "SignupViewModel"
                })
                .state("Chefs",{
                    url:"/chefs",
                    templateUrl:"/js/chefs/chefs.html",
                    controller: "ChefsController",
                    controllerAs: "ChefsViewModel"
                })
                .state("Apply",{
                    url:"/apply",
                    templateUrl:"/js/chefs/apply.html",
                    controller: "ApplyController",
                    controllerAs: "ApplyViewModel"
                })
            $urlRouterProvider.otherwise("/")
        }

// END OF IIFE
})();
