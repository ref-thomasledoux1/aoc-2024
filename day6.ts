const path = './day6input.txt';

const file = Bun.file(path);

const text = await file.text();

let input: string[][] = text.split('\n').map(el => el.split(''));
let initialGuardPosition: { row: number; col: number } | undefined = undefined;
let initialGuardDirection: ('LEFT' | 'TOP' | 'RIGHT' | 'BOTTOM') | undefined =
  undefined;
let objectPositions: { row: number; col: number }[] = [];

for (let lineIndex = 0; lineIndex < input.length; lineIndex += 1) {
  const line = input[lineIndex];
  for (let colIndex = 0; colIndex < line.length; colIndex += 1) {
    const col = line[colIndex];
    if (col === '^' || col === '>' || col === 'v' || col === '<') {
      initialGuardPosition = { row: lineIndex, col: colIndex };
      initialGuardDirection =
        col === '^'
          ? 'TOP'
          : col === '>'
          ? 'RIGHT'
          : col === 'v'
          ? 'BOTTOM'
          : 'LEFT';
    } else if (col === '#') {
      objectPositions.push({
        col: colIndex,
        row: lineIndex,
      });
    }
  }
}

// let outsideOfMace = false;
// while (!outsideOfMace) {
//   if (guardDirection === 'TOP') {
//     const nextPosition = objectPositions
//       .filter(el => el.col === guardPosition?.col && el.row < guardPosition.row)
//       .sort((a, b) => {
//         return b.row - a.row;
//       })[0];

//     if (nextPosition) {
//       for (let i = guardPosition?.row; i > nextPosition.row; i -= 1) {
//         input[i][guardPosition?.col] = 'X';
//       }
//       guardPosition = { ...nextPosition, row: nextPosition.row + 1 };
//       guardDirection = 'RIGHT';
//     } else {
//       for (let i = guardPosition?.row; i > -1; i -= 1) {
//         input[i][guardPosition?.col] = 'X';
//       }
//       outsideOfMace = true;
//     }
//   } else if (guardDirection === 'RIGHT') {
//     const nextPosition = objectPositions
//       .filter(el => el.row === guardPosition?.row && el.col > guardPosition.col)
//       .sort((a, b) => {
//         return a.col - b.col;
//       })[0];

//     if (nextPosition) {
//       for (let i = guardPosition?.col; i < nextPosition.col; i += 1) {
//         input[guardPosition.row][i] = 'X';
//       }
//       guardPosition = { ...nextPosition, col: nextPosition.col - 1 };
//       guardDirection = 'BOTTOM';
//     } else {
//       for (let i = guardPosition?.col; i < input[0].length; i += 1) {
//         input[guardPosition.row][i] = 'X';
//       }
//       outsideOfMace = true;
//     }
//   } else if (guardDirection === 'BOTTOM') {
//     const nextPosition = objectPositions
//       .filter(el => el.col === guardPosition?.col && el.row > guardPosition.row)
//       .sort((a, b) => {
//         return a.row - b.row;
//       })[0];

//     if (nextPosition) {
//       for (let i = guardPosition?.row; i < nextPosition.row; i += 1) {
//         input[i][guardPosition?.col] = 'X';
//       }
//       guardPosition = { ...nextPosition, row: nextPosition.row - 1 };
//       guardDirection = 'LEFT';
//     } else {
//       for (let i = guardPosition?.row; i < input.length; i += 1) {
//         input[i][guardPosition?.col] = 'X';
//       }
//       outsideOfMace = true;
//     }
//   } else if (guardDirection === 'LEFT') {
//     const nextPosition = objectPositions
//       .filter(el => el.row === guardPosition?.row && el.col < guardPosition.col)
//       .sort((a, b) => {
//         return b.col - a.col;
//       })[0];

//     if (nextPosition) {
//       for (let i = guardPosition?.col; i > nextPosition.col; i -= 1) {
//         input[guardPosition?.row][i] = 'X';
//       }
//       guardPosition = { ...nextPosition, col: nextPosition.col + 1 };
//       guardDirection = 'TOP';
//     } else {
//       for (let i = guardPosition?.col; i > -1; i -= 1) {
//         input[guardPosition?.row][i] = 'X';
//       }
//       outsideOfMace = true;
//     }
//   }
// }

