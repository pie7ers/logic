import CLI from "../../cli/cli";
import { Rectangle, RegularPolygon, Square, Triangle } from "../main/5-get-area-of-polygons";

export const getAreOfAPolygonProblem = `
Write a script that calculates the area of a triangle, square, rectangle or regular polygon 
by entering base, height, the side length, or the number of sides according to need
`

const cli = CLI.instance

export async function getAreOfAPolygon() {

  const answer = await cli.ask('Enter your choice: ') as string
  switch (answer) {
    case "1":
      const sideLengthS = await cli.askForNumber('Enter the side length of the square: ') as number
      const square = new Square(sideLengthS)
      square.calculateArea()
      break;
    case "2":
      const baseT = await cli.askForNumber('Enter the base of the triangle: ') as number
      const heightT = await cli.askForNumber('Enter the height of the triangle: ') as number
      const triangle = new Triangle(baseT, heightT)
      triangle.calculateArea()
      break;
    case "3":
      const baseR = await cli.askForNumber('Enter the base of the triangle: ') as number
      const heightR = await cli.askForNumber('Enter the height of the triangle: ') as number
      const rectangle = new Rectangle(baseR, heightR)
      rectangle.calculateArea()
      break;
    case "4":
      const sideLengthP = await cli.askForNumber('Enter the side length of the square: ') as number
      const numberOfSideP = await cli.askForNumber('Enter the side length of the square: ') as number
      const regularPolygon = new RegularPolygon(sideLengthP, numberOfSideP)
      regularPolygon.calculateArea()
      break;
    default:
      console.log(`\nWrong polygon type`.yellow)
      break
  }
}