console.clear();

let input = document.querySelector('[data-js="first-input"]')
let button = document.querySelector('[data-js="button-uppercase"]')

button.addEventListener("click", () => {
    input.value = input.value.toUpperCase()
})