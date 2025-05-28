// strings
let myName: string = "Modek";
myName = "Other name";
console.log(myName);

// numbers
let favNumber: number = 8;
console.log(favNumber);

// boolean
let isHard: boolean = false;
console.log(isHard);

// Type inference
let tech = "TypeScript";
console.log(typeof tech);

// Any
let color: any = "Crimson";
color = 20;
color = true;

// function parameter annotations
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

const double = (x: number, y: number) => x * y;
const res = double(10, 10);
console.log(res);

// default parameters
function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const output = greet();
console.log(output);

// return anotations
function double1(x: number): number {
  return x * x;
}

console.log(double1(2));

// void
function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
}

printMessage("Hello. How are you?");

// Never
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}

let x: never;

function neverReturns(): never {
  while (true) {}
}
x = neverReturns();

// Array Types
// types
// [] Notation
const numbers: number[] = [1, 2, 3, 4, 5];
// Array<type> Notation
const names: Array<string> = ["Alice", "Bob"];

// Multi-Dimensional Arrays
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// Objects
// syntax: type varName(annotations/types) = {property: value }

const man: { firstName: string; lastName: string; age: number } = {
  firstName: "john",
  lastName: "Doe",
  age: 30,
};

// objects can also be used as function return values

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 18,
    location: "kenya",
  };
}
