function simplifyLine(line) {
  // 实现简化多段线的算法
  const result = new Array()
  result.push(line[0])
  for (let i = 1; i < line.length-1; i++) {
    if((line[i][0]===line[i-1][0] && line[i][0]===line[i+1][0] )
      || (line[i][1]===line[i-1][1] && line[i][1]===line[i+1][1] )
      || ((line[i][0]-line[i-1][0])/(line[i][1]-line[i-1][1]) === (line[i][0]-line[i+1][0])/(line[i][1]-line[i+1][1]
      )
      )){
        continue
      }
    result.push(line[i])
  }
  result.push(line[line.length-1])
  return result;
}

console.log(simplifyLine([[2,8],[3,7],[3,6],[3,5],[4,4],[5,3],[6,2],[7,3],[8,4],[7,5]]) )
console.log(simplifyLine([[1,1],[2,2],[3,3],[4,4],[4,5],[4,6]]))