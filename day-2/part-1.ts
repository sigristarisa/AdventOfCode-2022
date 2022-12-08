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
  X: "Z", // rock wins scissors
  Y: "X", // paper wins rock
  Z: "Y", // scissors win paper
};

const scoreObject: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const convertToScore = (): number => {
  const strategyArr = syncReadFile("./input.txt");

  const scoreArr = strategyArr.map((strategy) => {
    const column1 = strategyObject[strategy[0]];
    const column2 = strategy[2];

    if (column1 === column2) {
      return scoreObject[column2] + 3;
    } else if (winObject[column2] === column1) {
      return scoreObject[column2] + 6;
    } else {
      return scoreObject[column2];
    }
  });

  return scoreArr.reduce((score1, score2) => score1 + score2);
};

console.log(convertToScore());
