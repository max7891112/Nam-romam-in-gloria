
let money = +prompt ("Ваш бюджет на месяц?","100000");
    time = prompt("Введите дату", "YYYY-MM-DD");
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
savings: false
};


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
	
	

appData.moneyPerDay =  appData.budget/30;
alert("Ваш бюджет на один день составляет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Неизвестный тип данных");
}