export const fizzbuzzProblem = ` 
Write a program that shows in the console the numbres from 1 to 100 (with a line break), replacing the following
- multiples of 3 with the word "fizz"
- multiples of 5 with the word "buzz"
- multiples of both 3 and 5 with the word "fizzbuzz"
`

export function fizzBuzz() {
  const limit = 100
  for (let i = 1; i < limit; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("fizzbuzz")
    else if (i % 3 == 0) console.log("fizz")
    else if (i % 5 == 0) console.log("buzz")
    else console.log(i)
  }
}