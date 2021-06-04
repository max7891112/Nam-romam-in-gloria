let money, time;

function start() {
	money = +prompt ("Ваш бюджет на месяц?","10000");
    time = prompt("Введите дату", "YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt ("Ваш бюджет на месяц?","10000");
	}
}

start();



	let appData = {
budget: money,
//  данные времени - 
timeData: time,
//  объект с обязательными расходами - 
expenses: {},
//  объект с необязательными расходами - 
optionalExpenses:{},
//  массив данных с доп. доходом - 
income:{}, 
//  свойство 
savings: true
};


function chooseExpensis () {
	for (i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50){
			console.log("done");
			appData.expenses[a] = b;
		} else{
	
		}
	}
}

chooseExpensis ();



// let i = 0;
// do { i++;
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	}
// 	while(i < 2);

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 		i++;
// }
	
	
function detectDayBudget () {
	appData.moneyPerDay =  (appData.budget/30).toFixed();
	alert("Ваш бюджет на один день составляет " + appData.moneyPerDay);
}
detectDayBudget ();

function detectLevel () {
	if (appData.moneyPerDay < 100) {
		console.log("Низкий уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Неизвестный тип данных");
	}
}
detectLevel ();

function checkSavings () {
	if (appData.savings == true) {
		let save = +prompt("Сумма ваших накоплений?"),
		    persent = +prompt("Под какой процент?");

			appData.monthIncome = save/100/12*persent;
			alert("Доход в месяц с вашего депозита составляет: " + appData.monthIncome);
	}
}
checkSavings();

 function chooseOptExpenses () {
	let i = 0;
	let optional;
	do { i++;
	optional = prompt("Статья необязательных расходов?");
	appData.optionalExpenses [i] = optional; 
	}
	while(i < 3);
 }

 chooseOptExpenses ();

