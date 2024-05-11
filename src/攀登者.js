// function mountainCount(array) {
//   let result = 0
//   if(!array || !Array.isArray(array) || !array.length) return result
//   const len = array.length
//   for(let i=0;i<len;i++){
//     if(i===0){
//       if(array[i]>array[i+1]){
//         result+=1
//         continue
//       }
//     }
//     if(i===len-1){
//       if(array[i]>array[i-1]){
//         result+=1
//         continue
//       }
//     }
//     if(array[i]>array[i-1] && array[i]>array[i+1]){
//       result+=1
//     }
//   }
//   return result
// }

// console.log(mountainCount([0, 1, 4, 3, 1, 0, 0, 1, 2, 3, 1, 2, 1, 0]))



