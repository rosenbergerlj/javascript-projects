let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function() {return Math.round(Math.random() * 10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function() {return Math.round(Math.random() * 10)}
};

let chimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function() {return Math.round(Math.random() * 10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function() {return Math.round(Math.random() * 10)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function() {return Math.round(Math.random() * 10)}
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander.astronautID = 2;
chimp["astronautID"] = 3;
dog.astronautID = 4;
waterBear["astronautID"] = 5;

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, chimp, dog, waterBear];

// Print out the relevant information about each animal.
function crewReports(crewAnimal) {
   console.log(`${crewAnimal.name} is a ${crewAnimal.species}. They are ${crewAnimal.age} years old and ${crewAnimal.mass} kilograms. Their ID is ${crewAnimal.astronautID}.`)
   return crewAnimal;
}
console.log(crewReports(waterBear));

// Start an animal race!
function fitnessTest(arr) {
   let results = [];
   let steps = 0;
   let turns = 0;
   for (let i = 0; i < arr.length; i++) {
      if (steps < 20) {
         steps = steps + arr[i].move();
         turns++;
      }
   results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
return results;
}
console.log(fitnessTest(crew));