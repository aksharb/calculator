const numberButtons = document.querySelectorAll(".digit");
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearAllButton = document.querySelector("#clear-all");

const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");

function add(a,b) {
    console.log(a+b);
}
function subtract(a,b) {
    console.log(a-b);
}
function multiply(a,b) {
    console.log(a*b);
}
function divide(a,b) {
    console.log(a/b);
}

function operate(a,b, operand) {
    if(operand ==="+") add(a,b);
    if(operand ==="-") subtract(a,b);
    if(operand ==="*") multiply(a,b);
    if(operand ==="/") divide(a,b);
}