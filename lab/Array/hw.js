// Lab 19
let user = {
    name: "John",
    years: 27,
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);

// Lab 21
let arr = [1, [2, [[[3, 4], 5], 6]]];

const [a, [b, [[c, d], e]], f] = arr;
console.log(a, b, c, d, e, f);

// Lab 24
const [, , , a, b] = [1, 2, 3];
console.log(a, b);

// Lab 28
const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
];
for (const { user, age = "unknown" } of users) {
    console.log(user, age);
}