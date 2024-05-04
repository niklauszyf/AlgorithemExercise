function decode(password) {
  if(password.charAt(password.length-1)==='*'){
    password = password.slice(0, password.length-1)
  }
  const array = password.split('*')
  let map = []
  for(let i=0;i<array.length;i++){
    const str = array[i] + ''
    if(str.length>2){
      const [front, end] = [str.slice(0, str.length-2), str.slice(str.length-2)]
      const frontArray = front.split('')
      for(let j=0;j<frontArray.length;j++){
        map.push(+frontArray[j])
      }
      map.push(+end)
    } else {
      map.push(+str)
    }
  }
  let result = map.map(m=>{
    if(m===0){
      return 0+''
    } else {
      return String.fromCharCode('a'.charCodeAt(0)+m-1)
    }
   
  })
  return result.join('')
}

console.log(decode('20*19*20'))
console.log(decode('20*19*20*010*'))
console.log(decode('913*11*13*'))
console.log(decode('1'))