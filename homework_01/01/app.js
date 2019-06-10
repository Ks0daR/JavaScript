const ADMIN_PASS = 'm4ng0h4ckz';
let message;
const inputMessage = 'Введите пароль:';
const cancelMessage = 'Отменено пользователем!';
const errorMessage = 'Неверный пароль';
const welcomeMessage = 'Добро пожаловать!';

// eslint-disable-next-line prefer-const
let input = prompt(inputMessage, 0);
if (input === null) {
  message = cancelMessage;
  console.log(message);
} else if (input === ADMIN_PASS) {
  message = welcomeMessage;
  console.log(message);
} else {
  message = errorMessage;
  console.log(message);
}
