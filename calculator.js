let firstNum = null;
let secondNum = null;
let operator = null;
const display = document.getElementById("display");
const btn = document.querySelectorAll("button");

function clickBtn() {
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            console.log(`the button clicked is ${btn[i].textContent}`)
            if (btn[i].className == "number") {
                display.textContent = display.textContent + btn[i].textContent;
            } if (btn[i].id == "plus") {
                firstNum = parseFloat(display.textContent);
                operator = "+"
                display.textContent = "";
            } if (btn[i].id == "minus") {
                firstNum = parseFloat(display.textContent);
                operator = "-"
                display.textContent = "";
            } if (btn[i].id == "multiply") {
                firstNum = parseFloat(display.textContent);
                operator = "*"
                display.textContent = "";
            } if (btn[i].id == "divide") {
                firstNum = parseFloat(display.textContent);
                operator = "/"
                display.textContent = "";
            } if (btn[i].id == "clear") {
                clearAll();
            } if (btn[i].id == "equal") {
                secondNum = parseFloat(display.textContent);
                console.log(`the first numerator is ${firstNum}, the second numerator is ${secondNum}, and the operator is ${operator}`)
                operate(firstNum, operator, secondNum);
            }
        });
    }
}

clickBtn();

function clearAll() {
    display.textContent = "";
    firstNum = null;
    secondNum = null;
    operator = null;
}

function operate(firstNum, operator, secondNum) {
    if (operator = "/" && secondNum == 0) {
        display.textContent == "No can do";
    } else if (operator == '+') {
        display.textContent = (firstNum + secondNum);
    } else if (operator == '-') {
        display.textContent = (firstNum - secondNum);
    } else if (operator == '*') {
        display.textContent = (firstNum * secondNum);
    } else if (operator == '/') {
        display.textContent = (firstNum / secondNum);
    } else {
        display.textContent = "Error!";
    }
};