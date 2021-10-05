type checkSumPayloadType = Array<number>

const checkSum = (arr: checkSumPayloadType) => {
  
  if (arr.length > 2 
  || typeof arr[0] !== 'number' 
  || typeof arr[1] !== 'number') {
    return 'Error'
  }
    var sum1: null | number = null;
    var sum2: null | number = null;
    arr[0].toString().split('.').join("").split('').map((item: string) => {
      return sum1 += +item;
    })
    arr[1].toString().split('.').join("").split('').map((item: string) => {
      return sum2 += +item;
    })
    return sum1 === sum2 ? 'TRUE' : 'FALSE' 
}
console.log(checkSum([120, 3.40])) //FALSE
console.log(checkSum([120, 340, 0])) //Error
console.log(checkSum([0.13, 0.4])) //TRUE
console.log(checkSum([120])) //Error
console.log(checkSum(['120', 210])) //Error - TS-error and checked type in func
