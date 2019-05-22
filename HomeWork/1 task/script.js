let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let answ1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  answ2 = prompt("Во сколько обойдется?", ""),
  answ3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  answ4 = prompt("Во сколько обойдется?", "");



let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

appData.expenses.answ1 = answ2;
appData.expenses.answ3 = answ4;

alert(appData.budget / 30);

//console.log(appData.timeData);
