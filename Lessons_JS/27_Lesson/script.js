function showThis(a, b) {
    console.log(this);
}

showThis();

// 1 способ: прсто вызов функции - получаем либо window либо undefined,
// зависит работаем мы в строгом режиме или нет

// неправильно
function showThis1(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return this.a + this.b; //NaN
    }
    console.log(sum());// NaN
}

showThis1(4, 6);
showThis1(4, 4);

// правильно
function showThis2(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis2(4, 6);// 10
showThis2(4, 4);// 8

// строгий стандарт
'use strict';
function showThis3(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis3(4, 2);// 6
showThis3(3, 4);// 7

// 2 способ

// 4 способ

let user = {
    name: "Nina",

};

function sayName() {
    console.log(this);
    console.log(this.name);

}
console.log(sayName.call(user));
console.log(sayName.apply(user));

function sayName(surName) {
    console.log(this);
    console.log(this.name + " " + surName);

}
console.log(sayName.call(user, "Ivanova"));
console.log(sayName.apply(user, ["Жукова"]));

function count(num) {
    return this * num;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));

let btn1 = document.querySelector(".btn_1");
btn1.addEventListener("click", function() {
    console.log(this);
});

// пример использования
let btn2 = document.querySelector(".btn_2");
btn2.addEventListener("click", function() {
    console.log(this);
    this.style.backgroundColor = "blue";
});

let btn3 = document.querySelector(".btn_3");
let b = document.querySelector("body");
btn3.addEventListener("click", function() {
    b.style.backgroundColor = "yellow";
});