// Синтаксис создания Promise:

//var promise = new Promise(function (resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
//});

  // Универсальный метод для навешивания обработчиков:

  //promise.then(onFulfilled, onRejected);

/*

onFulfilled – функция, которая будет вызвана с результатом при resolve.
onRejected – функция, которая будет вызвана с ошибкой при reject.

*/

// ПЕТРИЧЕНКО

let drink = 1;
function shoot(arrow, headshot, fail) {
    console.log("Вы сделали выстрел ...");

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail("Вы прмахнулись"); // условие тернарный оператор
    },3000);
}

function win() {
    console.log("Вы выиграли");
    (drink == 1) ? buyBeer() : giveMony();
}

function buyBeer() {
    console.log("Вам купили пиво");
}

function giveMony() {
    console.log("Вам заплатили");
}


function loose() {
    console.log("Вы проиграли");
}

shoot({},
    
    function (mark) {
        console.log("Вы попали в цель");
        win(mark, buyBeer, giveMony);
    },

    function(miss) {
            console.error(miss);
            loose();
        } 
    );

    