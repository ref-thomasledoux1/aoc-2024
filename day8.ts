export const solve = async () => {
  const path = './day8input.txt';
  const file = Bun.file(path);

  const input = await file.text();

  const map: string[][] = input.split('\n').map(line => line.split(''));
  // for (let lineIndex = 0; lineIndex < map.length; lineIndex += 1) {
  //   const line = map[lineIndex]
  //   for (let colIndex = 0; colIndex < line.length; colIndex += 1) {
  //     const col = line[colIndex]
  //     if (col !== '.') {
  //       const otherOccurences = map.reduce((acc, cur, index) => {
  //         const indexOfCol = cur.indexOf(col);
  //         if (indexOfCol !== -1 && index !== lineIndex && indexOfCol !== colIndex) {
  //           acc.push({
  //             x: index,
  //             y: indexOfCol,
  //           });
  //         }
  //         return acc;
  //       }, [] as {x: number, y: number}[]);
  //       console.log(col, otherOccurences)
  //     }
  //   }
  // }
  const occurences = map.reduce((acc, cur, index) => {
    for (let colIndex = 0; colIndex < cur.length; colIndex += 1) {
      const col = cur[colIndex]
      if (col !== '.') {
        if (acc[col]) {
          acc[col].push({
            x: index,
            y: colIndex
          })
        } else {
          acc[col] = [{
            x: index,
            y: colIndex
          } ]
        }
      }
    }
    return acc;
  }, {} as Record<number, { x: number; y: number }[]>);
  Object.entries(occurences).forEach(([key, positions]) => {
    positions.forEach(position => {
      const otherPositions = positions.filter(el => el !== position)
      
    })
  })
};

const solutions = await solve();
console.log(solutions);
