// Lab 1
const array = [29, 17, 13, 47, 23, 31];

let sum = 0;

array.forEach((element) => {
    sum += element;
})

// console.log(sum);

// Lab 2
const names = ['Mike', 'Sid', 'Jack', 'Bill'];
names.forEach((element, index) => {
    // console.log(`${index + 1}. ${element}`);
})

// Lab 3

const arr = [2, 3, 5, 7, 11];

const squareArr = (arr) => {
    return arr.map((element) => {
        return element * element;
    })
}

// console.log(squareArr(arr));

// Lab 2 **
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

const findIndex = (alphabets) => {
    return alphabets.indexOf('a');
}

console.log(findIndex(alphabets));


// Lab 3
const person = ['John', 'Jay', 'Jim', 'Jame'];

person.splice(1, 1, 'Jack', 'Joe');

console.log(person);

// Lab 5
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }]

const findCherries = (inventory) => {
    return inventory.find((element) => {
        return element.name === 'cherries';
    })
}
console.log(findCherries(inventory));

// Lab 9(cont.)
const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];

const filterArray = (array) => {
    return array.filter((element) => {
        return element.startsWith('E') || element.startsWith('e');
    })
}

console.log(filterArray(array1));

const filterArray2 = (array) => {
    return array.filter((element) => {
        return element.toUpperCase();
    })
}

console.log(filterArray2(array2));

const filterArray3 = (array) => {
    return array.filter((element) => {
        return element.includes('buri');
    })
}

console.log(filterArray3(array3));

// Lab 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 138
}

const sumSalaries = (salaries) => {
    let sum = 0;
    Object.values(salaries).forEach((element) => {
        sum += element;
    })
    return sum;
}

console.log(sumSalaries(salaries));

// Lab 1(cont.)
const arrays = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
];

const result = arrays.map((element) => {
    return element.name;
})
console.log(result);

// Lab 5
const arrs = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
];

const sortByAge = (arrs) => {
    return arrs.sort((a, b) => {
        return a.age - b.age;
    })
}

console.log(sortByAge(arrs));

// Lab 6
let str = '31 45 12 67 34 86 23 37 19 41'
const sumStr = (str) => {
    let sum = 0;
    str.split(' ').forEach((element) => {
        if (Number(element) < 40) {
            sum += Number(element);
        }
    })
    return sum;
}

console.log(sumStr(str));

// Lab 1

class Calculator {
    constructor(value) {
        this.value = value;
    } 

    add(value) {
        this.value += value;
    }

    subtract(value) {
        this.value -= value;    
    }

    multiply(value) {
        this.value *= value;
    }

    divide(value) {
        this.value /= value;
    }

    show() {
         console.log(this.value);
    }
}

const calc = new Calculator(10);

calc.add(5);
calc.subtract(5);
calc.multiply(5);
calc.divide(5);
calc.show();

// Lab 1
const multiply = (...nums) => {
    let result = 1;
    nums.forEach((num) => {
        result *= num;
    })
    return result;
}

console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Lab 2
const filterOutOdds = (...nums) => {
    return nums.filter((num) => {
        return num % 2 === 0
    });
}
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Lab 4

const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const nums = [...nums1, ...nums2, 5, -6, -1];
console.log(nums);

// Lab 6
function profile(name, job, ...skills) {
    return {
        name: name,
        job: job,
        skills: skills
    }
}
console.log(profile('John', 'Programmer', 'HTML', 'CSS', 'JS', 'React'));

// Lab 10
function cloneObject(obj) {
    return Object.assign({}, obj);
}

console.log(cloneObject({ name: 'John', age: 30 }));