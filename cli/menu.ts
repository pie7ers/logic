import 'colors'
import { problems } from './import-problems';
import CLI from './cli';
import { getTextMenu, typeExit, getSubMenuAreaOfPolygons, invalidOption } from './text-menu';

async function mainMenu() {
  const cli = CLI.instance
  let running = true
  while (running) {
    getTextMenu()
    typeExit()
    const answer = await cli.ask('Enter your choice: ') as string

    switch (answer.trim()) {
      case '1':
        problems.fizzBuzz.main();
        console.log(problems.fizzBuzz.problem);
        break;
      case '2':
        console.log(problems.isAnAnagram.problem);
        const wordOne = await cli.ask('type the first word: ') as string;
        const wordTwo = await cli.ask('type the second word: ') as string;
        problems.isAnAnagram.main(wordOne, wordTwo);
        break;
      case '3':
        problems.fibonacci.main();
        console.log(problems.fibonacci.problem);
        break;
      case '4':
        console.log(problems.isAPrimeNumber.problem);
        const num = await cli.ask('type a number to validate if it is prime: ') as bigint;
        problems.isAPrimeNumber.main(num);
        break;
      case '5':
        console.log(problems.getAreOfAPolygon.problem);
        getSubMenuAreaOfPolygons();
        await problems.getAreOfAPolygon.main()
        break;
      case 'exit':
        running = false;
        break;
      default:
        invalidOption();
        break
    }
  }
  cli.close()
}

(async function () {
  await mainMenu()
})()