const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;

do {
  input = prompt(`Введите пароль. Осталось ${attemptsLeft} попытки.`);
  attemptsLeft -= 1;
  if (passwords.includes(input)) {
    console.log('Добро пожаловать!');
    break;
  }
  if (attemptsLeft === 0) {
    console.log('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
  if (input === null) {
    break;
  }
  console.log(`Осталось ${attemptsLeft} попытки.`);
} while (attemptsLeft !== 0);
