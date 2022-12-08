import { readFileSync } from "fs";
import { join } from "path";

const syncReadFile = (filename: string): string[] => {
  const result = readFileSync(join(__dirname, filename), "utf-8");

  return result.split("\n");
};

const strategyObject: Record<string, string> = {
  A: "X", // rock
  B: "Y", // paper
  C: "Z", // scissors
};

const winObject: Record<string, string> = {
  Z: "X", // rock wins scissors
  X: "Y", // paper wins rock
  Y: "Z", // scissors wins paper
};

const loseObject: Record<string, string> = {
  Z: "Y",
  Y: "X",
  X: "Z",
};

const scoreObject: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const gameObject: Record<string, number> = {
  X: 0,
  Y: 3,
  Z: 6,
};

const convertToScore = (): number => {
  const strategyArr = syncReadFile("./input.txt");

  const scoreArr = strategyArr.map((strategy) => {
    const column1 = strategyObject[strategy[0]];
    const column2 = strategy[2];

    if (column2 === "Y") {
      return scoreObject[column1] + gameObject[column2];
    } else if (column2 === "Z") {
      const winningStrategy = winObject[column1];
      return scoreObject[winningStrategy] + gameObject[column2];
    } else {
      const losingStrategy = loseObject[column1];
      return scoreObject[losingStrategy];
    }
  });

  return scoreArr.reduce((score1, score2) => score1 + score2);
  return 0;
};

console.log(convertToScore());
