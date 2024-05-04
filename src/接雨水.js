// 动态规划
// var trap = function(height) {
//   let result = 0
//   if(!height || !height.length) return result
//   const len = height.length
//   const leftMax = new Array(len).fill(0)
//   leftMax[0] = height[0]
//   for(let i=1;i<len;i++){
//       leftMax[i] = Math.max(leftMax[i-1], height[i])
//   }

//   const rightMax = new Array(len).fill(0)
//   rightMax[len-1] = height[len-1]
//   for(let i=len-2;i>=0;i--){
//       rightMax[i] = Math.max(rightMax[i+1], height[i])
//   }

//   for(let i=0;i<len;i++){
//       result += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }
//   return result
// };

// 双指针
var trap = function(height) {
  let result = 0
  if(!height || !height.length) return result
  const len = height.length
  let left = 0, right = len-1
  let leftMax = 0, rightMax = 0
  while(left<right){
      leftMax = Math.max(leftMax, height[left])
      rightMax = Math.max(rightMax, height[right])
      if(height[left]<height[right]){
          result += leftMax-height[left]
          left++
      } else {
          result += rightMax - height[right]
          right--
      }
  }


  return result
};

console.log(trap([4,2,0,3,2,5]))
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))