let money;
let time;
money = prompt ("Ваш бюджет на месяц?","100000");
time = prompt("Введите дату", "YYYY-MM-DD");
let appData = {
budget: money,
//  данные времени - 
timeData: time,
//  объект с обязательными расходами - 
expenses: {},
//  объект с необязательными расходами - 
optionalExpenses:{"FirstQuestions" : "SecondQuestions"},
//  массив данных с доп. доходом - 
income:{}, 
//  свойство 
savings: false
};

let FirstQuestions = prompt("Введите обязательную статью расходов в этом месяце", "");
let SecondQuestions = prompt("Во сколько обойдется?","");

alert("Ваш бюджет на один день составляет " + appData.budget/30);