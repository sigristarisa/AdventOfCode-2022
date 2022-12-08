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
    X: "Z",
    Y: "X",
    Z: "Y"
};
var scoreObject = {
    X: 1,
    Y: 2,
    Z: 3
};
var convertToScore = function () {
    var strategyArr = syncReadFile("./input.txt");
    var scoreArr = strategyArr.map(function (strategy) {
        var column1 = strategyObject[strategy[0]];
        var column2 = strategy[2];
        if (column1 === column2) {
            return scoreObject[column2] + 3;
        }
        else if (winObject[column2] === column1) {
            return scoreObject[column2] + 6;
        }
        else {
            return scoreObject[column2];
        }
    });
    return scoreArr.reduce(function (score1, score2) { return score1 + score2; });
};
console.log(convertToScore());
