(function () {
    var app = angular.module('guessGame', []);
    app.controller('GuessTheNumberController', function () {
        this.verifyGuess = function () {
            this.deviation = this.original - this.guess;
            this.noOfTries = this.noOfTries + 1;
        };
        this.initializeGame = function () {
            this.noOfTries = 0;
            this.original = Math.floor((Math.random() * 1000) + 1);
            this.guess = null;
            this.deviation = null;
        };
        this.initializeGame();
    });
    app.run(function ($rootScope) {

    });
})();
