// ПЕТРИЧЕНКО

let drink = 0;
function shoot(arrow) {
    console.log("Вы сделали выстрел ...");

    // Создаём промис
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("Вы прмахнулись"); // условие тернарный оператор
        }, 3000);
     });

     return promise;
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

shoot({})

    // Выстраиваем цепочку событий при положительном раскладе,
    // для этого используем оператор .then 
    .then(mark => console.log("Вы попали в цель"))
    .then(win)

    // Выстраиваем цепочку событий, если что-то не выполнилось
    // для этого используем оператор .catch

    .catch(loose);


