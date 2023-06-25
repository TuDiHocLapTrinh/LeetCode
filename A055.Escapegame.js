process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let grids = [];
let sCoordinates = [];
reader.on('line', (line) => {
  lines.push(line.split(''));
  grids = lines.slice(1);
});

const dy = [0, -1, 1, 0];
const dx = [-1, 0, 0, 1];

reader.on('close', () => {
  let result = 'NO';
  const [maxY, maxX] = [Number(lines[0][0]), Number(lines[0][2])];
  if (maxY <= 2) result = 'YES';
  const visted = grids;
  // find S coordinates
  for (const row of grids) {
    const xAxis = row.indexOf('S');
    if (xAxis !== -1) sCoordinates = [grids.indexOf(row), xAxis];
  }

  function dfs(y, x) {
    grids[y][x] = 'S';
    for (let i = 0; i < 4; i++) {
      let y1 = y + dy[i];
      let x1 = x + dx[i];
      if (
        x1 >= 0 &&
        x1 <= maxX - 1 &&
        y1 >= 0 &&
        y1 <= maxY - 1 &&
        grids[y1][x1] === '.'
      ) {
        if (x1 === 0 || x1 === maxX - 1 || y1 === 0 || y1 === maxY - 1)
          result = 'YES';
        dfs(y1, x1);
      }
    }
  }

  if (
    sCoordinates[1] === 0 ||
    sCoordinates[1] === maxX - 1 ||
    sCoordinates[0] === 0 ||
    sCoordinates[0] === maxY - 1
  )
    result = 'YES';
  dfs(sCoordinates[0], sCoordinates[1]);

  console.log(result);
  //   console.log("NO")
});
