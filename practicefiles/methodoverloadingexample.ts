function greet(name: string): string;
function greet(age: number): string;

function greet(value: string | number): string {
  if (typeof value === "string") return `Hi, ${value}`;
  return `You are ${value} years old`;
}

//console.log(greet(28));

// Usage
console.log(greet("Rajni")); // Hello, Alice!
console.log(greet(44));      // You are 30 years old.
// console.log(greet(true)); // ❌ Error: No overload matches this call

