/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
const countTotalSalary = function (salaries) {
  let totalSum = 0;
  const cash = Object.values(salaries);
  for (value of cash) {
    totalSum += value;
  }
  return totalSum;
};

// Вызовы функции для проверки
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
