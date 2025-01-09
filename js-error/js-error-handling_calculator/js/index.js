console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorMessage = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      b == 0 ? error : a / b
    } catch (error) {
      errorMessage.innerHTML = "Cannot divide by zero!"
    }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
