// 1
var object = { 0: 1, 1: 2, 2: 3, length: 3 };
var array = [];

// 1-1 Преобразуем псевдомассив в массив
for (var i = 0; i < object.length; i++) {
  array.push(object[i]);
}
console.log(array); // [1, 2, 3]
////////////////////////


// 1-2
let MYli = document.querySelectorAll(".myLi");
let MYliArr = [];

// 1-2 Преобразуем псевдомассив в массив

for (var i = 0; i < MYli.length; i++) {
  MYliArr.push(MYli[i]);
}
console.log(MYli);
console.log(MYli.length);
console.log(MYliArr);

////////////////////////////

// 2-1 Этот метод «наших дедушек и бабушек», который работает до сих пор.

var object = { 0: 1, 1: 2, 2: 3, length: 3 };
// Преобразуем псевдомассив в массив
var array = Array.prototype.slice.call(object);
// Или сокращённая форма: [].slice.call(object);

console.log(object); // __proto__: Object
console.log(array); // [1, 2, 3]
// Например, если вы хотите преобразовать коллекцию NodeList в настоящий массив, вам нужен примерно такой код:

var divs = Array.prototype.slice.call(document.querySelectorAll("div"), 0);

//////////////////////////////////////

// 2-2
let myTxt = document.getElementsByTagName("p");
console.log(myTxt);

// 2-2 Преобразуем псевдомассив в массив

let myTxtArr = Array.prototype.slice.call(document.getElementsByTagName("p"), 0);
console.log(myTxtArr);

/////////////////////////////

/*

 Например, если вы хотите применить forEach к свойству childNodes объекта Node, то это делается так:
Array.prototype.forEach.call(node.childNodes, function(child) {
 делаем что-нибудь с объектом child
});

Для удобства повторного использования этого приема, можно объявить ссылку на метод Array.prototype.forEach в отдельной переменной и использовать ее как сокращение:

(Предполагается, что весь код ниже находится в одной области видимости)
var forEach = Array.prototype.forEach;

forEach.call(node.childNodes, function(child) {
// делаем что-нибудь с объектом child
})

*/


/*

чтобы преобразовать коллекцию в массив можно использовать следующий код:

function to_array (obj) {
	var i,
		length,
		res;

	if (Object.prototype.toString.call(obj) === '[object Array]') {
		return obj;
	}
	length = obj.length;
	res = [];
	for (i = 0; i < length; i += 1) {
		res.push(obj[i]);
	}
	return res;
}

*/
// 3 С помощью функции Array.from() ДЛЯ СОВРЕМЕННЫХ БРАУЗЕРОВ

var object1 = { 0: 1, 1: 2, 2: 100, 3: 200, 4: "последняя строка", length: 5 };
// Преобразуем псевдомассив в массив
var array1 = Array.from(object1);

console.log(array1); // [1, 2, 3]
// 3-2

let li = document.querySelectorAll(".myli");

let myArray = Array.from(li);

console.log(li);
console.log(myArray);
/////////


let t = document.querySelectorAll(".t");

function toArray(t) {
  var i,
    length,
    res;

  if (Object.prototype.toString.call(t) === '[object Array]') {
    return t;
  }
  length = t.length;
  res = [];
  for (i = 0; i < length; i += 1) {
    res.push(t[i]);
  }
  return res;
}



console.log(t);
console.log(toArray(t));



