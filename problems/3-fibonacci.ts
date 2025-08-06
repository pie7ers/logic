export const fibonacciProblem = `
Write a function that shows the first 50 numbers of the Fibonacci sequence starting from 0
- the Fibonacci sequence is made up of a sequence of numbers in which the next number is always the sum
of the previous two, example:
0,1,1,2,3,5,8,13...
`
export function fibonacci() {
  const limit = 50;
  let num1 = 0;
  let num2 = 1;
  for (let i = 0; i < limit; i++) {
    console.log(`[${i}]=${num1}`);
    [num1, num2] = [num2, num1 + num2];
  }
}