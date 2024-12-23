console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');

darkButton.addEventListener("click", () => {
    bodyElement.classList.add("dark")
})

lightButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark")
})

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark")
})
