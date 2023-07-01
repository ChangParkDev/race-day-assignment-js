let raceNumber = Math.floor(Math.random() * 1000); //Genereate a random race number

const registeredEarly = false; //Set a variable for registration status (change as needed)

const age = 19; //Set a variable for runner's age (change as needed)

// Check if the runner is an adult and registered early
if (age >= 18 && registeredEarly) {
    raceNumber += 1000;
}

// Determine race time for runners over 18 who registered early
if (age > 18 && registeredEarly) {
    console.log("Your race starts at 9:30 am. Race number: " + raceNumber);
}
// Determine race time for late adults
else if (age > 18 && !registeredEarly) {
    console.log("Your race starts at 11:00 am. Race number: " + raceNumber);
}
// Determine race time for youth registrants
else if (age < 18) {
    console.log("Your race starts at 12:30 pm. Race number: " + raceNumber);
}
// Handle runners exactly 18 years old
else {
    console.log("Please see the registration desk. Race number: " + raceNumber);
}