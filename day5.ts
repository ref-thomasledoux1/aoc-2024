const pathpart1 = './day5inputpart1.txt';
const pathpart2 = './day5inputpart2.txt';
const filepart1 = Bun.file(pathpart1);
const filepart2 = Bun.file(pathpart2);

const textpart1 = await filepart1.text();
const textpart2 = await filepart2.text();

const test = textpart1.split('\n').map(el => el.split('|'))
const test2 = textpart2.split('\n').map(el => el.split(','))
console.log(test)
console.log(test2)

for (let i = 0; i < test2.length; i+= 1) {
  const line = test2[i]
  for (let j = 0; j < line.length; j+= 1) {
    const col = line[j]
    
  }
}

export {}