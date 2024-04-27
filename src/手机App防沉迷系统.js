function checkApp(appList, time){
  let result = 'NA'
  if(!appList || !appList.length || !time) return result
  let priority = 0
  for(let i=0;i<appList.length;i++) {
    let app = appList[i]
    if(checkTimeEarly(time, app[2]) || checkTimeEarly(app[3], time)) {
      continue
    } 
    if(app[1]>priority) {
      priority = app[1]
      result = app[0]
    }
  }
  return result
}

function checkTimeEarly(input, time) {
  inputRange = input.split(':').map(i=>+i)
  timeRange = time.split(':').map(i=>+i)
  if(inputRange[0]<timeRange[0]) {
    return true
  } else if(inputRange[0]===timeRange[0]) {
    return inputRange[1] < timeRange[1]
  } else {
    return false
  }
}

console.log(checkApp([['App1', 1, '09:00','10:00'],['App2', 2, '09:50', '11:30']], '09:30'))