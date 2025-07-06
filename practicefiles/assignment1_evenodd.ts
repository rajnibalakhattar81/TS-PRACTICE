//Task 5: Create a function to find even number using typescript

function findEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = findEvenNumbers(nums);
console.log("Even numbers:", evens);