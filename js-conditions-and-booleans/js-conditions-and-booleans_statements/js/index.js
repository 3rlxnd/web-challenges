console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

receivedPassword == SUPER_SECRET_PASSWORD ? console.log("Access denied!") : console.log("Welcome! You are logged in as Brunhilde1984.");

// Part 2: Even / Odd
const number = 6;

number % 2 ? console.log("Odd Number") : console.log("Even Number");

// Part 3: Hotdogs
const numberOfHotdogs = 3000;
let price;
if (numberOfHotdogs < 6) {
    price = 2;
} else if (numberOfHotdogs < 100){
    price = 1.5;
} else if (numberOfHotdogs < 1000000){
    price = 0.1;
}

console.log(price)

// Part 4: Daytime
const currentHour = 12;

let statement = "";

currentHour < 17 ? statement = "Still need to learn..." : console.log("Partytime!!!")

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName ? userName : "Coach") + "!";

console.log(greeting);
