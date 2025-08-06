import { fizzBuzz, fizzbuzzProblem } from '../problems/1-fizzbuzz';
import { isAnAnagram, isAnAnagramProblem } from '../problems/2-is-an-anagram';
import { fibonacci, fibonacciProblem } from '../problems/3-fibonacci';
import { isPrime, isPrimeProblem } from '../problems/4-is-a-prime-number';

export const problems = {
  fizzBuzz: {
    problem: fizzbuzzProblem,
    main: () => fizzBuzz()
  },
  isAnAnagram: {
    problem: isAnAnagramProblem,
    main: (wordOne: string, wordTwo: string) => isAnAnagram(wordOne, wordTwo),
  },
  fibonacci: {
    problem: fibonacciProblem,
    main: () => fibonacci()
  },
  isAPrimeNumber: {
    problem: isPrimeProblem,
    main: (num: bigint) => isPrime(num)
  }
}