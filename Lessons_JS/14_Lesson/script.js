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

let NuM = [1,2,3,4,5,];
let newNum = NuM.shift();
console.log(NuM);
console.log(newNum);

//UNSHIFT
/*
Метод unshift() добавляет новый элемент в начало массива:
*/
var fruit4 = ["яблоки", "груши", "сливы"];
fruit4.unshift("абрикосы");
console.log(fruit4);


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

 num.splice(0,2,"один","два");
 console.log(num);

// CONCAT()

/*
Метод concat() служит для объединения массивов:
*/
var Fruit = ["яблоки", "груши", "сливы"];
var vegetables = ["помидоры", "огурцы", "картофель"];
var products = Fruit.concat(vegetables);

for (var i = 0; i < products.length; i++)
  document.write("<br><br>" + products[i] + "<br/>");

/*
При этом необязательно объединять только однотипные массивы. Можно и разнотипные:
*/

var Fruit1 = ["яблоки", "груши", "сливы"];
var prices = [20, 30, 80];
var products1 = Fruit1.concat(prices);
console.log(products1);

// JOIN
/*
Метод join() объединяет все элементы массива в одну строку:
*/
var Fruit2 = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
var fruitString = Fruit2.join(", ");
console.log(fruitString);