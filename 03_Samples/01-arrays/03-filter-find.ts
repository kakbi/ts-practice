// filter - повертає новий масив, що складається з елементів відібраних функцією.
const numbersArray: number[] = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbersArray.filter(value => value % 2 === 0); // отримати всі парні елементи

console.log(numbersArray);
console.log(evenNumbers);

const usersArray = [
  { name: 'Андрій', role: 'client' },
  { name: 'Степан', role: 'admin' },
  { name: 'Іван', role: 'client' },
  { name: 'Микола', role: 'client' },
];

// Код відпрацює, але це поганий варіант використання методу filter якшо нам потрібно знайти лише один елемент зі списку
const user1 = usersArray.filter((user, index) => {
  return user.role === 'admin';
});

// Метод find підходить в тих випадках коли вам потрібно знайти лише один елесент зі списку
const user2 = usersArray.find((user, index) => {
  console.log(index);
  return user.role === 'admin';
});

console.log(user1);
console.log(user2);
