// Object
let person = {
    name: "John",
    age: 30,
    gender: "male",
    address: "123 Main St",
    phone: "555-555-5555"
}
console.log(person);

// Object Property
/*
ให้สร้าง object ชื่อ user
- เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
- เพิ่ม property ชื่อ sumname ให้มีค่าเท่ากับ Doe
- Update property name ให้มีค่าเป็น Matt
- ลบ property name
*/


// Property shorthand
/*
- ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
- ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ
ตามตัวแปรที่รับมา
*/

let username = "John"
let email = "XHbqo@example.com"
let password = "123456"

let user = {
    username,
    email,
    password
}
console.log(user);

// LAB-1 : isEmpty ?
/*
- ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
- ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง
*/
let obj = {
    name: "John",
    age: 30,
    gender: "male",
}
function isEmpty(obj) {
    return Object.keys(obj).length === 0 ? 'object is empty' : 'object is not empty'
}

console.log(isEmpty(obj))

// LAB - 2 : calSalary
/*
- ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
- ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function calSalary(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) || 0 
}

console.log(calSalary(salaries))

// LAB-3 : multiplyNumeric
/*
- ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
คูณเฉพาะ value ที่เป็น number เท่านั้น
*/
menu = {
    width: 600,
    height: 900,
    title: 'My menu'
};

function multiplyNumeric(menu, num) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= num
        }
    }
    return menu
}
console.log(multiplyNumeric(menu, 2))

// LAB-4 : the sentinel
/*
- ให้เขียนโปรแกรมที่รับค่ามาเป็น key และ value ของ Object หนึ่งไปเรื่อยๆ
- จนกว่าผู้ใช้จะพิมพ์คำว่า stop ถึงหยุด
- ให้นำค่าเหล่านั้นมาสร้าง Object
- จากนั้น log object นั้นออกมา
*/
let myObject = {}
function myLoop(key, value) {
 while (key !== 'stop') {
    myObject[key] = value
    key = prompt('Enter key: ')
    value = prompt('Enter value: ')
 }
 console.log(myObject)
}
myLoop()

// LAB-5 : fruits Basket
/*
- ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
- โดยให้ key เป็นชื่อของผลไม้
- value เป็นจำนวนของผลไม้ (number)
- โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
- ** ให้รับค่าผลไม้กับจำนวนผลไม้ไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์คำว่า stop [edit]
*/

let basket = {}

function fruitsBasket(key, value) {
    while (key !== 'stop') {
        if (value > 1) {
            key += 's'
        }
        basket[key] = value
        key = prompt('Enter key: ')
        value = prompt('Enter value: ')
    }
    console.log(basket)

}
fruitsBasket(prompt('Enter key: '), prompt('Enter value: '))