// console.log(input);

// console.log(
//   'part1 solution',
//   input.flat().reduce((acc, cur) => {
//     if (cur === 'X') {
//       acc += 1;
//     }
//     return acc;
//   }, 0)
// );
const checkLoop = (x: number, y: number) => {
  let outsideOfMace = false;
  let steps = 0;
  const objectPositionsExtended = [...objectPositions, { row: x, col: y }];
  let guardDirection = initialGuardDirection;
  let guardPosition = initialGuardPosition;
  while (true) {
    steps += 1;
    if (guardDirection === 'TOP') {
      const nextPosition = objectPositionsExtended
        .filter(
          el => el.col === guardPosition?.col && el.row < guardPosition.row
        )
        .sort((a, b) => {
          return b.row - a.row;
        })[0];
      if (nextPosition) {
        for (let i = guardPosition?.row; i > nextPosition.row; i -= 1) {
          input[i][guardPosition?.col] = 'X';
        }
        guardPosition = { ...nextPosition, row: nextPosition.row + 1 };
        guardDirection = 'RIGHT';
      } else {
        for (let i = guardPosition?.row; i > -1; i -= 1) {
          input[i][guardPosition?.col] = 'X';
        }
        outsideOfMace = true;
        break;
      }
    } else if (guardDirection === 'RIGHT') {
      const nextPosition = objectPositionsExtended
        .filter(
          el => el.row === guardPosition?.row && el.col > guardPosition.col
        )
        .sort((a, b) => {
          return a.col - b.col;
        })[0];

      if (nextPosition) {
        for (let i = guardPosition?.col; i < nextPosition.col; i += 1) {
          input[guardPosition.row][i] = 'X';
        }
        guardPosition = { ...nextPosition, col: nextPosition.col - 1 };
        guardDirection = 'BOTTOM';
      } else {
        for (let i = guardPosition?.col; i < input[0].length; i += 1) {
          input[guardPosition.row][i] = 'X';
        }
        outsideOfMace = true;
        break;
      }
    } else if (guardDirection === 'BOTTOM') {
      const nextPosition = objectPositionsExtended
        .filter(
          el => el.col === guardPosition?.col && el.row > guardPosition.row
        )
        .sort((a, b) => {
          return a.row - b.row;
        })[0];

      if (nextPosition) {
        for (let i = guardPosition?.row; i < nextPosition.row; i += 1) {
          input[i][guardPosition?.col] = 'X';
        }
        guardPosition = { ...nextPosition, row: nextPosition.row - 1 };
        guardDirection = 'LEFT';
      } else {
        for (let i = guardPosition?.row; i < input.length; i += 1) {
          input[i][guardPosition?.col] = 'X';
        }
        outsideOfMace = true;
        break;
      }
    } else if (guardDirection === 'LEFT') {
      const nextPosition = objectPositionsExtended
        .filter(
          el => el.row === guardPosition?.row && el.col < guardPosition.col
        )
        .sort((a, b) => {
          return b.col - a.col;
        })[0];

      if (nextPosition) {
        for (let i = guardPosition?.col; i > nextPosition.col; i -= 1) {
          input[guardPosition?.row][i] = 'X';
        }
        guardPosition = { ...nextPosition, col: nextPosition.col + 1 };
        guardDirection = 'TOP';
      } else {
        for (let i = guardPosition?.col; i > -1; i -= 1) {
          input[guardPosition?.row][i] = 'X';
        }
        outsideOfMace = true;
        break;
      }
    }
    if (steps > 6e3) {
      break;
    }
  }
  return outsideOfMace;
};

let answerPart2 = 0;
for (let x = 0; x < input[0].length; x++) {
  for (let y = 0; y < input.length; y++) {
    const guardEscaped: boolean = checkLoop(x, y);

    if (!guardEscaped) {
      answerPart2++;
    }
  }
}

console.log('answerPart2', answerPart2);

export {};
