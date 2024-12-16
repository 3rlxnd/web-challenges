// Change this value to test different "weather" conditions.
const weather = "rainy"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 

switch (weather) {
    case "snowy" || temperature <= 0:
        console.log("Freezing Snow!")
        break;
    case "rainy":
        console.log("It's raining, don't forget your umbrella!")
        break;
    case "sunny" || temperature <= 20:
        temperature >= 20 ? console.log("It's sunny, but a bit chilly!") : console.log("It's sunny")
        break;
    case "sunny" || temperature >= 20:
        temperature >= 20 ? console.log("It's sunny and warm!") : console.log("It's sunny")
        break;
    default:
        console.log("I'm not sure what the weather is like.")
        break;
}

