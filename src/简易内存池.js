// 简易内存池（200分）
// 题目描述
// 请实现一个简易内存池,根据请求命令完成内存分配和释放。

// 内存池支持两种操作命令，REQUEST和RELEASE，其格式为：

// REQUEST=请求的内存大小 表示请求分配指定大小内存，如果分配成功，返回分配到的内存首地址；如果内存不足，或指定的大小为0，则输出error。

// RELEASE=释放的内存首地址 表示释放掉之前分配的内存，释放成功无需输出，如果释放不存在的首地址则输出error。

// 注意：
// 内存池总大小为100字节。

// 内存池地址分配必须是连续内存，并优先从低地址分配。

// 内存释放后可被再次分配，已释放的内存在空闲时不能被二次释放。

// 不会释放已申请的内存块的中间地址。

// 释放操作只是针对首地址所对应的单个内存块进行操作，不会影响其它内存块。

// 输入描述

// 首行为整数 N , 表示操作命令的个数，取值范围：0 < N <= 100。

// 接下来的N行, 每行将给出一个操作命令，操作命令和参数之间用 “=”分割。

// 输出描述
// 请求分配指定大小内存时，如果分配成功，返回分配到的内存首地址；如果内存不足，或指定的大小为0，则输出error

// 释放掉之前分配的内存时，释放成功无需输出，如果释放不存在的首地址则输出error。

// 用例1
// 输入
// 2
// REQUEST=10
// REQUEST=20
// 输出
// 0
// 10
// 用例2
// 输入
// 5
// REQUEST=10
// REQUEST=20
// RELEASE=0
// REQUEST=20
// REQUEST=10
// 输出
// 0
// 10
// 30
// 0
// 说明
// 第一条指令，申请地址0~9的10个字节内存，返回首地址0

// 第二条指令，申请地址10~29的20字节内存，返回首地址10

// 第三条指令，释放首地址为0的内存申请，0~9地址内存被释放，变为空闲，释放成功，无需输出

// 第四条指令，申请20字节内存，09地址内存连续空间不足20字节，往后查找到3049地址，返回首地址30

// 第五条指令，申请10字节，0~9地址内存空间足够，返回首地址0


class Pool {
  static REQUEST = 'REQUEST'
  static RELEASE = 'RELEASE'
  static MAX = 100
  constructor([num, ...params]) {
    this.num = num
    this.actions = params
    this.map = new Map()
  }

  test() {
    for(let i=0; i<this.num;i++){
      const [action, value] = this.actions[i].split('=')
      if(action===Pool.REQUEST) {
        if(value>Pool.MAX || value <=0 ){
          console.log('error')
          continue
        }
        this.request(+value)
      } else if(action===Pool.RELEASE){
        this.remove(+value)
      } else {
        console.log('error');
      }
    }
  }

  request(value) {
    const zero = 0
    let left = 0
    if(!this.map.size){
      this.map.set(zero, value)
      console.log(left)
    } else {
      const headList = [...this.map.keys()].sort((a,b)=>a-b)
      for(let key of headList){
        console.log(key - left, key,value,left,'key-left')
        if(key - left >= value){
          this.map.set(left, left+value)
        } else {
          left = this.map.get(key)
        }
      }
      if(Pool.MAX - left >= value){
        this.map.set(left, left+value)
        console.log(left)
      } else {
        console.log(-1)
      }
    }
  }

  remove(value) {
    this.map.delete(value)
  }
}

const testArr = [
  5,
  "REQUEST=10", //0
  "REQUEST=20", //10
  "RELEASE=0", //
  "REQUEST=20", //30
  "REQUEST=10", //0
];

const pool = new Pool(testArr);
pool.test();


