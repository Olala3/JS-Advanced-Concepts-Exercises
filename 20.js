class Square {
    constructor(side) {
      this.side = side;
    }

    get area() {
        return this.side * this.side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get area() {
        return 3.14 * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    static calculate(a) {
      if (a instanceof Square) {
        return a.area;
      } else if (a instanceof Rectangle) {
        return a.area;
      } else if (a instanceof Circle) {
        return a.area;
      } else {
        console.log("Invalid shape!")
      }
    }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));