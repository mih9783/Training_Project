// 1 VARIANT

function myTimer() {
  console.log("Hello, Hello, Hello");
}

setTimeout(myTimer, 2000);

// 2 VARIANT

setTimeout(function () {
  console.log("Hello !!!!!");
}, 3000);

// CLEARINTERVAL

function TimerClear() {
  console.log(11111);
}
setTimeout(TimerClear, 1000);

let ID1 = setTimeout(TimerClear, 1000);
clearTimeout(ID1);


// ИЗ ИНТЕРНЕТА

var timerId = setTimeout(function () {
  alert(1);
}, 1000);
console.log(timerId); // число - идентификатор таймера

clearTimeout(timerId);
console.log(timerId); // всё ещё число, оно не обнуляется после отмены
// SETINTERVAL


// начать повторы с интервалом 2 сек
var timerId = setInterval(function () {
  console.log("тик");
}, 2000);

// через 5 сек остановить повторы
setTimeout(function () {
  clearInterval(timerId);
  console.log("стоп");
}, 5000);

//  рекурсивный setTimeout

/* вместо:
var timerId = setInterval(function() {
  alert( "тик" );
}, 2000);
*/

/* пишем */

// var timerId = setTimeout(function tick() {
//   console.log( "тик" );
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// ИЛИ ТОЖЕ РЕКУРСИВНЫЙ

// let timId = setTimeout(function logFn() {
//     console.log("tick-tack");
//     setTimeout(logFn,2000);
// });

// ============

// ОСТАНОВКА РЕКУРСИВНОЙ SETTIMEOUT  через if

let text = document.querySelector(".text");
let y = 1;
let tT = setTimeout(function Fntick() {
  text.textContent = y++;
  tT = setTimeout(Fntick, 500);

  if (y > 10) {
    clearTimeout(tT);
  }
}, 500);

/*

Остановить такой таймер можно просто не дав запуститься методу setTimeout, например, через if.

В следующем примере таймер остановится, когда значение инпута станет равно 10-ти:

*/
function timer() {
  var elem = document.getElementById("test"); //получаем наш инпут
  elem.value = parseInt(elem.value) + 1; //увеличиваем значение атрибута на единицу

  if (elem.value < 10) { //если в инпуте меньше 10-ти - то работаем дальше
    //Функция timer запускает саму себя с задержкой в 1 секунду:
    window.setTimeout(timer, 1000);
  }
}


// internet таймер

var c = 0;
var t;
var timerIsOn = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timerIsOn) {
    timerIsOn = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timerIsOn = 0;
}

// internet end

//  рекурсивный setTimeout

/* вместо:
var timerId = setInterval(function() {
  alert( "тик" );
}, 2000);
*/

/* пишем  бесконечное повторение*/

// var timerId = setTimeout(function tick() {
//   console.log( "тик" );
//   timerId = setTimeout(tick, 2000);
// }, 2000);


// +++++++++++++++++

//Объявляем переменную для таймаута
var tr;
(function () {
  var test = arguments.callee;
  tr = setTimeout(function () {
    console.log(Math.random());
    test();
  }, 1000);
})();

//Останавливаем выполнение:

clearTimeout(tr);

//anime lesson 7
var Btn = document.getElementsByClassName("btn");
var elem = document.getElementsByClassName("anime");
function myMove() {

  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == 350) {
clearInterval(id);
    } else {
      pos++;
      elem[0].style.top = pos + "px ";
      elem[0].style.left = pos + "px ";
    }
  }
}
Btn[0].addEventListener("click", myMove);


//---------------- переделать с if
// var i = 1;
// setTimeout(function run() {
//   console.log(i++);
//   setTimeout(run, 100);
// }, 100);
//----------------

// от ШЕФА

// глобальная переменная, хранящая количество секунд, прошедших с момента нажатия ссылки
var count=0;
// глобальная переменная, хранящая идентификатор таймера
var timer;
//функция, выполняет следующее:
//1 - выводит значения переменной count в элемент с id="clock"
//2 - увеличивает значения переменной на 1
//3 - запускает таймер, который вызовет функцию timeCount() через 1 секунду
function timeCount() {
  document.getElementById("countTime").innerHTML = count.toString();
  count++;
  timer = window.setTimeout(function(){ timeCount(); },1000);
}
//функция проверяет выражение !timer по правилу лжи, если оно истинно, 
//то вызывает функцию timeCount()
function startCount() {
  if (!timer)
    timeCount();
}
  //функция проверяет выражение timer по правилу лжи
//Если оно истинно, то она вызывает метод clearTimeOut() для прекращения работы таймера
//и присваивает переменной timer значение null
function stopCount() {
    if (timer) {
      clearTimeout(timer);
      timer=null;
    }
  }
// мигающий блок
 let Block = document.querySelector(".block");
 let btnTim = document.querySelector(".btn.timeout");
 
 btnTim.addEventListener("mouseenter", borderFn); 
 btnTim.addEventListener("mouseout", bordersFn); 
let mybdr;
function borderFn() {
    mybdr = setInterval(function () {
        Block.classList.toggle("blocks");
    }, 200); 
 }

 function bordersFn() {
    clearTimeout(mybdr);
 }

 //  ДЕЛЕГИРОВАНИЕ СОБЫТИЙ (жёлтые кнопки) 

 let wrapBtn = document.querySelector(".wrap-btn");
 let wrapBtn1 = document.querySelector(".wrap-btn1");
 let wrapBtn2 = document.querySelector(".wrap-btn2");
 let btnD = document.getElementsByTagName("button");

 // в if проверяем если пользователь кликнул по кнопке
 wrapBtn.addEventListener("click", function(event) {
     if (event.target && event.target.tagName == "BUTTON") {
         console.log("это кнопка");
     } else {
         console.log("Вы кликнули не по кнопке");
     }
 });

// проверка класса

wrapBtn1.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("btn1")) {
        console.log("это кнопка с классом btn1");
    }
});

// поиск конкретного элемента с конкретным классом

wrapBtn2.addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.btn-first")) {
        console.log("это кнопка с классом btn-first");
    }
});

//  делегирование  для абсолютно разных действий

let menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.btn-save")) {
        alert( "сохраняю" );
    }

    if (event.target && event.target.matches("button.btn-load")) {
        alert( "загружаю" );
    }

    if (event.target && event.target.matches("button.btn-search")) {
        alert( "ищу" );
    }
});

