import getRandomColor from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
import Square from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

const circle = Circle()
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});

const square = Square();
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = Pentagon();
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circle, square, pentagon);
