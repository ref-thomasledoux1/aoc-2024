const path = './day3input.txt';
const file = Bun.file(path);

const text = await file.text();

const getSumForString = (input: string) => {
  return input
    .match(/mul\(\d+,\d+\)/g)
    ?.map(el => el.replace(/mul\(/g, ''))
    .map(el => el.replace(/\)/g, ''))
    .map(el => {
      const [num1, num2] = el.split(',').map(Number);
      if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return 0;
      }
      return num1 * num2;
    })
    .reduce((acc, cur) => acc + cur, 0);
};

// part 1
const part1Solution = getSumForString(text);

// part 2

const donts = text.split(/don't\(\)/g);
let enabledStrings = text.split(/don't\(\)/)[0];
for (const dont of donts.slice(1)) {
  // console.log(dont.split('do()'));
  const enabledPart =
    dont.split('do()').length === 1 ? '' : dont.split('do()').slice(1).join('');
  enabledStrings += enabledPart;
}

const part2Solution = getSumForString(enabledStrings);
export {};
