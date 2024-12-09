export const solve = async () => {
  const path = './day8input.txt';
  const file = Bun.file(path);

  const input = await file.text();

  const map: string[][] = input.split('\n').map(line => line.split(''));
  let count = 0;
  const occurences = map.reduce((acc, cur, index) => {
    for (let colIndex = 0; colIndex < cur.length; colIndex += 1) {
      const col = cur[colIndex];
      if (col !== '.') {
        if (acc[col]) {
          acc[col].push({
            x: index,
            y: colIndex,
          });
        } else {
          acc[col] = [
            {
              x: index,
              y: colIndex,
            },
          ];
        }
      }
    }
    return acc;
  }, {} as Record<number, { x: number; y: number }[]>);
  Object.entries(occurences).forEach(([key, positions]) => {
    positions.forEach(position => {
      const otherPositions = positions.filter(el => el !== position);
      otherPositions.forEach(otherPosition => {
        const initialXDiff = position.x - otherPosition.x;
        const initialYDiff = position.y - otherPosition.y;
        let xDiff = position.x - otherPosition.x;
        let yDiff = position.y - otherPosition.y;
        while (map[position.x + xDiff]?.[position.y + yDiff]) {
          map[position.x + xDiff][position.y + yDiff] = '#';
          xDiff += initialXDiff;
          yDiff += initialYDiff;
          count += 1;
        }
      });
    });
  });
  console.log(
    map.reduce((acc, cur) => (acc += cur.filter(el => el !== '.').length), 0)
  );
};

await solve();
