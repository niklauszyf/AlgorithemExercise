// function findFriends(n, heights) {
//   const stack = []
//   const friends = new Array(n).fill(0)
//   for(let i=0;i<heights.length;i++) {
//     const height = heights[i]
//     if(i<=0) {
//       stack.push({height, index: i})
//     } else {
//       let stackTopIndex = stack.length - 1
//       let stackTop = stack[stackTopIndex].height
//       let index = stack[stackTopIndex].index
//       while(height>stackTop) {        
//         friends[index] = i
//         stack.pop()
//         stackTopIndex = stack.length - 1
//         if(stackTopIndex<0) break
//         stackTop = stack[stackTopIndex].height
//         index = stack[stackTopIndex].index
//       } 
//       stack.push({height, index: i})
//     }
//   }
//   return friends
// }

console.log(findFriends(2, [100, 95]))
console.log(findFriends(8, [123, 124, 125, 121, 119, 122, 126, 123]))

function findFriends(n, heights) {
  const stack = []
  const result = new Array(n).fill(0)
  for(let i=0;i<heights.length;i++) {
    const height = heights[i]
    if(i<=0) {
      stack.push({height, index:i})
    } else {
      let stackTop = stack[stack.length-1]
      let stackTopHeight = stackTop.height
      let stackTopIndex = stackTop.index
      while(height>stackTopHeight) {
        result[stackTopIndex] = i
        stack.pop()
        if(stack.length<=0) break
        stackTop = stack[stack.length-1]
        stackTopHeight = stackTop.height
        stackTopIndex = stackTop.index
      }
      stack.push({height, index:i})

    }
  }
  return result
}
