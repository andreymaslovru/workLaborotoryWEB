const returnNewStr = (str: string) => {
  return str.toLowerCase().replace(/([aoyuei])/g, (item: string) => {
    return item = '*'
  })
}

console.log(returnNewStr('hEllo'))
console.log(returnNewStr('h ell O'))
console.log(returnNewStr('h/el=lo123'))
