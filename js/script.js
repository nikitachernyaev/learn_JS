'use strict'
//ЗАДАЧА 1
/*let yourAnswer = prompt ("What is oficial name of JS", "");
if(yourAnswer == "ECMAScript"){
    alert ("Right");
} else{
    alert ("You dubm, its ECMAScript");
}*/

//ЗАДАЧА 2
/*let enterYourNum = prompt ("Please, enter your number", "");
if (+enterYourNum>0){
    alert("1");
} else if (+enterYourNum<0) {
    alert("-1");
} else {
    alert ("0");
}*/

//ЗАДАЧА 3
/*let a = 0;
let b = 3;
let result = (a + b < 4) ? 'Мало' : 'Много';
alert (result);*/

//ЗАДАЧА 4
/*let login = prompt ("Enter your login", "");
let message;

message = (login == 'Сотрудник') ?
    message = 'Привет':
    (login == 'Директор') ?
    message = 'Здравствуйте':
    (login == '') ?
    message = 'Нет логина':
    message = '';
alert(message);*/

//ЗАДАЧА 5
/*let yourAge = prompt ("Enter your age", "");
if(!(yourAge<14) && !(yourAge>90)){
    alert ("OK");
} else {
    alert ("NOT OK");
}*/

//ЗАДАЧА 6
/*let login;
let password;

login = prompt ("Enter your login");
if(login == "Admin"){
    password = prompt("Enter your password");
    if (password == "Im_in_charge"){
        alert (`Welcome ${login}`);
    } else if(password === "" || password === null ){
        alert ("Canceled");
    } else {
        alert ("Wrong password");
    }
} else if (login === "" || login === null){
    alert ("Canceled");
} else {
    alert ("Unknown user");
}*/

//ЗАДАЧА 7
/*for (let i = 2; i<11; i+=2){
    alert (i);
}*/

//ЗАДАЧА 8
/*let i =0;
while (i<3){
    alert( `number ${i}!` );
    i++;
}*/

//ЗАДАЧА 9
/*let yourNum = 0;
while(yourNum < 100){
    yourNum = prompt("Enter your number", "");
    if (yourNum === null) {
        alert ("Canceled");
        break;
    }
}
alert(`Your num is ${yourNum}`);*/

//ЗАДАЧА 10
/*let n;
do{
    n = prompt("num", "");
    if (n===null) break;
}while (n<=2)
let count;
for (let i = 2; i<n; i++){
    count = 1;
    for(let j = 2; j<=i; j++){
        if (i%j == 0){
            count++;
        }
    }
    if(count==2){
        alert (i);
    }
}*/

//ЗАДАЧА 11
/*let yourBrowser = prompt("Enter your browsers name", "");

if (yourBrowser == "Edge"){
    alert( "You've got the Edge!" );
} else if (yourBrowser == "Chrome" || yourBrowser == "Firefox" || yourBrowser == "Safari" || yourBrowser == "Opera"){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}*/

//ЗАДАЧА 12
/*const number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert("Fuck off");
}*/

//ЗАДАЧА 13
/*function checkAge(age) {
    return (age>18) ? true : confirm("confirm"); 
}

function checkAgeAnother(age) {
    return (age>18) || confirm("confirm");
}*/

//ЗАДАЧА 14
/*function min(a, b){
    if (a<b){
        return a;
    }
    return b;
}

alert(min(8,9));
alert(min(1,4));
alert(min(4,1));*/

//ЗАДАЧА 15
/*function pow (x,n){
    let result = x;

    for (let i=1; i<n; i++){
        result *=x;
    }

    return result;
}

let x = prompt("Enter your number");
let n = prompt("Enter degrie");

if (n<1){
    alert(`Degrie ${n} is not supported`);
} else{
    alert(pow(x,n));
}*/

//ЗАДАЧА 16
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);*/

//ЗАДАЧА 17
/*function hello(name){
    let phrase = `Hello, ${name}!`;

    say(phrase);
}

function say(phrase){
    alert(`*${phrase}*`);
}

hello("Nikita");*/

//ЗАДАЧА 18
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
alert(user.name);
delete user.name;
alert(user.name);*/

//ЗАДАЧА 19
/*function isEmpty(obj){
    for(let key in obj){
        return false;
    }

    return true;
}*/

//ЗАДАЧА 19
/*function getSumSallary(obj){
    let sum = 0;

    for(let key in obj){
        sum += obj.key;
    }

    return sum;
}*/

//ЗАДАЧА 20
/*function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}*/

//ЗАДАЧА 21
console.log("test");