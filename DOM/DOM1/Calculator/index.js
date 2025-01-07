const add = (num1, num2) => {
    return num1 + num2;
}

const sub = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}

const Calculator = (num1, num2, operator) => {
    return operator(num1, num2)
}

console.log(Calculator(10,3,add))
console.log(Calculator(10,3,sub))
console.log(Calculator(10,3,multiply))
console.log(Calculator(10,3,divide))