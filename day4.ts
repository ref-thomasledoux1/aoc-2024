const path = './day4input.txt';
const file = Bun.file(path);

const text = await file.text();

const charArr: string[][] = text.split('\n').map(el => el.split(''));
let counter = 0;

let matchFound = 0;
for (let lineIndex = 0; lineIndex < charArr.length; lineIndex += 1) {
  const line = charArr[lineIndex];
  for (let colIndex = 0; colIndex < line.length; colIndex += 1) {
    const col = line[colIndex];
    if (col === 'M') {
      if (
        charArr[lineIndex - 2]?.[colIndex - 2] === 'S' &&
        charArr[lineIndex - 1]?.[colIndex - 1] === 'A' &&
        ((charArr[lineIndex - 2]?.[colIndex] === 'S' &&
          line[colIndex - 2] === 'M') ||
          (charArr[lineIndex - 2]?.[colIndex] === 'M' &&
            line[colIndex - 2] === 'S'))
      ) {
        matchFound += 1;
      }
      if (
        charArr[lineIndex + 2]?.[colIndex + 2] === 'S' &&
        charArr[lineIndex + 1]?.[colIndex + 1] === 'A' &&
        ((charArr[lineIndex + 2]?.[colIndex] === 'S' &&
          line[colIndex + 2] === 'M') ||
          (charArr[lineIndex + 2]?.[colIndex] === 'M' &&
            line[colIndex + 2] === 'S'))
      ) {
        matchFound += 1;
      }
      if (
        charArr[lineIndex - 2]?.[colIndex + 2] === 'S' &&
        charArr[lineIndex - 1]?.[colIndex + 1] === 'A' &&
        ((charArr[lineIndex - 2]?.[colIndex] === 'S' &&
          line[colIndex + 2] === 'M') ||
          (charArr[lineIndex - 2]?.[colIndex] === 'M' &&
            line[colIndex + 2] === 'S'))
      ) {
        matchFound += 1;
      }
      if (
        charArr[lineIndex + 2]?.[colIndex - 2] === 'S' &&
        charArr[lineIndex + 1]?.[colIndex - 1] === 'A' &&
        ((charArr[lineIndex + 2]?.[colIndex] === 'S' &&
          line[colIndex - 2] === 'M') ||
          (charArr[lineIndex + 2]?.[colIndex] === 'M' &&
            line[colIndex - 2] === 'S'))
      ) {
        matchFound += 1;
      }
    }
    // if (col === 'X') {
    //   if (
    //     line[colIndex - 1] === 'M' &&
    //     line[colIndex - 2] === 'A' &&
    //     line[colIndex - 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     line[colIndex + 1] === 'M' &&
    //     line[colIndex + 2] === 'A' &&
    //     line[colIndex + 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex - 1]?.[colIndex] === 'M' &&
    //     charArr[lineIndex - 2]?.[colIndex] === 'A' &&
    //     charArr[lineIndex - 3]?.[colIndex] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex - 1]?.[colIndex - 1] === 'M' &&
    //     charArr[lineIndex - 2]?.[colIndex - 2] === 'A' &&
    //     charArr[lineIndex - 3]?.[colIndex - 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex - 1]?.[colIndex + 1] === 'M' &&
    //     charArr[lineIndex - 2]?.[colIndex + 2] === 'A' &&
    //     charArr[lineIndex - 3]?.[colIndex + 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex + 1]?.[colIndex] === 'M' &&
    //     charArr[lineIndex + 2]?.[colIndex] === 'A' &&
    //     charArr[lineIndex + 3]?.[colIndex] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex + 1]?.[colIndex + 1] === 'M' &&
    //     charArr[lineIndex + 2]?.[colIndex + 2] === 'A' &&
    //     charArr[lineIndex + 3]?.[colIndex + 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    //   if (
    //     charArr[lineIndex + 1]?.[colIndex - 1] === 'M' &&
    //     charArr[lineIndex + 2]?.[colIndex - 2] === 'A' &&
    //     charArr[lineIndex + 3]?.[colIndex - 3] === 'S'
    //   ) {
    //     counter += 1;
    //   }
    // }
  }
}

console.log(matchFound / 2);

export {};
