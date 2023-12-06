function sayHelloWorld() {
    console.log("Hello World");
}

sayHelloWorld();

// Lab-2: Can you call my name
function sayHelloUser(name) {
    console.log("Hello " + name);  
}

sayHelloUser("John");

// LAB-3: Login Feature
function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

login("admin", "P@ssw0rd");

// LAB - 4 : Algorithm
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let numberToCheck = 17;
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " เป็นจำนวนเฉพาะ");
} else {
    console.log(numberToCheck + " ไม่เป็นจำนวนเฉพาะ");
}

// LAB-5 : Algorithm
function PrimePrime(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
PrimePrime(7);
// PrimePrime(13);
// PrimePrime(14);

// LAB-6 : Fundamental
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(3, 5));

// LAB-7 : Fundamental
function findMin(num1, num2) {
    // if (num1 < num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }

    return Math.min(num1, num2);
}
console.log(findMin(10, 20));

// LAB-12 : Challenge
function max(num1, num2, num3, num4) {
    // test

    // if (num1 > num2 && num1 > num3 && num1 > num4) {
    //     return num1;
    // } else if (num2 > num3 && num2 > num4) {
    //     return num2;
    // } else if (num3 > num4) {
    //     return num3;
    // } else {
    //     return num4;
    // }
    
    return Math.max(num1, num2, num3, num4);    
}
console.log(max(7, 3, 9, 2));

// Arrow Function
// Add function

const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(23, 9));

// IsPrime Arrow Function
const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

// Day to Second
const daysToSeconds = (days) => {
    return days * 24 * 60 * 60;
}
console.log(daysToSeconds(7)); 

// Total Score
const totalScore = (score) => {
    if (score === 3) {
        return 3;
    } else if (score === 1) {
        return 1;
    } else {
        return 0;
    }
}
console.log(totalScore(3));

// leap Year
const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2016));

// Birth Year
const birthYear = (year) => {
    return new Date().getFullYear() - year;
}
console.log(birthYear(2000));

// Temperature Convert
const celsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}
var celsius = prompt("Enter celsius");
console.log(celsiusToFahrenheit(parseInt(celsius)));

// Factorial
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
// Print number
for (let i = 2; i <= 100; i+2) {
        // console.log(i);
}