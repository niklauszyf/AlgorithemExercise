
// 幼儿园组织活动，老师布置了一个任务: 每个小朋友去了解与自己同一个小区的小朋友还有几个。
// 我们将这些数量汇总到数组garden中，请根据这些小朋友给出的信息，计算班级小朋友至少有多少个？

// 说明 garden数组长度最大为999，每个小区的小朋友数量最多1000人，也就是garden的范围为[0, 999]

// 输入 garden = [2, 2, 3]
// 输出 7

// 第一个小朋友反馈有两个小朋友和自己同一小区，即此小区有3个小朋友

// 第二个小朋友反馈有两个小朋友和自己同一小区，即此小区有3个小朋友。

// 这两个小朋友，可能是同一小区的，且此小区的小朋友只有3个人。

// 第三个小朋友反馈还有3个小朋友与自己同一小区，则这些小朋友只能是另外一个小区的。这个小区有4个小朋友。

// 班级里至少有3+4 = 7个小朋友。

function calcChildsCount (garden) {
  let sum = 0;

  if(!garden || garden.length === 0 || garden.length >= 1000) return sum;
  let sumMap = new Map()
  for(let i=0;i<garden.length;i++){
    if(sumMap.has(garden[i])) {
      continue
    } else {
      sumMap.set(garden[i], Math.ceil(garden.filter(item=>item===garden[i]).length/(garden[i]+1)) )
    }
  }
  sumMap.forEach((value)=>{
    sum += value
  })
  return sum
}

console.log(calcChildsCount([2, 2, 3]));
console.log(calcChildsCount([0, 0, 0]))



