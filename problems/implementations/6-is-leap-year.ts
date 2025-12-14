import { CURRENT_YEAR } from "../../utils/constants"

export const isLeapYearProblem = `
Write a function that prints the next 30 leap years
`

/* 
  this rule is taken from the Gregorian Calendar which states that a year is leap when:
  is divisible by 4 and
  (is not divisible by 1000
  or divisible by 400)
*/
export function isLeapYear(year: number) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

export function printNextFollowingThirtyLeapYears() {
  let year = CURRENT_YEAR
  const leapYears: number[] = []
  let counter = 0
  while (counter < 30) {
    if (isLeapYear(year)) {
      leapYears.push(year)
      counter++
    }
    year += 1
  }
  console.log(`LEAP YEARS: ${leapYears}`)
}