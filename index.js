let map = new Array(22).fill(0).map(() => new Array(20).fill(0));

map.forEach((row, y) => {
  map.forEach((part, x) => {
    if (x !== 0 && y !== 0 && x !== row.length - 1 && y !== map.length - 1) {
      map[y][x] = Math.round(Math.random());
    }
  });
});

function evolve(input) {
  const newMap = new Array(22).fill(0).map(() => new Array(20).fill(0));

  input.forEach((row, y) => {
    input[y].forEach((item, x) => {
      // make sure we ignore things out of the border
      if (x !== 0 && y !== 0 && x !== row.length - 1 && y !== input.length - 1) {
        let neighbors = 0;
        if (input[y + 1][x] === 1) {
          neighbors += 1;
        }
        if (input[y - 1][x] === 1) {
          neighbors += 1;
        }
        if (input[y][x + 1] === 1) {
          neighbors += 1;
        }
        if (input[y][x - 1] === 1) {
          neighbors += 1;
        }
        if (input[y + 1][x + 1] === 1) {
          neighbors += 1;
        }
        if (input[y - 1][x - 1] === 1) {
          neighbors += 1;
        }
        if (input[y - 1][x + 1] === 1) {
          neighbors += 1;
        }
        if (input[y + 1][x - 1] === 1) {
          neighbors += 1;
        }

        if (neighbors === 3) {
          newMap[y][x] = 1;
        } else if (neighbors === 2 && input[y][x] === 1) {
          newMap[y][x] = 1;
        } else {
          newMap[y][x] = 0;
        }
      }
    });
  });
  return newMap;
}

function animate() {
  let str = '';
  map.forEach((row, y) => {
    map[y].forEach((item) => {
      if (item === 1) {
        str += '██';
      } else {
        str += '  ';
      }
    });
    str += '\n';
  });
  process.stdout.write('\x1Bc');
  process.stdout.write(str);
  map = evolve(map);

  setTimeout(() => {
    animate();
  }, 100);
}
animate();
