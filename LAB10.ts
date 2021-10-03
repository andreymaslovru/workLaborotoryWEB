let max;
const fill = (arr: Array<number>, index: number) => {
  let arrCheck = arr.filter((item) => typeof item !== 'number')
  if (arrCheck.length > 0) {
    return 'error: type array is not number'
  }
  if (arr.length === 0) {
    return 'error: the array is empty'
  }

  max = max >= arr[index] ? max : arr[index];
  if(index < arr.length - 1){
    fill(arr, ++index)
  }
  return max
};
//console.log(fill([1, 2, 3, 5, -1, -2, 0], 0));
console.log(fill([1, 2, 3, 5, -1, -2, '0'], 0));
console.log(fill([], 0));
console.log(fill([-1, -2, -3, -4], 0));
