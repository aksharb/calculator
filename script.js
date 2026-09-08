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
let getFirstNumber = false;
let getSecondNumber = false;
let previous;
let current;
let operator = "";

function add(a,b) {
    return a+b;
    console.log(a+b);
}
function subtract(a,b) {
    return a - b;
    console.log(a-b);
}
function multiply(a,b) {
    return a * b;
    console.log(a*b);
}
function divide(a,b) {
    if(b === 0) {
         return "Can't divide by 0!";
    } else {
        return a / b;
        console.log(a/b);
    }
}

function operate(a,b, operator) {
    if(operator ==="+") return(add(a,b));
    if(operator ==="-") return(subtract(a,b));
    if(operator ==="*") return(multiply(a,b));
    if(operator ==="÷") return(divide(a,b));
}

let setNumber = (e) => {
    if(!getSecondNumber) {
    firstNumber += e.target.textContent;
    firstNumberFormatted = Number(firstNumber);
    console.log(firstNumberFormatted);
    currentOperandTextElement.textContent = firstNumberFormatted;
    getFirstNumber = true;
    }
    if(getSecondNumber && getFirstNumber) {
    secondNumber += e.target.textContent;
    secondNumberFormatted = Number(secondNumber);
    previousOperandTextElement.textContent = firstNumberFormatted;
    currentOperandTextElement.textContent = secondNumber;
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
            operator = event.target.textContent;
            previous = firstNumberFormatted;
            current = secondNumberFormatted;
            previousOperandTextElement.textContent = currentOperandTextElement.textContent;
            currentOperandTextElement.textContent = operator;
        }
        if(event.target.id=="equals") {
            if(!getFirstNumber) {
                window.alert("Please enter a number first");  
            } else {
                previousOperandTextElement.textContent = previousOperandTextElement.textContent + operator + currentOperandTextElement.textContent + "=";
                currentOperandTextElement.textContent = operate(firstNumberFormatted, secondNumberFormatted, operator);
            }
        }
        if(event.target.id=="clear-all") {
            currentOperandTextElement.textContent = "";
            previousOperandTextElement.textContent = "";
            firstNumber = "";
            secondNumber = "";
            firstNumberFormatted = 0;
            secondNumberFormatted = 0;
            operator = "";
            getSecondNumber = false;
            getFirstNumber = false;
        }
    })
})

