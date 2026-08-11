let current = "";
let previous = "";
let operator = "";

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function appendNumber(number) {
    if (number === "." && current.includes(".")) {
        return;
    }

    current += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (current === "" && previous === "") {
        return;
    }

    if (current !== "" && previous !== "") {
        calculate();
    }

    operator = op;
    previous = current;
    current = "";

    updateDisplay();
}

function calculate() {
    if (previous === "" || current === "" || operator === "") {
        return;
    }

    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    let result;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;

        case "-":
            result = prev - curr;
            break;

        case "*":
            result = prev * curr;
            break;

        case "/":
            result = curr === 0 ? "Error" : prev / curr;
            break;

        case "%":
            result = prev % curr;
            break;
    }

    current = result.toString();
    previous = "";
    operator = "";

    updateDisplay();
}

function clearDisplay() {
    current = "";
    previous = "";
    operator = "";

    updateDisplay();
}

function deleteNumber() {
    current = current.slice(0, -1);

    updateDisplay();
}

function updateDisplay() {
    currentDisplay.textContent = current || "0";

    if (operator && previous) {
        previousDisplay.textContent = `${previous} ${operator}`;
    } else {
        previousDisplay.textContent = "";
    }
}

