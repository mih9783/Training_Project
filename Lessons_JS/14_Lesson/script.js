// Чтобы узнать длину массива, используется свойство length:

var fruit = new Array();
fruit[0] = "яблоки";
fruit[1] = "груши";
fruit[2] = "сливы";

document.write("В массиве fruit " + fruit.length + " элемента: <br/>");
for (var i = 0; i < fruit.length; i++)
  document.write(fruit[i] + "<br/>");

//  факту длиной массива будет индекс последнего элемента с добавлением единицы. Например:

var users = new Array(); // в массиве 0 элементов
users[0] = "Tom";
users[1] = "Kate";
users[4] = "Sam";
for (var i = 0; i < users.length; i++)
  console.log(users[i]);

/*
Несмотря на то, что для индексов 2 и 3 мы не добавляли элементов, но длиной массива в данном случае будет число 5. Просто элементы с индексами 2 и 3 будут иметь значение undefined.
*/

////////////////////////////////////////////////////
// Копирование массива. slice()

/*
Копирование массива может быть поверхностным или неглубоким (shallow copy) и глубоким (deep copy).
*/

/*
При неглубоком копировании достаточно присвоить переменной значение другой переменной, которая хранит массив:
*/

var users = ["Tom", "Sam", "Bill"];
console.log(users);     //  ["Tom", "Sam", "Bill"]
var people = users;     //  неглубокое копирование

people[1] = "Mike";     //  изменяем второй элемент
console.log(users);     //  ["Tom", "Mike", "Bill"]

/*
В данном случае переменная people после копирования будет указывать на тот же массив, что и переменная users. Поэтому при изменении элементов в people, изменятся элементы и в users, так как фактически это один и тот же массив.
*/

////////////////////////////////////////////////////////

// SLICE()
/*
мы хотим, чтобы после копирования переменные указывали на отдельные массивы. И в этом случае можно использовать глубокое копирование с помощью метода slice():
*/

var users1 = ["Tom", "Sam", "Bill", "Jon"];
console.log(users1);             //  ["Tom", "Sam", "Bill", "Jon"]
var people1 = users1.slice();     //  глубокое копирование

people1[1] = "Mike";             //  изменяем второй элемент
console.log(users1);             //  ["Tom", "Sam", "Bill", "Jon"]
console.log(people1);            //  ["Tom", "Mike", "Bill", "Jon"]
/*
В данном случае после копирования переменные будут указывать на разные массивы, и мы сможем изменять их отдельно друг от друга.
*/
//************* */

// Также метод slice() позволяет скопировать часть массива:
var users2 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var people2 = users2.slice(1, 4);
console.log(users2);        // ["Tom", "Sam", "Bill", "Alice", "Kate"]
console.log(people2);        // ["Sam", "Bill", "Alice"]
/*
данном случае выборка в новый массив идет начиная с 1 индекса по индекс 4 не включая. И поскольку индексация массивов начинается с нуля, то в новом массиве окажутся второй, третий и четвертый элемент.
*/
//////////////////////////

// PUSH

/*
Метод push() добавляет элемент в конец массива:
*/

var fruit1 = [];
fruit1.push("яблоки");
fruit1.push("груши");
fruit1.push("сливы");
fruit1.push("вишня", "абрикос");

document.write("В массиве fruit " + fruit1.length + " элементов: <br/>");
document.write(fruit1); // яблоки,груши,сливы,вишня,абрикос
/////////////////////////////////////////////////


// POP()
/*
Метод pop() удаляет последний элемент из массива:
*/

var fruit2 = ["яблоки 1", "груши 2", "сливы 3"];

var lastFruit = fruit2.pop(); // извлекаем из массива последний элемент
//.write("<br>" + lastFruit + "<br/>");
console.log("<br>" + lastFruit + "<br/>");
//document.write("В массиве fruit2 " + fruit2.length + " элемента: <br/>");
console.log("В массиве fruit2 " + fruit2.length + " элемента: <br/>");
for (var i = 0; i < fruit2.length; i++) {
  //document.write(fruit2[i] + "<br/>");
  console.log(fruit2[i] + "<br/>");
}

