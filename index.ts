// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

// Interface
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

// Function with types
function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

// Object with interface
const user: Person = {
  firstName: "John",
  lastName: "Doe"
};

console.log(greet(user));
