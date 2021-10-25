
const asciiConverter = (asciiStr: string) => {
  var resultConvert = '';
  asciiStr.split('').map((item: string) => {
    return resultConvert += item.charCodeAt(0).toString(16)
  })
  return resultConvert;
}

console.log(asciiConverter('qwertyuiop[]'))
console.log(asciiConverter('qwe rty uio p[]'))
console.log(asciiConverter('qwe-rty_uiop__[]'))
console.log(asciiConverter('//qwe\\rtyu//iop[| | |]'))
