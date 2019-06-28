/*
  Напиши функцию filterFromArray(arr), которая
  объявляет 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Функция возвращает новый массив, который содержит только
  те элементы исходного массива, которые не совпадают
  ни с одним из числовых аргументов.
*/

const filterFromArray = function (arr, ...args) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < args.length; j += 1) {
      if (args[j] !== arr[i]) newArr.push(args[j]);
      console.log(newArr);
    }
}
};

// Вызовы функции для проверки
console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
