// Маслов А.С 8В92 Вариант 9 ЛР-5

const checkOrthogonality = (arr1: Array<number>, arr2: Array<number>) => {
  if (arr1.length === 2 && arr2.length === 2) {
    return (arr1[0] === arr1[1] || arr2[0] === arr2[1]) ? 
    'Error of vectors' : arr1[0] * arr2[0] + arr1[1] * arr2[1] === 0
  } else return 'Error of arguments'
}

console.log(checkOrthogonality([1, 2, 2], [2, 1])) // error length > 2
console.log(checkOrthogonality([0, 0], [1, 1])) // error a vector from a single point
console.log(checkOrthogonality([5, 0], [0, 5])) // true
console.log(checkOrthogonality(['1', 2], [2, 3])) // false - error type
