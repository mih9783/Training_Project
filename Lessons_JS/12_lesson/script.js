// function first() {
//     //  что-то делаем
//     setTimeout(function () {
//         console.log(1);

//     }, 500);
// }

// function second() {
//     console.log(2);

// }

// first();
// second();


myNumber(function () {
    console.log(2);
});

function myNumber(callbackFunction) {
    console.log(1);
    callbackFunction();
}

myNumber(function () {
    console.log(4);
});

myNumber(function () {
    console.log(3);
});

myDinner(' Рис ', ' Курица ', function () {
    alert('Я закончил обедать.');
});

function myDinner(param1, param2, callbackFunction) {
    alert('Я стал обедать. Меню содержит: ' + param1 + ',' + param2);
    callbackFunction();
}

//Read more: http://mrbool.com/callback-functions-in-javascript/28614#ixzz5oisp8TsR


function learnJS(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

learnJS('javaScript', function () {
    console.log('Я прошёл 10 урок');
});

function LnJs(lang, callback) {
    console.log('Я изучаю ' + lang);
    callback();
}

function done() {
    console.log('Я прошёл 11 урок');
}

LnJs("JavaScript", done);
function fn1() {
    console.log("ура");
}
function myFn(text, callb) {
    console.log("это тест ");
    callb(); // эта функция в консоли стоит впереди вышестоящей
}

myFn("", fn1);



