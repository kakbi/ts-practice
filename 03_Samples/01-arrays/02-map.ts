// map - обходить всі елементи масиву та повертає новий масив зі значеннями, які повернула вказана функція.

const array: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = array.map((value, index, arr) => {
  return value * value;
});

console.log(array);
console.log(newArray);