let str = ["gfd", "nbgf", "bvc", "vbfde", 79];

let strLast = str.pop();
console.log(str);
console.log(strLast);
console.log(str[str.length - 1]);
///////////////////////////////////////////


// SHIFT()
/*
Метод shift() извлекает и удаляет первый элемент из массива:
*/

var fruit3 = ["яблоки", "груши", "сливы"];

var firstFruit = fruit3.shift();
document.write(firstFruit + "<br/>");
document.write("В массиве fruit3 " + fruit3.length + " элемента: <br/>");
for (var i = 0; i < fruit3.length; i++) {
  document.write(fruit3[i] + "<br/>");
}

let NuM = [1, 2, 3, 4, 5,];
let newNum = NuM.shift();
console.log(NuM);
console.log(newNum);

//UNSHIFT
/*
Метод unshift() добавляет новый элемент в начало массива:
*/
var fruit4 = ["яблоки", "груши", "сливы"];
fruit4.unshift("абрикосы", "vbfde");
console.log(fruit4);
///////////////////////////////


// SPLICE()
/*
Метод splice() удаляет элементы с определенного индекса. Например, удаление элементов с третьего индекса:
*/
var Users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted = Users.splice(3);
console.log(deleted);       // [ "Alice", "Kate" ]
console.log(Users);         // [ "Tom", "Sam", "Bill" ]
//Метод splice возвращает удаленные элементы.
/*
В данном случае удаление идет с начала массива. Если передать отрицательный индекс, то удаление будет производиться с конца массива. Например, удалим последний элемент:
*/
var Users1 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted1 = Users1.splice(-1);
console.log(deleted1);       // [ "Kate" ]
console.log(Users1);         // [ "Tom", "Sam", "Bill", "Alice" ]

/*
Дополнительная версия метода позволяет задать конечный индекс для удаления. Например, удалим с первого по третий индекс:
*/
var Users2 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted2 = Users2.splice(1, 3);
console.log(deleted2);       // [ "Sam", "Bill", "Alice" ]
console.log(Users2);         // [ "Tom", "Kate" ]

/*
Еще одна версия метода splice позволяет вставить вместо удаляемых элементов новые элементы:
*/
var Users3 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted3 = Users3.splice(1, 3, "Ann", "Bob");
console.log(deleted3);       // [ "Sam", "Bill", "Alice" ]
console.log(Users3);         // [ "Tom", "Ann", "Bob", "Kate" ]

/*
 В данном случае удаляем три элемента с 1-й по 3-й индексы и вместо них вставляем два элемента.
 */

let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num);

num.splice(3, 2);

console.log(num);

num.splice(3, 0, "четыре", "пять");
console.log(num);

num.splice(0, 2, "один", "два");
console.log(num);
///////////////////////////////////


// CONCAT()

/*
Метод concat() служит для объединения массивов:
*/
var Fruit = ["яблоки", "груши", "сливы"];
var vegetables = ["помидоры", "огурцы", "картофель"];
var products = Fruit.concat(vegetables);

for (var i = 0; i < products.length; i++)
  document.write("<br><br>" + products[i] + "<br/>");

let mynum = [1, 2, 3, 4];
let mynum1 = [5, 6, 7, 8];
let mynum2 = [9, 10];
let total = mynum.concat(mynum1, mynum2);
console.log(total.reverse());

/*
При этом необязательно объединять только однотипные массивы. Можно и разнотипные:
*/

var Fruit1 = ["яблоки", "груши", "сливы"];
var prices = [20, 30, 80];
var products1 = Fruit1.concat(prices);
console.log(products1);
///////////////////////////////////////


// JOIN
/*
Метод join() объединяет все элементы массива в одну строку:
*/
var F = [1, 2, 3, 4, 5];
//var fr = F.join();
console.log(F.join("-"));

var Fruit2 = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
var fruitString = Fruit2.join();
console.log(fruitString);
/////////////////////////////


// SPLIT()

