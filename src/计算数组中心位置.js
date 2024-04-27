function findCenterPosition(nums) {
  let left = 1, right = 1
  for(let i=0;i<nums.length;i++){
    right = right * nums[i]
  }
  for(let i=0;i<nums.length;i++){
    right = right / nums[i]
    if(left === right) {
      return i
    } else {
      left = left * nums[i]
    }
  }
}
console.log(findCenterPosition([2, 5, 3, 6, 5, 6]))
