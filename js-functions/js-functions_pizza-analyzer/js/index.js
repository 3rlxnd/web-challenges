console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
    let pizzaSize1 = pizzaInput1.value;
    let pizzaSize2 = pizzaInput2.value;
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updatePizzaDisplay(pizza1, pizzaInput1.value);
    updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
    let pizzaSize1 = pizzaInput1.value;
    let pizzaSize2 = pizzaInput2.value;
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updatePizzaDisplay(pizza2, pizzaInput2.value);
    updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
const calculatePizzaGain = (diameter1, diameter2) => {
    let area1 = Math.PI * (diameter1 / 2) ** 2;
    let area2 = Math.PI * (diameter2 / 2) ** 2;
    let gain = (area2 - area1) / area1 * 100;
    output.textContent = Math.round(gain);
}
// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
    let displaySize = newSize / 24 * 100;
    pizzaElement.style.width = displaySize + 'px';
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
    if (size2 > size1) {
        outputSection.style.background = "var(--green)"
    } else {
        outputSection.style.background = "var(--red)"
    }
}
