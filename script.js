const numberButtons = document.querySelectorAll(".digit");
const decimalButton = document.querySelector("#decimal");
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearAllButton = document.querySelector("#clear-all");

const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");

let btnPress = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";

let firstNumberFormatted;
let secondNumberFormatted;

let getSecondNumber = false;

let operand = "";

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
    if(operand ==="÷") divide(a,b);
}

let setNumber = (e) => {
    if(!getSecondNumber) {
    firstNumber += e.target.textContent;
    firstNumberFormatted = Number(firstNumber);
    console.log(firstNumberFormatted);
    }
    if(getSecondNumber) {
    secondNumber += e.target.textContent;
    secondNumberFormatted = Number(secondNumber);
    console.log(secondNumberFormatted);
    }
}

btnPress.forEach((e) => {
    e.addEventListener("click", function(event) {
        if(event.target.classList.contains("digit")) {
            setNumber(event);
        } 
        if(event.target.classList.contains("operation")) {
            getSecondNumber = true;
            operand = event.target.textContent;
        }
        if(event.target.id=="equals") {
            operate(firstNumberFormatted, secondNumberFormatted, operand);
        }
    })
})

