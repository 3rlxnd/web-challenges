console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/



// Method

const totalCost = ((mealCost, tip) => {
   let tipAmount = mealCost * tip / 100;
   let totalCost = tipAmount + mealCost;

   return parseFloat(totalCost.toFixed(2));
});

// Function

function totalCostFunction(mealCost, tip) {
   let tipAmount = mealCost * tip / 100;
   let totalCost = tipAmount + mealCost;

   return parseFloat(totalCost.toFixed(2));
};

// Menu

class Meal {
   constructor(name, price) {
      this.name = name;
      this.price = price;
      this.tip = price * tipPercent / 100;
      this.total = totalCost(price, tipPercent);
   }
}

let menu = [];
let tipPercent = 10;

menu.push(new Meal("Soup", 8.90));
menu.push(new Meal("Pasta", 15.90));
menu.push(new Meal("Lamb", 19.90));
menu.push(new Meal("Ragout", 13.90));
menu.push(new Meal("Teramisu", 5.90));
menu.push(new Meal("Red Wine", 7.90));
menu.push(new Meal("Water", 3.50));

console.table(menu)