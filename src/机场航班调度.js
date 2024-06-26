// 机场航班调度（100分）
// XX市机场停放了多架飞机，每架飞机都有自己的航班号CA3385，CZ6678，SC6508等，航班号的前2个大写字母（或数字）代表航空公司的缩写，后面4个数字代表航班信息。

// 但是XX市机场只有一条起飞跑道，调度人员需要安排目前停留在机场的航班有序起飞。

// 为保障航班的有序起飞，调度员首先按照航空公司的缩写（航班号前2个字母）对所有航班进行排序，同一航空公司的航班再按照航班号的后4个数字进行排序，最终获得安排好的航班的起飞顺序。

// 请编写一段代码根据输入的航班号信息帮助调度员输出航班的起飞顺序。

// 说明：

// 航空公司缩写排序按照从特殊符号$ & *，0~9，A~Z排序；

// 输入描述
// 第一行输入航班信息，多个航班号之间用逗号 "," 分隔，输入的航班号不超过100个。

// 例如：

// CA3385,CZ6678,SC6508,DU7523,HK4456,MK0987

// 备注：

// 航班号为6为长度，后4位位纯数字，不考虑存在后4位重复的场景。

// 输出描述
// CA3385,CZ6678,DU7523,HK4456,MK0987,SC6508

// 用例1
// 输入
// CA3385,CZ6678,SC6508,DU7523,HK4456,MK0987
// 输出
// CA3385,CZ6678,DU7523,HK4456,MK0987,SC6508
// 说明
// 输入为目前停留在该机场的航班号，输出为按照调度排序后输出的有序的航班号

// 用例2
// 输入
// MU1087,CA9908,3U0045,FM1703
// 输出
// 3U0045,CA9908,FM1703,MU1087

function sort(array) {
  if(!array || !Array.isArray(array) || array.length<2) return array
  return array.sort((a, b)=>{
    const [aStr, aNum] = splitItem(a)
    const [bStr, bNum] = splitItem(b)
    if(aStr===bStr){
      return Number(aNum) - Number(bNum)
    } else {
      return aStr.localeCompare(bStr)
    }
  })
}

function splitItem (item) {
  return [item.slice(0, 2), item.slice(2)]
}
console.time()
console.log(sort(['CA3385','CZ6678','SC6508','DU7523','HK4456','MK0987']))
console.log(sort(['MU1087','CA9908','3U0045','FM1703']))
console.timeEnd()

