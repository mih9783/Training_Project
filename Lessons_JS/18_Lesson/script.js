let str = "это строка";
let str1 = "44";
let str2 = +"44";

console.log(str);

console.log(typeof str);

console.log(+str1);

console.log(typeof str1);

console.log(str2);

console.log(typeof str2);

let age = null;
console.log(age);

let age1;
console.log(age1);

console.log(typeof parseInt("34px"));
console.log(typeof (parseInt("34px")));

// Динамическая типизация

//ПРЕОБРАЗОВАНИЕ В СТРОКУ

/* 1 способ Древний */

// String

let num = 6;
console.log(typeof String(num)); // string
console.log(typeof String(null)); // string

/*  2  */

let num1 = 7;

console.log(typeof (num1 + "")); // string
console.log(typeof (true + "l")); // string
console.log(typeof (true + "")); // string

// применение на практике

console.log("https://адрес папки/" + 7);
console.log(typeof ("https://адрес папки/" + 7)); // string

console.log(23 + "px"); 
console.log(typeof (23 + "px")); // string

//ПРЕОБРАЗОВАНИЕ В ЧИСЛО

/* 1 Древний  */

// Number

console.log(typeof Number("8")); // number

/*  2 Унарный плюс  */

let string = "9"; // string
let string1 = +"10"; // number

console.log(typeof (string)); // string
console.log(typeof (string1)); // number


/*  3 parseInt  */

console.log(typeof parseInt("24 px"));  // number

// пример из практики

let ans = +prompt("Вопрос", ""); 
// ставим унарный плюс для перевода ответа пользователя в число

// ЛОГИЧЕСКИЕ ПРЕОБРАЗОВАНИЯ

/* 1 способ  */

// 0, "", null, undefined, NaN ---- всегда выдаёт false
// " " --- кавычки с прбелом true

let switcher = null;

if (switcher) {
  console.log("Внимание !!! Вы запустили  код программы!");
}

let switcher1 = 1;

if (switcher1) {
  console.log("Внимание !!! Вы запустили  код программы!");
}

/* 2 способ используется редко  */

console.log(typeof Boolean("5")); // boolean

/* 3 способ используется редко  */

console.log(typeof (!!!"5")); // boolean