// Declare and assign the variables below 
let spaceShuttleName = "Determination"
let mphShuttleSpeed = 17500
let kmDistanceToMars = 225000000
let kmDistanceToMoon = 384400
let milesPerKilometer = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination")
console.log(typeof 17500)
console.log(typeof 225000000)
console.log(typeof 384400)
console.log(typeof 0.621)

// Calculate a space mission below
let milesToMars = (kmDistanceToMars * milesPerKilometer)

// Print the results of the space mission calculations below

// Calculate a trip to the moon below
let hoursToMars = (milesToMars/mphShuttleSpeed)
let daysToMars = (hoursToMars/24)

let milesToMoon = (kmDistanceToMoon * milesPerKilometer)
let hoursToMoon = (milesToMoon/mphShuttleSpeed)
let daysToMoon = (hoursToMoon/24)

// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will take " + daysToMars + " days to reach Mars.")
console.log(spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon.")