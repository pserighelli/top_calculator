let firstNum = null;
let secondNum = null;
let operator = null;
let operatorClicked = false; // flag to track operator clicks
const display = document.getElementById("display");
const btn = document.querySelectorAll("button");

function clickBtn() {
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            console.log(`the button clicked is ${btn[i].textContent}`)
            if (btn[i].className == "number") {
                display.textContent = display.textContent + btn[i].textContent;
            } if (btn[i].id == "plus" && !operatorClicked) {
                firstNum = parseFloat(display.textContent);
                operator = "+"
                display.textContent = "";
                operatorClicked = true; // prevents executing twice
            } if (btn[i].id == "minus" && !operatorClicked) {
                firstNum = parseFloat(display.textContent);
                operator = "-"
                display.textContent = "";
                operatorClicked = true;
            } if (btn[i].id == "multiply" && !operatorClicked) {
                firstNum = parseFloat(display.textContent);
                operator = "*"
                display.textContent = "";
                operatorClicked = true;
            } if (btn[i].id == "divide" && !operatorClicked) {
                firstNum = parseFloat(display.textContent);
                operator = "/"
                display.textContent = "";
                operatorClicked = true;
            } if (btn[i].id == "clear") {
                clearAll();
            } if (btn[i].id == "equal") {
                secondNum = parseFloat(display.textContent);
                console.log(`the first numerator is ${firstNum}, the second numerator is ${secondNum}, and the operator is ${operator}`)
                if (operator !== null && firstNum !== null && secondNum !== null) {
                    operate(firstNum, operator, secondNum);
                    operatorClicked = false;
                }
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
    operatorClicked = false;
}

function operate(firstNum, operator, secondNum) {
    if (operator == '/' && secondNum == 0) {
        display.textContent = "No can do";
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