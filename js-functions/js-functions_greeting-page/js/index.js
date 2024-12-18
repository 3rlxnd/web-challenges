console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let time = new Date().getHours()

  if (time >= 6 && time < 13) {
    return "Good Morning";
  } else if (time >= 13 && time < 19) {
    return "Good Afternoon";
  } else if (time >= 19 && time < 22) {
    return "Good Evening";
  } else if (time >= 22 && time < 6) {
    return "Good Night";
  }
}

console.log(getGreeting());


function getDayColor() {
  let day = new Date().getDay()
  console.log(day)
  switch (day) {
    case day == 1:
      return "darkgrey"
      break;
    case day == 2 || 3 || 4 || 5:
      return "lightblue"
      break;
    case day == 6 :
      return "hotpink"
      break;
  
    default:
      break;
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
