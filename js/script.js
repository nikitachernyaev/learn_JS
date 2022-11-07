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
/*let calculator = {
    read(){
        this.x = +prompt("Please, enter x");
        this.y = +prompt("Please, enter y");
    },

    sum(){
        return this.x + this.y;
    },

    mul(){
        return this.x * this.y;
    },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

//ЗАДАЧА 22
/*let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        alert(this.step);
        return this;
    },
}

ladder.up().up().showStep().down().down().up().showStep();*/

//LESSON new
/*function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);*/

//TASK 23
/*function Calculator(){
    this.read = function() {
        this.x = +prompt("x = ");
        this.y = +prompt("y = ");
    }

    this.sum = function() {
        return this.x + this.y;
    }

    this.mul = function() {
        return this.x * this.y;
    }
}

let calc = new Calculator();
calc.read();
alert( calc.sum() );
alert( calc.mul() );*/

//TASK 24
/*function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Enter your value");
    }
}

let accum = new Accumulator(1);
accum.read();
accum.read();
alert(accum.value);*/

//TASK 25
/*function sum(){
    let a = +prompt("Enter a");
    let b = +prompt("Enter b");
    alert(a + b);
}*/

//TASK 26
/*function readNum(){
    let a;

    do {
        a = prompt("enter a");
    } while (!isFinite(a));

    if (a === null || a === ""){
        return null;
    }
    
    return +a;
}

alert( `your num is ${readNum()}`);*/

//TASK 27
/*function randomNum(min, max){
    return min + Math.random() * (max - min);
}

alert (randomNum(1,5));*/

//TASK 28
/*function randomInt(min, max){
    let randInt = min + Math.random() * (max + 1 - min);
    return Math.floor(randInt);
}

alert( randomInt(1,5) );*/

//TASK 29
/*function ucFirst(str){
    if (!str){
        return str;
    }

    return str = str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("hello") );*/

//TASK 30
/*function checkSpam(str){
    str = str.toLowerCase();

    return str.includes("viagra") || str.includes("xxx");
}

alert( checkSpam("viAgRa grinsdnfjs gkfkg") );
alert( checkSpam("xXx sdfs") );
alert( checkSpam("sgdhgfdnf") );*/

//TASK 31
/*function truncate(str, maxLength){    
    if (str.length > maxLength){
        return str.slice(0, maxLength) + "...";
    }

    return str;
}

alert( truncate("I want to learn js, TS, angular, and apply for a job after that", 33) );
alert( truncate("Hi", 20) );*/

//TASK 32
/*function getCurrentValue(str){
    str = str.slice(1);
    return +str;
}

alert( getCurrentValue("$450.5") );*/

//TASK 33
/*let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("R&R");
alert(styles);
styles[Math.floor((styles.length - 1)/2)] = "Classic";
alert(styles);
alert( styles.shift() );
styles.unshift("Reggy", "Rap");
alert(styles);*/

//TASK 34
/*function sumInput(){
    let arr = [];
    let value;
    let sum = 0;

    do{
        value = prompt("Enter your num");

        if (!isFinite(value) || value === "" || value === null){
            break;
        }

        arr.push(+value);
    } while (true)

    for (let num of arr){
        sum += num;
    }

    return sum;
}

alert( sumInput() );*/

//TASK 35
function getMaxSubstringSum(arr){
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++){
        let tempSum = 0;

        for (let j = i; j < arr.length; j++){
            tempSum += arr[j];
            maxSum = Math.max(maxSum, tempSum)
        }
    }

    return maxSum;
}

function getMaxSubstringSumVer2(arr){   //Переписал решение из учебника, решил первым способом
    let maxSum = 0;
    let tempSum = 0;

    for (let num of arr){
        tempSum += num;
        maxSum = Math.max(maxSum, tempSum);
        
        if (tempSum < 0){
            tempSum = 0;
        }
    }

    return maxSum;
}

let arr = [-1, 2, 5, 14, -9];
alert( getMaxSubstringSum(arr) );
alert( getMaxSubstringSumVer2(arr) );