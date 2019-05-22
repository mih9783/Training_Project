let number = 150;

// function showFirstMessage(text) {
//    number = 10;
//   console.log(number);
// }

function showFirstMessage(text) {
  let number = 10;
  console.log(number);
}

showFirstMessage();
console.log(number);

function calc(a, b) {
  return (a + b);
}

console.log(calc(7, 8));
console.log(calc(17, 18));

function retVar() {
  let num = 1500;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);


// ***** ДЕКОРАТОРЫ *******

console.log(calc1(20, 28));
console.log(calc1(10, 38));

function calc1(a, b) {
  return (a + b);
}

// ***** ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ *******

//console.log(calc2(17,38)); // не работает

let calc2 = function (a, b) {
  return (a + b);
};

console.log(calc2(1, 3));

// ***** СТАНДАРТЫ ES6 *******
// ЭТА Ф-ИЯ ЧАЩЕ ВСЕГО ИСПОЛЬЗУЕТСЯ В ОБРАБОТЧИКЕ СОБЫТИЙ
let calc3 = (a, b) => a + b;

console.log(calc3(100, 1) +  " это стрелочная функция");


// МЕТОДЫ И СВ-ВА У СТРОК И ЧИСЕЛ

// МЕТОДЫ ЭТО ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

// СВ-ВА ЭТО ВСПОМОГАТЕЛЬНЫЕ ЗНАЧЕНИЯ

// ВОТ ЭТО ИСПОЛЬЗУЕТСЯ ЧАЩЕ ДРУГИХ В ВЕБ РАЗРАБОТКЕ
// это свойства
let str = 'test';
console.log(str.length);
// в консоле выведется числ 4 по кол-ву знаков в слове test

// ЭТО МЕТОДЫ ОНИ ПОЗВОЛЯЮТ ИЗМЕНЯТЬ ЗН-ИЯ Ф-ИИ

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let num1 = '12.2',
  num2 = '13.3 px',
  num3 = '14.44 px';

console.log(Math.round(num1));
console.log(parseInt(num2));
console.log(parseFloat(num3));


console.log(plus(1, 1));

function plus(y,z) {
  return (y + z);
}



