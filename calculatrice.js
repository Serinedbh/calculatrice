let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function calculateResult() {
  if (currentInput === "" || previousInput === "") return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Erreur: Division par zéro");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
