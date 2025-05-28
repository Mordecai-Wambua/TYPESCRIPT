// Types
type Man = {
  name: string;
  age: number;
  email?: string; // Optional Property
  readonly location: string; // Readonly Property
};

function printPerson(person: Man) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Man = { name: "Alice", age: 25, location: "Nairobi" };
printPerson(myPerson);

// Intersection Types
type Human = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type HumanandEmployee = Human & Employee;

const alice: HumanandEmployee = {
  name: "Alice",
  age: 30,
  id: 123,
  title: "Manager",
};

// Unions
let myVar: number | string;

function foo(param: string | string[]) {
  //body
}

// Literals
// String Literal Types
let colour: "red" | "blue" | "green";
colour = "red";

// Numeric Literal Types
let number: 1 | 2 | 3;
number = 1;

// Boolean Literal Types
let isTrue: true | false;
isTrue = true;

// Tuples
let myTuple: [string, number] = ["hello", 42];
console.log(myTuple[0]);
console.log(myTuple[1]);
// Destructuring
let [first, second] = myTuple;
console.log(first);
console.log(second);

// Enums
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}
// or
// enum WeatherConditions {
//   Sunny = "sunny",
//   Cloudy = "cloudy",
//   Rainy = "rainy",
//   Snowy = "snowy",
// }
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
