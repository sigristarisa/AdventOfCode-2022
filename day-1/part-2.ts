import { readFileSync } from "fs";
import { join } from "path";

const syncReadFile = (filename: string): string[] => {
  const result = readFileSync(join(__dirname, filename), "utf-8");

  return result.split("\n");
};

const convertToNum = (file: string[]): (number | "")[] => {
  return file.map((calorieStr) =>
    calorieStr === "" ? "" : Number(calorieStr)
  );
};

const createCalorieArr = (): number[] => {
  const input = syncReadFile("./input.txt");
  const calorieArr = convertToNum(input);
  const calculatedCalories = [];
  let totalCalorie = 0;

  for (const calorie of calorieArr) {
    if (!calorie) {
      calculatedCalories.push(totalCalorie);
      totalCalorie = 0;
    } else {
      totalCalorie += calorie;
    }
  }

  return calculatedCalories;
};

const calculateCalories = (): number => {
  const calorieArr = createCalorieArr();
  const sortedCalorieArr = calorieArr.sort((a, b) => b - a);
  const totalCalories = sortedCalorieArr
    .splice(0, 3)
    .reduce((calorie1, calorie2) => calorie1 + calorie2);
  return totalCalories;
};

console.log(calculateCalories());
