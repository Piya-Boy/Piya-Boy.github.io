
// Lab 4
function formatNumber(num) {
    return num.toFixed(2)
}
console.log(formatNumber(10))
// Lab 3    
function calculateProfit(sales) {
    return Math.floor(sales / 100)
}
console.log(calculateProfit(1000))

// Lab 7
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDice())

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(ucFirst('hello'))

function checkSpam(str) {
    return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('porn') || str.toLowerCase().includes('sex')? true : false
}
console.log(checkSpam('sex'))