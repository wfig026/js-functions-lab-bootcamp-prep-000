// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
name = "Jane"

function happyHolidayTo(holiday, name) {
  if (holiday === undefined && name === undefined) {
    holiday = "Independence Day"
    name = "Jane"
  }
  return `Happy ${holiday}, ${name}!`
}