/*
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
const countProps = function (obj) {
  let value;
  const keys = Object.key(obj);
  for (const key of keys) {
    value += 1;
    return value;
  }
};
console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3
