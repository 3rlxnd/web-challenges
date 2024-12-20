console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  let newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message")
  newMessage.textContent = "New Toasted Message"
  toastContainer.append(newMessage)
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = ""
});
