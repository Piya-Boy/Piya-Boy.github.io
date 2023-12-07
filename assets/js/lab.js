/*
================================================================
Javascript
================================================================
*/

// print letter
const printletter = () => {
    let result = '';
    for (i = 65; i <= 90; i++) {
        const result = String.fromCharCode(i);
        setTimeout(() => {
            document.getElementById('res-letter').innerText = result;
        }, (i - 65) * 1000);
    }
}

printletter();

// Factorial
const factorial = () => {
    let num = document.getElementById('input-factorial').value;
    if (num != "") {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        document.getElementById('res-factorial').innerText = result;
    } else {
        document.getElementById('res-factorial').innerText = "Please enter a number";
    }
}

// Day to Second
const daysToSeconds = () => {
    let days = document.getElementById('input-days').value;
    if (days != "") {
        let result = days * 24 * 60 * 60;
        document.getElementById('res-days').innerText = result;
    } else {
        document.getElementById('res-days').innerText = "Please enter a days";
    }
}

// Login
const login = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "admin" && password == "P@ssw0rd") {
        alert("Login successful");
    } else {
        alert("Login failed");
    }
}

//  to do function
const addTodo = () => {
    var list = document.getElementById('task').value;

    if (list !== "") {
        printTodo(list);
        document.getElementById('task').value = "";
    } else {
        // document.getElementById('res-todo').innerText = "Please enter a list";
    }
}

const printTodo = (list) => {

    if (!window.todolis) {
        window.todolis = [];
    }

    todolis.push(list);

    console.log(todolis);

   
    var res = "";
    // Show all todo list items
    for (let i = 0; i < todolis.length; i++) {
        if (todolis[i] !== undefined) {
            res += "<li class='list-group-item  mb-2'>" + todolis[i] + "<button class='btn btn-sm btn-danger float-end' onclick='deleteTodo(" + i + ")'>Delete</button><button class='btn btn-primary btn-sm mx-1 float-end' onclick='editTodo(" + i + ")'>Edit</button></li>";
        }
    }
    document.getElementById('res-todo').innerHTML = res;
}

const editTodo = (index) => {
    const newValue = prompt("Edit the to-do item:", todolis[index]);
    if (newValue !== null) {
        todolis[index] = newValue;
        printTodo(); // Refresh the displayed list after editing
    }
}

const deleteTodo = (index) => {
    if (window.todolis && window.todolis.length > index && index >= 0) {
        window.todolis.splice(index, 1);
        printTodo();
    }
}