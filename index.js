"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    var isValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        var firstn = parseInt(firstStr);
        var secondn = parseInt(secondStr);
        var result = calculate(firstn, operator, secondn);
        console.log(result);
    }
    else {
        console.log('\nInvalid Input\n');
        main();
    }
}
function calculate(firstn, operator, secondn) {
    switch (operator) {
        case '+':
            return firstn + secondn;
        case '-':
            return firstn - secondn;
        case '*':
            return firstn * secondn;
        case '/':
            return firstn / secondn;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isnum = !isNaN(maybeNum);
    return isnum;
}
main();
