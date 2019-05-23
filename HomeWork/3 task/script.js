let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ""); // для получения числового значения
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 40) {
            console.log("done");

            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseExpenses();

// Ежемесячный доход с депозита

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?", "");
        let percent = +prompt("Под какой процент ?", "");

        appData.monthIncome = Math.round(save / 100 / 12 * percent);
        alert("Месячный доход с вашего депозита составляет: " + appData.monthIncome + " руб.");
    }
}

checkSavings();

// Расчет дневного бюджета

function detectDayBudget() {
    appData.moneyPerDay = Math.round(appData.budget / 30);
    //appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

// блок кода с расчетом уровня достатка 

function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();
// appData.moneyPerDay = Math.round(appData.budget / 30);






