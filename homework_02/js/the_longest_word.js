/*
  Напиши скрипт, который проверяет произвольную строку
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = 'May the force be with you';
let longestWord;
let tmp = 0;
const arr = message.split(' ');
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i].length > tmp) {
    tmp = arr[i].length;
    longestWord = arr[i];
  }
}
console.log(arr);
console.log(longestWord); // 'force'
