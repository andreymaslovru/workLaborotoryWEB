const msPerDay = 24*60*60*1000

const countDaysForNY = (curTime) => {
  var check = curTime.split('').filter((item) => item === '-')
  if (check.length > 0) return 'error date'
  var currentDate = new Date(curTime)
  var currentYear = currentDate.getFullYear()
  var newYearDate = new Date(`12/31/${currentYear}`)
  var countDayToNY = Math.round((newYearDate.getTime() - currentDate.getTime())/msPerDay)

  return countDayToNY
}

console.log(countDaysForNY('10/02/2021'))
console.log(countDaysForNY('-1/02/2022'))
