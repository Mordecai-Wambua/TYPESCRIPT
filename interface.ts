// Inteface definition
interface Person2 {
  firstName: string;
  lastName: string;
  age: number;
}

// Usage
const examplePerson: Person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(examplePerson);

// Interface for a function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(5, 3));

// Interface for classes
interface Vehicle {
  start(): void;
  stop(): void;
}

// Implementation
class Car implements Vehicle {
  start(): void {
    console.log("Car started");
  }

  stop(): void {
    console.log("Car stopped");
  }
}

// Usage
const myCar = new Car();
myCar.start();
myCar.stop();

// Declaration Merging
// Original interface
interface Car1 {
  brand: string;
  start(): void;
}

// Declaration Merging (Inteface Extension)
interface Car1 {
  model: string;
  stop(): void;
}

// Usage
const myCar1: Car1 = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car Started");
  },
  stop() {
    console.log("Car Stopped");
  },
};

console.log(myCar1);
myCar1.start();
myCar1.stop();
