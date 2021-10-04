const initArr = (arr: Array<number>) => {
  let arrCheck = arr.filter((item) => typeof item !== 'number')
  if (arrCheck.length > 0) {
    return 'error: type array is not number'
  }

  let resultMax = (typeof arr[0] === 'number' && arr[0] % 2 === 0) ? arr[0] : -1;

  if (arr.length === 0) {
    return 'error: the array is empty'
  }

  arr.map((item) => {
    if (typeof item === 'number' && item > resultMax && item % 2 === 0) {
      return resultMax = item
    }
    else return -1
  })
  return resultMax
}
console.log(initArr([1, 1, 3, 1, -5, 0, 2, '6']))
console.log(initArr([1, 1.2, 3, 1, -5, 0, 2.6]))
console.log(initArr([1, 1]))
console.log(initArr([-3, -6, 1, 1, -21]))
console.log(initArr([]))
console.log(initArr([8, 6, 1]))
console.log(initArr([-8, -6, 2]))
