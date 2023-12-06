// Lab 8
function circleLength(radius) {
    return 2 * Math.PI * radius;
}
console.log(circleLength(5));

// LAB - 2 : Accumulator
function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function () {
        var input = parseFloat(prompt("Enter a number: "), 0);
        if (!isNaN(input)) {
            this.currentValue += input;
        } else {
            alert("โปรดป้อนค่าที่ถูกต้อง");
        }
    };
    this.show = function () {
        alert("Current value: " + this.currentValue);
    };
}

var accumulator = new Accumulator(5); // สร้าง Object Accumulator โดยกำหนด startingValue เป็น 5
accumulator.show();
accumulator.read();
accumulator.show();


// Lab 5
function truncate(str, Length) {
   return str.length > Length ? str.slice(0, Length) + "..." : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

// Lab 9
function diagonalLength(x1, y1, x2, y2, x3, y3, x4, y4) {
    // คำนวณความยาวด้วยสูตรระยะห่างระหว่างจุด
    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    // คำนวณความยาวของเส้นทแยงมุม
    const diagonal1 = distance(x1, y1, x3, y3);
    const diagonal2 = distance(x2, y2, x4, y4);

    // คืนค่าความยาวเส้นทแยงมุม
    return Math.sqrt(Math.pow(diagonal1, 2) + Math.pow(diagonal2, 2));
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
const length = diagonalLength(0, 0, 3, 4, 7, 0, 4, 3);
console.log("ความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า: " + length);
