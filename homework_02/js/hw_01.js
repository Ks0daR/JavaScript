const numbers = [];
let total = 0;
let input;

do {
  input = prompt('Введите число: ');
  numbers.push(+input);
} while (input !== null);
numbers.pop();
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
