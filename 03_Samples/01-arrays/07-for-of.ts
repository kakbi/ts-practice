const numbers = [5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log('for ... of');

// обхід значень масиву
for (const value of numbers) {
  console.log(value);
}
