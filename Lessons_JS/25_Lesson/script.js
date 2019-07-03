let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let width = box.clientWidth, // это св-во скобки не ставим
    height = box.clientHeight,
    width1 = box1.offsetWidth,
    height1 = box1.offsetHeight,
    width2 = box2.scrollWidth,
    height2 = box2.scrollHeight;

console.log(width);
console.log(height);
console.log(width1);
console.log(height1);
console.log(width2);
console.log(height2);

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    box.style.height = box.scrollHeight + "px";
});

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function () {
    console.log(box1.scrollTop + "px прокрутили вниз");
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function () {
    box2.scrollTop = 0;
});

// border-box  важное в разработке

let btn3 = document.querySelector(".btn3");
let width3 = box3.clientWidth;
let height3 = box3.clientHeight;

console.log(width3 + " это border-box");
console.log(height3 + " это border-box");


btn3.addEventListener("click", function () {
    box3.scrollTop = 0;
});

//Получение координат

let box4 = document.querySelector(".box4");
let btn4 = document.querySelector(".btn4");

console.log(box4.getBoundingClientRect());
console.log(box4.getBoundingClientRect().left);
console.log(box4.getBoundingClientRect().bottom + " нижняя координата");

// Работа с документом, со всей страницей

let btn5 = document.querySelector(".btn5");
// получение ширины документа

console.log(document.documentElement.clientWidth + "  это ширина моего монитора без полосы прокрутки");
console.log(document.documentElement.clientHeight + "  это высота моего монитора без учёта высоты панели разработчика");
console.log(document.documentElement.scrollTop);

/* наверх страницы */


btn5.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

/* перемещение относительно текущего положения */

let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
scrollBy(0, 200); // первая x, вторая y ; опустить вниз на 200 px используется редко

btn6.addEventListener("click", function () {
    scrollBy(0, 200);
});

// используется чаще

scrollTo(0, 200); // первая x, вторая y ;

btn7.addEventListener("click", function () {
    scrollTo(0, 500);
});

btn8.addEventListener("click", function () {
    scrollTo(0, 500);
});