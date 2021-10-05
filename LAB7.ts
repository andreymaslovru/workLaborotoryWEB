// Маслов А.С Вариант 8 ЛР-7

const swap = (str: string) => {
  if (typeof str !== 'string') {
    return 'Error type'
  }

  if (str.length < 2) return str;

  var permutations = [];
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (str.indexOf(char) !== i) continue;
    var remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);

    for (var subPermutation of swap(remainingStr))
      permutations.push(char + subPermutation)
  }
  return permutations;
}

console.log(swap('abc'))
console.log(swap('a'))
console.log(swap('abcв'))
console.log(swap(123))
