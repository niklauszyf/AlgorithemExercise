// 密码检测输入（100分）
// 题目描述
// 给定用户密码输入流 input，输入流中字符 '<' 表示退格，可以清除前一个输入的字符，请你编写程序，输出最终得到的密码字符，并判断密码是否满足如下的密码安全要求。

// 密码安全要求如下：

// 密码长度 ≥ 8；
// 密码至少需要包含 1 个大写字母；
// 密码至少需要包含 1 个小写字母；
// 密码至少需要包含 1 个数字；
// 密码至少需要包含 1 个字母和数字以外的非空白特殊字符；
// 注意空串退格后仍然为空串，且用户输入的字符串不包含 '<' 字符和空白字符。

// 输入描述
// 用一行字符串表示输入的用户数据，输入的字符串中 '<' 字符标识退格，用户输入的字符串不包含空白字符，例如：

// ABC<c89%000<

// 输出描述
// 输出经过程序处理后，输出的实际密码字符串，并输出改密码字符串是否满足密码安全要求。两者间由 ',' 分隔， 例如：

// ABc89%00,true

// 用例1
// 输入
// ABC<c89%000<
// 输出
// ABc89%00,true
// 说明
// 多余的C和0由于退格被去除,最终用户输入的密码为ABc89%00，且满足密码安全要求，输出true


function checkPassword(password) {
  const array = password.split('')
  const len = array.length
  const stack = []
  for(let i=0;i<len;i++){
    if(array[i]==='<'){
      stack.pop()
    } else {
      stack.push(array[i])
    }
  }
  const pass = stack.join('')
  const reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])/
  const valid = reg.test(pass) && pass.length === 8
  return [pass, valid]
}

console.log(checkPassword('ABC<c89%000<'))
console.log(checkPassword('000<c00%000<'))