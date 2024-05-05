/**
 * @param {string} s
 * @return {number}
 */

// 暴力法
// var lengthOfLongestSubstring = function(s) {
//   if(!s || !s.length) return 0
//   const array = s.split('')
//   const len = array.length
//   let result = 0
//   let temp = []
//   for(let i=0;i<len;i++){
//     if(!temp.includes(array[i])){
//       temp.push(array[i])
//       result = Math.max(result, temp.length)
//     } else {
//       temp.length = 0
//     }
//   }
//   return result
// };

// 滑动窗口
var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  let result = 0, point = 0
  const n = s.length
  for(let i=0;i<s.length;i++){
    if(i!==0){
      set.delete(s.charAt(i-1))
    }
    while(point<n && !set.has(s.charAt(point)) ){
      set.add(s.charAt(point))
      point++
    }
    // 这里因为while循环结束前会point++，所以实际的point大了1，这里长度就是point-i+1-1
    result = Math.max(result, point-i)
  }
  return result
};



console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"));