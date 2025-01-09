console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const element of programmingLanguages) {
  let item = document.createElement('li')
  item.textContent = element
  ol.append(item)
}
// --^-- write or modify code above this line --^--
