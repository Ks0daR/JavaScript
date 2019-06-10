const pricePerDroid = 3000;
const howManyDroid = 'Введите количество дроидов для покупки';
const credits = 23580;
const buyError = 'Отменено пользователем!';
const buyCashError = 'Недостаточно средств на счету!';
let totalPrice;
let messege;
let buyInformation;
const inputError = 'Не корректный ввод';

const input = prompt(howManyDroid);
if (input === null) {
  messege = buyError;
  console.log(messege);
} else if (input * pricePerDroid >= 0 && input * pricePerDroid <= credits) {
  totalPrice = credits - pricePerDroid * input;
  buyInformation = `Вы купили ${input} дроидов, на счету осталось ${totalPrice} кредитов.`;
  console.log(buyInformation);
} else if (input * pricePerDroid > credits) {
  messege = buyCashError;
} else if (input < 0) {
  messege = inputError;
  console.log(messege);
}
