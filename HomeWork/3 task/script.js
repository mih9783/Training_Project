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
    savings: true,
    chooseExpenses: function() {
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
    },
    checkSavings: function() {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?", "");
        let percent = +prompt("Под какой процент ?", "");

        appData.monthIncome = Math.round(save / 100 / 12 * percent);
        alert("Месячный доход с вашего депозита составляет: " + appData.monthIncome + " руб.");
    }
    },
    detectDayBudget: function() {
      appData.moneyPerDay = Math.round(appData.budget / 30);
      //appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
      if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
    },
    chooseOptExpenses: function() {
      for (let i = 1; i <= 3; i++) {
          let questionOptExpenses = prompt("Статья необязательных расходов?");
          appData.optionalExpenses[i] = questionOptExpenses;
          console.log(appData.optionalExpenses);
      }
  }
};

// Ежемесячный доход с депозита

// Расчет дневного бюджета

// блок кода с расчетом уровня достатка 

// функцию для определения необязательных расходов 

// appData.moneyPerDay = Math.round(appData.budget / 30);






