const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => login.length >= 4 && login.length <= 16;
// const isLoginUnique = function (allLogins, login) {};

const addLogin = function (allLogins, login) {
  let message;
  isLoginValid(login);
  if (!isLoginValid()) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  console.log(message);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
