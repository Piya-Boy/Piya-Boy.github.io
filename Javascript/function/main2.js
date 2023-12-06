// LAB-3 : Fundamental
var name = prompt("Enter your name");
if (name == "boy") {
    console.log("ถูก");
} else {
    console.log("ไม่ถูก");
}

// /*LAB-4 : Fundamental */

// LAB-6 : Small Challenge

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number");
}else {
    console.log(parseInt(num1) + parseInt(num2));
}

// LAB-7 : Mini workShop - Validate Login

var username = prompt("Enter username");
var password = prompt("Enter password");

if(username != "" && password != ""){
    if(username == "admin" && password == "1234" || username == "john" && password == "qwerty"){
        console.log("Hello " + username);
    }else{
        console.log("invalid username or password");
    }
}else{
    console.log("username is required");
    console.log("password is required");
}

// LAB-9 : Challenge
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var num3 = prompt("Enter third number");

if(num1 > num2 && num1 > num3){
    console.log(num1);
}
else if(num2 > num1 && num2 > num3){
    console.log(num2);
}else{
    console.log(num3);
}

// switch case

// LAB-1 : Fundamental
var num = prompt("Enter number");

switch(num){
    case "1":
        console.log("One");
        break;
    case "0":
        console.log("Zero");
        break;
    case "-1":
        console.log("Minus");
        break;
    default:
        console.log("Invalid number");
}

// Mini-workshop : Login System
var user = prompt("Enter your name");
var password = prompt("Enter your password");

switch(user){
    case "":
        user = "guest";
        break;
    case "codecamp":
        password = prompt("Enter your password");
        if(password == "123456"){
            console.log("Welcome " + user);
        }else{
            console.log("Wrong password");
        }
        break;
    default:
        console.log("Wrong user");
        break;
}