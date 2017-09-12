
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("HomeController", [
            HomeControllerFunction
        ])

    function HomeControllerFunction($scope, $rootScope, Auth) {
        console.log("I'm in the home controller!")
        var vm = this;

    }

})();
