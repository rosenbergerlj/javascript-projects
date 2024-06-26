//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuel = ""
let astronautCount = ""
let altitudeReached = ""




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (startingFuel <= 5000 || startingFuel >= 30000 || isNaN(startingFuel)) {
  startingFuel = input.question("Please input the starting fuel level: ");
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (astronautCount < 1 || astronautCount > 7 || isNaN(astronautCount)) {
    astronautCount = input.question("Please input the number of astronauts onboard: ");
  } 
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while((startingFuel - (100 * astronautCount)) >= 0) {
altitudeReached = altitudeReached + 50;
startingFuel = startingFuel - (100 * astronautCount);
}
console.log(startingFuel);


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let proclaim = (`The shuttle gained an altitude of ${altitudeReached} km.`);
  if(altitudeReached >= 2000) {
    proclaim = proclaim + "Orbit achieved!"
   } else {"Failed to reach orbit."
  }
  console.log(proclaim);