// Метод reduce(callback, initialValue) застосовує функцію до акумулятора та кожного значення масиву (зліва-направо), зводячи його до одного значення.

// callback
// Функція, що виконується для кожного елемента масиву, приймає чотири аргументи:
// її аргументи
//      previousValue
//          Значення, повернене попереднім виконанням функції callback, або значення initialValue, якщо воно надано (див. нижче).
//      currentValue
//          Поточний оброблюваний елемент масиву.
//      currentIndex
//          Індекс поточного оброблюваного елемента масиву.
//      array
// 	        Масив, для якого була викликана функція reduce.
//
// initialValue
// Необов'язковий параметр. Об'єкт, що використовується як перший аргумент при першому виклику функції callback.

const values: number[] = [10, 2, 3, 4, 5, 6];

const total: number = values.reduce((prev, current) => {
  console.log('prev ' + prev + ' current ' + current);
  return prev + current;
}, 0);

console.log(total);

// Cписок літер які можуть повторятись
const chars = ['a', 'b', 'c', 'a', 'c', 'a'];

// Подібна задача вирішувалась методом forEach
const charsRepeat = chars.reduce((prev, current) => {
  if (prev[current]) {
    prev[current] += 1;
  } else {
    prev[current] = 1;
  }

  return prev;
}, {});

console.log(charsRepeat);

// Оптимізація коду з методом reduce
const usersList = [
  { name: 'Андрій', role: 'client' },
  { name: 'Степан', role: 'admin' },
  { name: 'Іван', role: 'client' },
  { name: 'Микола', role: 'client' },
];

const res1 = usersList
  .filter(user => user.role === 'client')
  .map(user => user.name);
console.log(res1);

const res2 = usersList.reduce((prev, user) => {
  if (user.role === 'client') {
    prev.push(user.name);
  }
  return prev;
}, []);
console.log(res2);
