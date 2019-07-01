/*
  Напиши фукнцию findLongestWord(str), которая принимает
  параметром произвольную строку и возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/
const findLongestWord = function (str) {
  const words = str.split(' ');
  let longestWord;
  let long = 0;
  for (let i = 0; i < words.length; i += 1) {
    if (long < words[i].length) {
      long = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
};
// Вызовы функции для проверки
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
