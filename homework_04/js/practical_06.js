/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = function (arr, prop) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (users[i][prop] !== undefined) newArray.push(users[i][prop]);
  }
  return newArray;
};
// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []
