'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const INVALID_LOGIN = 'Ошибка! Логин должен быть от 4 до 16 символов'
const VALID_LOGIN = 'Логин успешно добавлен!';
const FALSE_LOGIN = 'Такой логин уже используется!';


const isLoginValid = function(login) {
  if (login.length < 4 || login.length > 16){
    return false;
  }else {
    return true;
  }
};

const isLoginUnique = function(allLogins, login) {
  if(allLogins.includes(login)){
    return false;
  }else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if(!isLoginValid(login)){
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if(!isLoginUnique(allLogins, login)){
    return FALSE_LOGIN;
  }

  logins.push(login);

  console.log(logins); // проверяю добавляеться ли в массив логин

  return VALID_LOGIN;

};

// Вызовы функции для проверки
console.log(addLogin(logins,'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins,'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins,'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins,'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
