/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!s || (s.length % 2 === 1)) return false

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  const stk = []

  for(let ch of s){
    if(pairs.has(ch)){
      if(!stk.length || stk[stk.length-1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } 
    else {
      stk.push(ch)
    }
  }
 
  return !stk.length
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));