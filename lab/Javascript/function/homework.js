// LAB-5 : Algorithm
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

function PrimePrime(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    return isPrime(number); // ส่งค่า boolean กลับ
}

let numberToCheck = 2;
if (PrimePrime(numberToCheck)) {
    console.log(numberToCheck + " เป็นจำนวนเฉพาะ");
} else {
    console.log(numberToCheck + " ไม่เป็นจำนวนเฉพาะ");
}


// LAB-9 : Challenge
// let num1 = prompt('Enter first number');
// let num2 = prompt('Enter second number');
// let num3 = prompt('Enter third number');
var num1 = 2;
var num2 = 3;
var num3 = 4;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// LAB-10 : Refractor
// let age = prompt('How old are you');
var age = 24;   
var message = age >= 18 ? 'Allowed' : 'Not allowed';
console.log('You are ' + message);


// Temperature Convert
const celsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}
// var celsius = prompt("Enter celsius");
var celsius = 10;
console.log('Fahrenheit: ' + celsiusToFahrenheit(parseInt(celsius)));

// Factorial
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log('Factorial: ' + factorial(5));