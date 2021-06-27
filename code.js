// if (3*4 ==12) {
//     console.log("Верно!")
// } else{
//     console.log("Неверно!")
// }

// let num = 50;

// if (num < 49) {
//     console.log("Мало!")
// } else if (num > 100){
//     console.log("Много!")
// } else {
//     console.log("В самый раз!")
// }

// switch (num) {
//     case num < 49:
//         console.log("мало");
//         break;
//     case num > 100:
//         console.log("много");
//         break;
//     case num > 80:
//         console.log("много");
//         break;
//     case 50:
//         console.log("в самый раз!");
//         break;
// }

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for( let i = 1; i < 8; i++){
//     if(i == 6){
//     continue
//     }
//     console.log(i);
// }

let options = {
    width: 1024,
    height: 1024,
    name: "text"
};

options.bool = false;
options.colors = {
    bg: "red",
    border: "black"
};

console.log(options);

for (let key in options){
    console.log("Свойство " + key + " Имеет значение " + options[key]);
}
console.log(Object.keys(options).length);

let arr = [1,2,3,4,5];
arr.pop();
arr.push("6");
arr.shift();
arr.unshift("0");


for (let i = 0; i < arr.length; i++){
   console.log(arr[i]);
}

let mass = [1,3,5,7,9,12]
for(let key of mass){
    console.log(key);
}