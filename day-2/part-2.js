"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var syncReadFile = function (filename) {
    var result = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), "utf-8");
    return result.split("\n");
};
var strategyObject = {
    A: "X",
    B: "Y",
    C: "Z"
};
var winObject = {
    Z: "X",
    X: "Y",
    Y: "Z"
};
var loseObject = {
    Z: "Y",
    Y: "X",
    X: "Z"
};
var scoreObject = {
    X: 1,
    Y: 2,
    Z: 3
};
var gameObject = {
    X: 0,
    Y: 3,
    Z: 6
};
var convertToScore = function () {
    var strategyArr = syncReadFile("./input.txt");
    var scoreArr = strategyArr.map(function (strategy) {
        var column1 = strategyObject[strategy[0]];
        var column2 = strategy[2];
        if (column2 === "Y") {
            return scoreObject[column1] + gameObject[column2];
        }
        else if (column2 === "Z") {
            var winningStrategy = winObject[column1];
            return scoreObject[winningStrategy] + gameObject[column2];
        }
        else {
            var losingStrategy = loseObject[column1];
            return scoreObject[losingStrategy];
        }
    });
    return scoreArr.reduce(function (score1, score2) { return score1 + score2; });
    return 0;
};
console.log(convertToScore());
