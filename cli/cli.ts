import readline from 'readline'
import 'colors'

class CLI {

  private rl: readline.Interface

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  ask(question: string) {
    return new Promise((resolve) => {
      this.rl.question(question.blue, (answer) => {
        if (answer.trim() === 'exit') {
          console.log('CLI closed'.green);
          this.close();
          return;
        }
        resolve(answer)
      })
    })
  }

  close() {
    this.rl.close()
  }

}

export default CLI