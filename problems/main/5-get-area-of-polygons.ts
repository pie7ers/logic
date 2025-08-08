abstract class Polygon {

  protected _area: number = 0;

  abstract calculateArea(): void

  set area(area: number) {
    this._area = area
  }

  get area() {
    return this._area
  }
}

export class Triangle extends Polygon {
  base: number
  height: number
  constructor(base: number, height: number) {
    super()
    this.base = base
    this.height = height
  }
  calculateArea(): void {
    this.area = (this.base * this.height) / 2
    console.log(`\nthe area of the triangle with base: ${this.base} and height: ${this.height} is = ${this.area}`)
  }
}

export class Square extends Polygon {
  sideLength: number
  constructor(sideLength: number) {
    super()
    this.sideLength = sideLength
  }
  calculateArea(): void {
    this.area = this.sideLength * this.sideLength
    console.log(`\nthe area of the square which sides measure: ${this.sideLength} is = ${this.area}`)
  }
}

export class Rectangle extends Polygon {
  base: number
  height: number
  constructor(base: number, height: number) {
    super()
    this.base = base
    this.height = height
  }
  calculateArea(): void {
    this.area = this.base * this.height
    console.log(`\nthe area of the rectangle with base: ${this.base} and height: ${this.height} is = ${this.area}`)
  }
}

export class RegularPolygon extends Polygon {
  numberOfSide: number
  sideLength: number
  tanOfcentralAngle: number

  constructor(numberOfSide: number, sideLength: number) {
    super()
    this.numberOfSide = numberOfSide
    this.sideLength = sideLength
    this.tanOfcentralAngle = Math.tan(Math.PI / this.numberOfSide)
  }

  /* 
    general formula:
        n · L²
    –––––––––––––––––
      4 · tan(π/n)

    tan(π/n) => represents the central angle divide two in radians

    where n = number of sides
    and L = side length
  */
  calculateArea() {
    this.area = Number(Number((this.numberOfSide * this.sideLength * this.sideLength) / (4 * this.tanOfcentralAngle)).toFixed(2))
    console.log(`\nthe area of the regular polygon is = ${this.area}`)
  }
}

