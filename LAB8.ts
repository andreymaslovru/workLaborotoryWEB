// Маслов А.С 8В92 Вариант 14 ЛР-8

const indexesUpperCase = (initStr: string) => {
  if (typeof initStr !== 'string') {
    return 'error type'
  }
  var arrIndexes = [];
  initStr.split('').map((item, index) => {
    if (item === item.toUpperCase()) {
      return arrIndexes.push(index)
    }
  })
  return arrIndexes.sort();
}

console.log(indexesUpperCase('rgtAdsDD'))
console.log(indexesUpperCase(''))
console.log(indexesUpperCase(123))
