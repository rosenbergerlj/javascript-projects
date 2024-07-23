//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
         this.scores.push(newScore);
    }
    cheater() {
        this.scores.push(100);
    }
    average() {
        let sum = 0;
        for (let i =0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return (sum/this.scores.length).toFixed(1);
    }
    status() {
        if (this.average() >= 90) {
            return "Accepted";
        } else if (this.average() >= 80 && this.average() <= 89) {
            return "Reserve";
        } else if (this.average() >= 70 && this.average() <= 79) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let bear = new CrewCandidate('Bubba Bear', '135kg', [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', '1.5kg', [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', '225kg', [75, 78, 62]);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bear.addScore(83);
//console.log(bear);
console.log(bear.average());
console.log(maltese.average());
console.log(gator.average());
console.log(bear.status());
console.log(maltese.status());
console.log(gator.status());

while((gator.status() === 'Probationary' || gator.status() === 'Reserve')) {
    gator.cheater();
}

function display(candidate) {
    console.log(`${candidate.name} earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`);
}
display(bear);
display(maltese);
display(gator);
console.log(gator.scores);
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
