// Type Narrowing

// Type Guards
type myType = string | number;

function exampleFunction(value: myType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

exampleFunction("hello"); // HELLO
exampleFunction(67.489); // 67.48
exampleFunction(20); // 20.00

// Instance of -  whether an object is an instance of a particular class or constructor function
class Dog2 {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog2 | Cat): void {
  if (animal instanceof Dog2) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog2();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);

// Intersection types - allow you to combine multiple types into a single type.
// Resulting type will have all the properties of each individual type. & operator
type Employee1 = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

type ManagerWithEmployeeInfo = Employee1 & Manager;

const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "John Doe",
  department: "Engineering",
  role: "Team Lead",
};

console.log(manager);
