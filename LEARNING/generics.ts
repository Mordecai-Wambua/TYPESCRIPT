// Generics

function printInfo<T>(x: T): T {
  console.log(x);
  return x;
}

const str = printInfo<string>("Hello");
const num = printInfo<number>(2);
const bool = printInfo<boolean>(true);

function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

console.log(uniqueDataTypesFunc<number>(1, 2));

interface Dawg {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFunc<Dawg>(
  { name: "buddy", breed: "Labrador" },
  { name: "Default", breed: "Unkown" }
);

console.log(dog1);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
console.log(getRandomKeyValuePair<string>(stringObject));

const numberObject = { one: 1, two: 2, three: 3 };
console.log(getRandomKeyValuePair<number>(numberObject));

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray<number>(numberArray, (num) => num % 2 === 0));

const stringArray = ["apple", "banana", "cherry", "date"];
console.log(filterArray<string>(stringArray, (word) => word.length < 6));

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

console.log(filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red"));

function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

console.log(reversePair("hello", 20));

class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());

stringBox.setContent("Hello, Boss");
console.log(stringBox.getContent());

const numberBox = new Box<number>(20);
console.log(numberBox.getContent());

numberBox.setContent(2);
console.log(numberBox.getContent());
