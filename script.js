function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    if(operator === "+") add(a,b);
    if(operator === "-") subtract(a,b);
    if(operator === "*") multiply(a,b);
    if(operator === "/") divide(a,b);
}

let expression = "";
let screen = document.querySelector(".inputNumbers");
const onMouseClick = (e) => {
    expression += e.target.textContent;
    screen.value = expression;
    console.log(expression);
}
let digit = document.querySelectorAll(".digit").forEach((e) => {
    e.addEventListener("click", onMouseClick);
})

let sign = document.querySelectorAll(".operation").forEach((e) => {
    e.addEventListener("click", onMouseClick);
});
