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
var createCalorieArr = function () {
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
    return calculatedCalories;
};
var calculateCalories = function () {
    var calorieArr = createCalorieArr();
    var sortedCalorieArr = calorieArr.sort(function (a, b) { return b - a; });
    var totalCalories = sortedCalorieArr
        .splice(0, 3)
        .reduce(function (calorie1, calorie2) { return calorie1 + calorie2; });
    return totalCalories;
};
console.log(calculateCalories());
