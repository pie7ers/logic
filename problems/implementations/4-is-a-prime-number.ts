import { isValidBigInt } from "../../utils/numbers";

export const isPrimeProblem = `
Write a function that receives a number and returns whether it is prime or not

here some primes for testing
2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
1000000000039 (13 cifras)
10000000000037 (14 cifras)
1000000000000037 (16 cifras)
100000000000000003 (18 cifras)
10000000000000000051 (20 cifras)
`
//first version
/* export function isPrime(num: number) {
  if (isNaN(num)) console.log(`${num} is not a number ❌`)
  if (num <= 1) console.log(`${num} numbers below 2 are not prime ❌`)
  let countDiv = 0
  for (let i = 1; i <= num; i++) { 
    if (num % i == 0) countDiv++
    if (countDiv >= 3) {
      console.log(`${num} is not a prime number ❌`)
      return
    }
  }

  if (countDiv == 2)
    console.log(`${num} is a prime number ✅`)
} */


//second version optimized
/* function isPrime(num: number): boolean {
if (num < 2) return false;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) return false;
}

return true;
} */


/* 
Why square root, sqrt will return all possible pairs and simplifies the iterations

n = a × b

n is the number to validate then if n = 36

36 = 1 x b => 36/1 = b => b = 36
...
36 = 6 x b => 36/6 = b => b = 6

| a | b  | a × b  |
| - | -- | ------ |
| 1 | 36 | 1 × 36 |
| 2 | 18 | 2 × 18 |
| 3 | 12 | 3 × 12 |
| 4 | 9  | 4 × 9  |
| 6 | 6  | 6 × 6  |

*/
function main(num: bigint) {

  if (num <= 3n) return num > 1n;
  if (num % 2n === 0n || num % 3n === 0n) return false;
  const squareRoot = BigInt(Math.floor(Math.sqrt(Number(num))));
  /* 
    the followgin code base on all primes has the 6K ± 1 form to validate all dividers
    this validate between each multiple of 6 (num % i === 0 || num % (i + 2) === 0)
  */
  for (let i = 5n; i <= squareRoot; i += 6n) {
    if (num % i === 0n || num % (i + 2n) === 0n) return false;
  }

  return true;
}

export function isPrime(num: bigint) {
  if (!isValidBigInt(num)) {
    console.log(`\n${String(num).red} is not a number ❌`)
    return
  }
  console.log(`\n${String(num).blue} is prime? ${main(BigInt(num)) ? '✅' : '❌'}`);
}