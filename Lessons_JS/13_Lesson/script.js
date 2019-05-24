// Создание собственного объекта

// 1 способ

let car = new Object();

car.color = "красный";
car.maxSpeed = 230;
car.brand = "Nissan";

console.log(car.color + " автомобиль" + " марки " + car.brand);

// 2 способ (предпочтительнее)

let moto = {
  color: "красный",
  brand: "Honda"
};

// добавление св-ва в обьект

moto.price = 6000;

// добавление объекта в объект

moto.options = {
  horsePoweer: 220, // лошадиных сил
  maxSpeed: 300, // макс скорость
  acceleration: 3 // разгон
};

console.log(moto);

// удаление св-ва объекта

delete moto.color;
delete moto.options.maxSpeed;

console.log(moto);

// создание своих методов для собственного объекта

let test = "brand";
console.log(test); // не покажет значение свойства brand: "Honda"
console.log(moto[test]); //  покажет значение свойства Honda

// Пример сщздания метода для объекта

let summerTour = {
  turkey: 2500,
  spain: 5000,
  egypt: 1700
};

// создадим метод для расчёта стоимости поездки n-го количества людей в определённую страну

summerTour.calc = function (peoples, days, country) {

  let res = peoples * days * this[country];
  return res;

  // или

  //result = peoples * days * summerTour[country];
  //return result;

};

// запускаем в консоле

console.log(summerTour.calc(3, 10, "spain"));

// перебор свойств объекта FOR...in

for (let key in moto) {
  console.log("Свойство " + key + " имеет значение " + moto[key]);
}

/*

Одни объекты могут содержать в качестве свойств другие объекты. Например, есть объект страны, у которой можно выделить ряд свойств. Одно из этих свойств может представлять столицу. Но у столицы мы также можем выделить свои свойства, например, название, численность населения, год основания:

*/

let country = {

  name: "Германия",
  language: "немецкий",
  capital: {

    name: "Берлин",
    population: 3375000,
    year: 1237
  }
};

console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237

/*
Для доступа к свойствам таких вложенных объектов мы можем использовать стандартную нотацию точки:
country.capital.name
*/
console.log(country.capital.name);

/*
Либо обращаться к ним как к элементам массивов:
country["capital"]["population"]
*/
console.log(country["capital"]["population"]);

/*
Также допустим смешанный вид обращения:
country.capital["year"]
*/
console.log(country.capital["year"]);

/* В качестве свойств также могут использоваться массивы, в том числе массивы других объектов:*/

let Country = {

  name: "Швейцария",
  languages: ["немецкий", "французский", "итальянский"],
  capital: {

    name: "Берн",
    population: 126598
  },
  cities: [
    { name: "Цюрих", population: 378884 },
    { name: "Женева", population: 188634 },
    { name: "Базель", population: 164937 }
  ]
};


// вывод всех элементов из country.languages
document.write("<h3>Официальные языки Швейцарии</h3>");
for (var i = 0; i < Country.languages.length; i++)
  document.write(Country.languages[i] + "<br/>");
// перебор объекта в объекте


// Определить, пуст ли объект

/*
функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
*/

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

console.log( isEmpty(schedule) ); // false