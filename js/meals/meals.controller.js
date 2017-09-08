
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("MealsController", [
            MealsControllerFunction
        ])

    function MealsControllerFunction() {
        console.log("I'm in the meals controller!")
        var vm = this;

    }

// END OF IIFE
})();
