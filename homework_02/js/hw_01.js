const numbers = [];
let total = 0;
let input;

do {
  input = prompt('Введите число: ');
  if (input === null) break;
  numbers.push(+input);
} while (true);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
