function timeRange(times) {
  let start, end
  for(let i=0;i<times.length;i++){
    const [s, e] = times[i]
    if(i<=0) {
      start = s
      end = e
      continue
    }
    start = Math.min(start, s)
    end = Math.max(end, e)
  }
  return [start, end]
}

console.log(timeRange([[1,3], [3,4]]))
console.log(timeRange([[3,4], [1,3]]))