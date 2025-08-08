import { fizzBuzz, fizzbuzzProblem } from '../problems/implementations/1-fizzbuzz';
import { isAnAnagram, isAnAnagramProblem } from '../problems/implementations/2-is-an-anagram';
import { fibonacci, fibonacciProblem } from '../problems/implementations/3-fibonacci';
import { isPrime, isPrimeProblem } from '../problems/implementations/4-is-a-prime-number';
import { getAreOfAPolygonProblem, getAreOfAPolygon } from '../problems/implementations/5-get-area-of-polygons';

type AnyFunction = (...args: any[]) => any

function createProblem<T extends AnyFunction>(problem: string, main: T) {
  return { problem, main }
}

export const problems = {
  fizzBuzz: createProblem(fizzbuzzProblem, fizzBuzz),
  isAnAnagram: createProblem(isAnAnagramProblem, isAnAnagram),
  fibonacci: createProblem(fibonacciProblem, fibonacci),
  isAPrimeNumber: createProblem(isPrimeProblem, isPrime),
  getAreOfAPolygon: createProblem(getAreOfAPolygonProblem, getAreOfAPolygon),
}