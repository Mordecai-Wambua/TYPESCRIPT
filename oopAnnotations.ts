// Class Properties Annotations
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person1("John", 20);
console.log(person1);

// Access Modifiers

class Animal {
  public name: string;
  private age: number;
  protected species: string;
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canine");
  }
  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and ia ${this.getAge()} years old`;
  }
}

// Getters and Setters
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }

    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log(`Current Value: ${myInstance.myProperty}`);
myInstance.myProperty = 10;
console.log(`New Value: ${myInstance.myProperty}`);