/*
метод split() позволяет разбить строки на массив подстрок, используя заданную 
строку разделитель для определения места разбиения.
*/

var string1 = "H e l l o", // инициализируем переменные, содержащие строки
  string2 = "W,o,r,l,d",
  string3 = "abbaabbaabba",
  string4 = "H e l l o w o r l d";


string1.split(); // возвращаемое значение ["H e l l o"]
string1.split(" "); // возвращаемое значение ["H", "e", "l", "l", "o"]
string2.split(","); // возвращаемое значение ["W", "o", "r", "l", "d"]
string3.split("bb"); // возвращаемое значение ["a", "aa", "aa", "a"] 
string4.split(" ", 4); // возвращаемое значение ["H", "e", "l", "l"]

// регулярное выражение в качестве разделителя

var string5 = "a2b3c4d"; // инициализируем строковую переменную
var numbers = /[0-9]/; // инициализируем переменную, содержащую регулярное выражение

string5.split(numbers); // возвращаемое значение ["a", "b", "c", "d"]

//let ans1 = prompt("1 вопрос"),
//ans2 = prompt("2 вопрос");
// let arr1 =[];
// let arr2 =[];

// arr1 = ans1.split(",");
// arr2 = ans2.split(" ");

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr2);
// console.log(arr2.length);

// СОРТИРОВКА МАССИВА

let arrStr = ["конь", "тыква", "голова", "арбуз", "ёлка"];
console.log(arrStr.sort());

let arrNum = [32, 3, 8, 6, 35, 1];
arrNum.sort(sNum);
function sNum(a, b) {
  return a - b;
}
console.log(arrNum);

let arrNum1 = [32, 3, 8, 6, 35, 1],
  iSort1 = arrNum1.sort(sNum);
function sNum1(a, b) {
  return b - a;
}
console.log(iSort1);

