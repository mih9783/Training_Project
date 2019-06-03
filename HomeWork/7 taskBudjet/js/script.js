let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName("budget-value")[0],
	dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
	levelValue = document.getElementsByClassName("level-value")[0],
	expensesValue = document.getElementsByClassName("expenses-value")[0],
	optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
	incomeValue = document.getElementsByClassName("income-value")[0],
	monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
	yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

	///////////////////////////

	expensesItem = document.getElementsByClassName("expenses-item"),
	expensesBtn = document.getElementsByTagName("button")[0],
	optionalExpensesBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName("button")[2],
	optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	incomeItem = document.querySelector(".choose-income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");

let time, money;

// начнём с кнопки "НАЧАТЬ РАСЧЁТ"
startBtn.addEventListener("click", function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	// +prompt для получения числового значения
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.timeData = time;
	appData.budget = money;

	// передаём данные в div class="budget-value"
	//budgetValue.textContent = money.toFixed();
	budgetValue.textContent = Math.round(money);

	// проверяю работу ф-ии в браузере

	/* получаем дату от пользователя, т.к работаем с инпут то  используем value(вместо textContent) и преобразуем в нужный формат */
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	// проверяю работу ф-ии в браузере
});
////////////////////


// превращаем методы appData в обработчики событий

// кнопка "утвердить"
expensesBtn.addEventListener("click", function () {
	// это самая сложная функция на сегодняшнем уроке

	let sum = 0;
	/* создали переменную всех сумм */
	/*  вырезаем тело  chooseExpenses из appData*/
	/* подгоняем условия цикла for(let i = 0; i < 2; i++) под данные страницы */

	for (let i = 0; i < expensesItem.length; i++) {

		/* создаём переменные для получения данных от пользователя */
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		/* пишем условия */
		if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b; /* +b для перевода данных от пользователя в число */
		} else {
			i = i - 1;
		}
		/* записываем полученные данные от пользователя в div class="expenses" Обязательные расходы: */
		expensesValue.textContent = sum;
	}
	// проверяю работу ф-ии в браузере
});
/////////////////////


// кнопка "утвердить" для необязательных расходов
optionalExpensesBtn.addEventListener("click", function () {
	//  вставляем тело из chooseOptExpenses for()

	/* подгоняем условия цикла for(let i = 0; i <= 3; i++) под данные страницы */

	for (let i = 0; i < optionalExpensesItem.length; i++) {

		/* помещаем данные от пользователя в инпуты */
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		/* помещаем данные в div class="optionalexpenses-value" */
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}

});
////////////////////////

// делаем расчёт дневного бюджета
countBtn.addEventListener("click", function () {
	/* расчёт бюджета на день */
	appData.moneyPerDay = Math.round(appData.budget / 30);
	//appData.moneyPerDay = (appData.budget / 30).toFixed();
	/* получаем dayBudgetValue*/
	dayBudgetValue.textContent = appData.moneyPerDay;
	/*  пишем условия чтобы обязательно были введены данные */
	if (appData.budget != undefined) {
		/* берём условия из  detectLevel и вставляем*/
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay >= 2000) {
			levelValue.textContent = "Это высокий уровень достатка!";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Нажмите кнопку 'Начать расчёт'";
	}
});

// Подсчёт возможного дохода
/* Использум события соторые используются толко в инпутах текстареа и  селектах, для того чтобы данные сразу помещались в равую часть программы */

incomeItem.addEventListener("input", function () {
	let items = incomeItem.value;
	console.log(1);
	if (isNaN(items) || items != "") {
		appData.income = items.split(" , ");
		incomeValue.textContent = appData.income;
	}
});
//////////////////////

// делаем чекбокс
checkSavings.addEventListener("click", function () {
	/* пишем обратное условие для savings: false, в appData */
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
	/* ставим галку в чекбоксе - становится true, снимаем - false */
});
////////////////

// сумма накоплений, чтобы были заполнены оба поля: сумма и процент
/* работает если savings: true */
sumValue.addEventListener("input", function () {
	if (appData.savings == true) {
		/* то что вводит пользователь в сумму будет записываться в перем sum */
		let sum = +sumValue.value;
		/* то что вводит пользователь в процент будет записываться в перем sum */
		let percent = +percentValue.value;

		//appData.monthIncome = sum / 100 / 12 * percent;
		appData.monthIncome = Math.round(sum / 100 / 12 * percent);

		//appData.yearIncome = sum / 100 * percent;
		appData.yearIncome = Math.round(sum / 100 * percent);
		monthSavingsValue.textContent = appData.monthIncome;
		//monthSavingsValue.textContent = appData.monthIncome.toFixed(1);

		


		yearSavingsValue.textContent = appData.yearIncome;
		//yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

		

	}
});

// это для поля процентов
percentValue.addEventListener("input", function () {
	if (appData.savings == true) {
		let sum = +sumValue.value;
    let percent = +percentValue.value;
    
		appData.monthIncome = Math.round(sum / 100 / 12 * percent);
    appData.yearIncome = Math.round(sum / 100 * percent);
		//appData.monthIncome = sum / 100 / 12 * percent;
    //appData.yearIncome = sum / 100 * percent;
    
		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;
		//monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		//yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

	}
});


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};








