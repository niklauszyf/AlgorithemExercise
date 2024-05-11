/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length===1) return intervals
  intervals.sort((a,b)=>a[0]-b[0])
  let result = []
  let left, right
  for(let i=0;i<intervals.length;i++){
    if(i===0){
      [left, right]=intervals[i]
    } else {
      if(intervals[i][0]>=left && intervals[i][0]<=right){
        if(intervals[i][1]>=right){
          right = intervals[i][1]
        }
        continue
      }
      if(intervals[i][0]>right){
        result.push([left, right])
        left = intervals[i][0]
        right = intervals[i][1]
      }
    }
  }
  result.push([left, right])
  return result
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[4,5]]));
console.log(merge([[1, 3]]));