let arrSort = [8, 0, 6, 12, 54, 7];
function myS(a, b) {
  if (a > b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else {
    return 1;
  }
}

console.log(arrSort.sort(myS));
///////////////////////////////////


// Поиск индекса элемента
/*
Методы indexOf() и lastIndexOf() возвращают индекс первого и последнего включения элемента в массиве. Например:
*/

///// indexOf
/////////////////////
let fruiT = ["яблоки", "груши", "сливы", "яблоки", "груши"];

let firstIndex = fruiT.indexOf("яблоки");
let lastIndex = fruiT.lastIndexOf("яблоки");
let otherIndex = fruiT.indexOf("вишни");
console.log(firstIndex); // 0
console.log(lastIndex);  // 3
console.log(otherIndex); // -1

let f = ["яблоки", "груши", "сливы", "яблоки", "груши"];
console.log(f.indexOf("яблоки"));
console.log(f.lastIndexOf("яблоки"));
/*
firstIndex имеет значение 0, так как первое включение стоки "яблоки" в массиве приходится на индекс 0, а последнее на индекс 3.

Если же элемент отсутствует в массиве, то в этом случае методы indexOf() и lastIndexOf() возвращают значение -1.
*/
// синтаксис array.indexOf( searchElement, fromIndex )
/*
searchElement --- Значение, которое требуется найти внутри массива. Обязательное значение.

fromIndex ---  Целое число, определяющее индекс массива, с которого начинается поиск элемента массива. Необязательное значение, если не указано, то поиск осуществляется с 0 индекса. 
Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено сравнение элементов будет расчитан по следующей формуле: length (длина массива) + fromIndex.
*/

// пример использования

var x = [1, 2, 3, "a", "b", "c"]; // инициализируем переменную, содержащую массив

console.log(x.indexOf("a")); // возвращаемое значение 3
console.log(x.indexOf("d")); // возвращаемое значение -1 (значение не найдено в массиве)
console.log(x.indexOf("b", 3)); // возвращаемое значение 4
console.log(x.indexOf(2, 2)); // возвращаемое значение -1 (значение не найдено в массиве)
console.log(x.indexOf(1, -6)); // возвращаемое значение 0
console.log(x.indexOf(1, -5)); // возвращаемое значение -1 (значение не найдено в массиве)
/*
В следующем примере мы рассмотрим с Вами как продолжить поиск искомого элемента
в массиве после первого и последующих совпадений, вплоть до конца массива. Это позволит нам сравнить все элементы массива по определенному индексу на предмет наличия искомого элемента:
*/

var indexes = []; // инициализируем переменную, содержащую пустой массив
var myArray = ['z', 'v', 'z', 'v', 'z', 'v']; // инициализируем переменную, содержащую массив строковых значений по которому будет произведен поиск
var searchElement = 'z'; // инициализируем строковую переменную (значение переменной будем искать внутри массива myArray)
var index = myArray.indexOf(searchElement); // инициализируем переменную, содержащую индекс первого искомого элемента (значение переменной searchElement) внутри массива myArray

while (index != -1) { // пока значение переменной index не будет равно -1
  indexes.push(index); // с использованием метода push() добавляем в переменную indexes значение переменной index
  index = myArray.indexOf(searchElement, index + 1); // изменяем значение переменной путем поиска необходимого элемента далее в массиве (если найден - индекс элемента, если нет то -1)
}

console.log(indexes); // переменная содержит значение [0, 2, 4]

/*
Обратите внимание на то, что если вы ищете внутри массива NaN (Not a number - не число), независимо от наличия возвращаемое значение будет -1. Это поведение метода учтено в методе includes()ECMAScript 2016, добавленном в ECMAScript 2016, он решает подобную задачу, но возвращает логическое значение:
*/

var X = [NaN];  // инициализируем переменную, содержащую одно значение NaN

console.log(X.indexOf(NaN)); // возвращаемое значение -1 (элемент не найден)
console.log(X.includes(NaN)); // возвращаемое значение true (элемент найден)

/////  lastIndexOf()  синтаксис array.lastIndexOf( searchElement, fromIndex )
/////позволяет возвратить последний индекс искомого элемента в массиве при первом совпадении, или -1
//lastIndexOf() использует оператор строгого сравнения (===) при сравнении искомого элемента и элементов массива.


/*Пример использования */

var xx = [1, 2, 3, "a", "b", "c"]; // инициализируем переменную, содержащую массив

console.log(xx.lastIndexOf("a"));
console.log(xx.lastIndexOf("d"));
console.log(xx.lastIndexOf("b", 2));
console.log(xx.lastIndexOf(1, -6));
console.log(xx.lastIndexOf(1, -5));

let frT = ["яблоки", "груши", "сливы", "яблоки", "груши"];

console.log(frT.lastIndexOf("яблоки")); // 3

var xxx = [1, 2, 3, "a", "b", "c"];
console.log(xxx.lastIndexOf("b"));

/*
продолжить поиск искомого элемента с конца массива после первого и последующих совпадений, вплоть до начала массива. Это позволит нам сравнить все элементы массива по определенному индексу на предмет наличия искомого элемента:
*/

var Indexes = [];
var MyArray = ['z', 'v', 'z', 'v', 'z', 'v', 'z', 'z'];

var element = 'z';
var Index = MyArray.lastIndexOf(element);

while (Index != -1) {
  Indexes.push(Index);
  if (Index > 0) {
    Index = MyArray.lastIndexOf(element, Index - 1);
  } else {
    Index = -1;
  }
}

console.log(Indexes);
/////////////////////////////////////////


// every()
/*
Метод every() проверяет, все ли элементы соответствуют определенному условию:
*/

var numbers = [1, 8, 25, 42];
var passed = numbers.every(condition);
function condition(value, index, array) {
  var result = false;
  if (value > 0) {
    result = true;
  }
  return result;
}

console.log(passed);
//////////////////////////////

// var numbers = [1, 8, 25, -42];

// var passed = numbers.every(function (value, index, array) {
//   var result = false;
//   if (value > 0) {
//     result = true;
//   }
//   return result;
// });

// console.log(numbers); 
// console.log(passed); 


// синтаксис:

/*
только с callback функцией
array.every( function( currentValue, index, arr ) ); 
*/

/*
с использованием объекта, на который может ссылаться ключевое слово this
array.every( function( currentValue, index, arr ), thisValue ); 
*/

///////////////////////////////////////

/*
SOME()
*/
var NumbeRs = [1, -12, 8, -4, 25, 42];
function Condition(value, index, array) {
  var result = false;
  if (value === 8) {
    result = true;
  }
  return result;
}
var PasseD = NumbeRs.some(Condition); // true

console.log(NumbeRs);
console.log(PasseD);
/////////////////

let Nr = [1, 12, 4, 25, 42, "aaa", "fff", "pp"];
let Pd = Nr.some(function (value, index, array) {
  let result = false;
  if (value < 0) {
    result = true;
  }
  return result;
});

console.log(Nr);
console.log(Pd);

///////////////

let NR = [-1, 12, 4, 25, 42, "aa"];
function Condition(value, index, array) {
  let result = false;
  if (value === "aa") {
    result = true;
  }
  return result;
}
let PD = NR.some(Condition); // true

console.log(NR);
console.log(PD);

/*
Метод filter(), как some() и every(), принимает функцию условия.
 Но при этом возвращает массив тех элементов, 
 которые соответствуют этому условию:
*/

var MYnumbers = [1, -12, 8, -4, 25, 42];
function MYcondition(value, index, array) {
  var result = false;
  if (value > 0) {
    result = true;
  }
  return result;
}
var filteredNumbers = MYnumbers.filter(MYcondition);

for (var i = 0; i < filteredNumbers.length; i++) {
  console.log(filteredNumbers[i]);
}


let Mynumbers = [1, -12, 8, -4, 123, 643, 97, 25, 42];
let FilteredNumbers = Mynumbers.filter(function(value, index, array) {
  let result = false;
  if (value < 0) {
    result = true;
  }
  return result;
});

for (var i = 0; i < FilteredNumbers.length; i++) {
  console.log(FilteredNumbers[i]);
}

// REDUCE()

let ArrNum = [1,2,3,4,5],

res = ArrNum.reduce(function(sum, item) {
  return sum + item;
},0);

console.log(res);

let myNumArr = [[1,2,3], [7,8,9]];
let newMyNum = myNumArr.reduceRight(function(sum, i) {
  return sum.concat(i);
},[]);

console.log(newMyNum);

// MAP()

let Snum = [1, 2, 3, 4, 5, 6];
function sq(val,i,arr) {
  return  val * val;
}

let sqNum = Snum.map(sq);
console.log(sqNum);

let SnuM = [1, 2, 3, 4, 5, 6];
let newsNum = SnuM.map(function(value, index, array) {
  return value * 3;
});
console.log(newsNum);

// аналогично с использованием стрелочной функции
var array4 = [10, 20, 30];
let double = array4.map( val => val * 2 );

console.log( double ); 
/* выводим значение переменной double равное [20, 40, 60] */

let numbers6 = [2, 3, 4, 100]; 
var MyObject = {
  square: function( val ) {
     return val * val; 
  }
};

var squaRed = numbers6.map( 
  function( val ) {
    return this.square( val );
     //  возвращаемое значение метода square объекта myObject
  }, MyObject 
);

console.log(squaRed);

//let li = document.querySelectorAll("li");
//let li = document.getElementsByTagName("li");
let li = document.getElementsByClassName("li");
 
for (let i of li) {
  i.style.backgroundColor = "blue";
}

// FOREACH

let vN = [1, 2, 3];
vN.forEach(fEh);
function fEh(val, i, array) {
 let res =  val * val;
 console.log(res);
}
//////////////////////////////////////
var NumBers = [2, 3, 4];
var SquAred = []; 
var myObjEct = { 
  square: function( val ) { 
    return val * val; 
  }
};

NumBers.forEach(function( val ) {
    SquAred.push( this.square( val ) ); 
  }, myObjEct );

console.log( SquAred );

///////////////////////////

var aRRay = [10, 20, 30]; 
var SUm = 0; 

aRRay.forEach( function (val) {
    SUm += val;
  });

console.log( SUm ); // выводим значение переменной sum равное 60