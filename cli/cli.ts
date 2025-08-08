import readline from 'readline'
import 'colors'

class CLI {

  private rl: readline.Interface;
  static #instance: CLI;

  private constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  /* 
    Singleton 
    use to keep the same instance and so do not create another CLI instance
    then, the CLI will not repeat the kyes typed or avoid the necesity of send the cli as an argument
  */
  static get instance(): CLI {
    if (!CLI.#instance) {
      CLI.#instance = new CLI()
    }
    return CLI.#instance
  }

  ask(question: string) {
    return new Promise((resolve) => {
      this.rl.question(question.blue, (answer) => {
        if (answer.trim().toLowerCase() === 'exit') {
          console.log('CLI closed'.green);
          this.close();
          return null;
        }
        resolve(answer.trim())
      })
    })
  }

  async askForNumber(question: string): Promise<number> {
    let value: number;
    while (true) {
      const answer = await this.ask(question)
      value = Number(answer)
      if (answer == null) return null
      if (!isNaN(value)) {
        return value
      }
      console.log(`wrong numeric value❌`.red)
    }
  }

  close() {
    this.rl.close()
  }

}

export default CLI