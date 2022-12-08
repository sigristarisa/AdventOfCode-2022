"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var syncReadFile = function (filename) {
    var result = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), "utf-8");
    return result.split("\n");
};
var convertToNum = function (file) {
    return file.map(function (calorieStr) {
        return calorieStr === "" ? "" : Number(calorieStr);
    });
};
var calculateCalories = function () {
    var input = syncReadFile("./input.txt");
    var calorieArr = convertToNum(input);
    var calculatedCalories = [];
    var totalCalorie = 0;
    for (var _i = 0, calorieArr_1 = calorieArr; _i < calorieArr_1.length; _i++) {
        var calorie = calorieArr_1[_i];
        if (!calorie) {
            calculatedCalories.push(totalCalorie);
            totalCalorie = 0;
        }
        else {
            totalCalorie += calorie;
        }
    }
    return Math.max.apply(Math, calculatedCalories);
};
console.log(calculateCalories());
