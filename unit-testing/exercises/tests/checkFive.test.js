const checkFive = require('../checkFive.js');

describe("checkFive", function() {

    test("should return a message indicating that a number is less that 5 when true", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("should return a message indicating that a number is greater that 5 when true", function(){
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });

    test("should return a message indicating that a number is equal to 5 when true", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
});