function showThis(a, b) {
    console.log(this);
}

showThis();

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