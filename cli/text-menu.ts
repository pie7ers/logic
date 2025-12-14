import 'colors'

export function invalidOption() {
  console.log('\nInvalid option, please try again.'.yellow);
}

export function typeExit() {
  console.log('\nType "exit" at any time to close the cli.\n'.yellow);
}

export function getTextMenu() {
  console.log('\ntype the number of the problem you want to run:'.blue.bold);
  console.log('1. fizz buzz');
  console.log('2. is an anagram?');
  console.log('3. print the first 50 numbers of Fibonacci Sequence');
  console.log('4. is a prime number?');
  console.log('5. get the are of a polygon');
  console.log('6. get the next 30 leap years');
}

export async function getSubMenuAreaOfPolygons() {
  console.log('\ntype the number of the option for the polygon that you want to get the area:'.blue.bold);
  console.log('1. square');
  console.log('2. triangle');
  console.log('3. rectangle');
  console.log('4. regular polygon');
}