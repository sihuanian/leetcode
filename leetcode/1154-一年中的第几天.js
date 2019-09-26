// date : 2019-09-26
var dayOfYear = function(date) {
    const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let month = parseInt(date.slice(5, 7))
    let day = parseInt(date.slice(8))
    // console.log(month, day)
    let res = 0
    if (isLeapYear(date)) {
      for (let i = 0; i < leapYear.length; i++) {
        if ((month - 1) > i) {
          res += leapYear[i]
        } else {
          break
        }
      }
      return res + day
    } else {
      for (let i = 0; i < nonLeapYear.length; i++) {
        if ((month - 1) > i) {
          res += nonLeapYear[i]
        } else {
          break
        }
      }
      return res + day
    }
}

function isLeapYear (date) {
  const year = parseInt(date.slice(0, 4))
  if ((year % 4  === 0 &&  year % 100 !== 0) || year % 400 === 0) {
    return true
  } 
  return false
}

console.log(dayOfYear("2004-03-01"))

