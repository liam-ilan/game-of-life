var readline = require('readline');
let width = process.stdout.columns
let height = process.stdout.rows
map = new Array(22).fill(0).map(function(){
  return new Array(20).fill(0)
});

map[10][10] = 1
map[10][11] = 1
map[12][11] = 1
map[11][13] = 1
map[10][14] = 1
map[10][15] = 1
map[10][16] = 1


function evolve(input){
  let newMap = new Array(22).fill(0).map(function(){
    return new Array(20).fill(0)
  });
  console.log()

  input.forEach(function(row, y){
    input[y].forEach(function(item, x){
      // make sure we ignore things out of the border
      if(x !== 0 && y !== 0 && x != row.length - 1 && y != input.length - 1 ) {
        let neighbors = 0
        if(input[y+1][x] === 1){neighbors++}
        if(input[y-1][x] === 1){neighbors++}
        if(input[y][x+1] === 1){neighbors++}
        if(input[y][x-1] === 1){neighbors++}
        if(input[y+1][x+1] === 1){neighbors++}
        if(input[y-1][x-1] === 1){neighbors++}
        if(input[y-1][x+1] === 1){neighbors++}
        if(input[y+1][x-1] === 1){neighbors++}
        
        if(neighbors === 3){
          newMap[y][x] = 1
        }else if(neighbors === 2 && input[y][x] === 1){
          newMap[y][x] = 1
        }else{
          newMap[y][x] = 0
        }
      }
    })
  })
  return newMap
}

function animate(){

  let str = ""
    map.forEach(function(row, y){
      map[y].forEach(function(item,x){
        if(item ==1){
          str = str+"██"
        }else{
          str = str+"  "
        }
      })
      str = str+'\n'
    })
    process.stdout.write('\x1Bc');
    process.stdout.write(str)
    map = evolve(map)

  setTimeout(function(){ animate() }, 100);
}
animate()

