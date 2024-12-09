type Equation = { target: number; numbers: number[] };

interface Solutions {
  part1: number;
  part2: number;
}

export const solve = async (): Promise<{ solutions: Solutions }> => {
  const path = './day7input.txt';
  const file = Bun.file(path);
  
  const input = await file.text();

  const equations: Equation[] = input
    .trim()
    .split("\n")
    .map((line) => {
      const [target, nums] = line.split(": ");
      return { target: +target, numbers: nums.split(" ").map(Number) };
    });

  const evaluate = (nums: number[], target: number, ops: string[]): boolean => {
    const calc = (value: number, num: number, op: string): number =>
      op === "+"
        ? value + num
        : op === "*"
        ? value * num
        : +(value.toString() + num);

    return nums
      .slice(1)
      .reduce(
        (results, num) => {
          const newResults: number[] = [];
          console.log('results', results)
          results.forEach((val) =>
            ops.forEach((op) => newResults.push(calc(val, num, op)))
          );
          console.log('newresults', newResults)
          return newResults;
        },
        [nums[0]]
      )
      .includes(target);
  };

  const calculate = (ops: string[]): number =>
    equations.reduce(
      (sum, { target, numbers }) =>
        sum + (evaluate(numbers, target, ops) ? target : 0),
      0
    );

  return {
    solutions: {
      part1: calculate(["+", "*"]),
      // part2: calculate(["+", "*", "||"]),
    },
  };
};

const solutions = await solve();
console.log(solutions);