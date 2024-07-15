const whoWon = require('../RPS.js');

describe("whoWon", function() {
    
        test("should return 'TIE!' if both players choose the same thing", function() {
            let output = whoWon('rock','rock');
            expect(output).toBe('TIE!');
        });

        test("should return 'Player 2 wins!' if player1 is 'rock' and player2 is 'paper'", function(){
            let output = whoWon('rock','paper');
            expect(output).toBe('Player 2 wins!');
        });
    
        test("should return 'Player 2 wins!' if player1 is 'paper' and player2 is 'scissors'", function(){
            let output = whoWon('paper','scissors');
            expect(output).toBe('Player 2 wins!');
        });
    
        test("should return 'Player 2 wins!' if player1 is 'scissors' and player2 is 'rock'", function(){
            let output = whoWon('scissors','rock');
            expect(output).toBe('Player 2 wins!');
        });
    
        test("should return 'Player 1 wins!' if player1 is 'rock' and player2 is 'scissors'", function(){
            let output = whoWon('rock','scissors');
            expect(output).toBe('Player 1 wins!');
        });
    
        test("should return 'Player 1 wins!' if player1 is 'paper' and player2 is 'rock'", function(){
            let output = whoWon('paper','rock');
            expect(output).toBe('Player 1 wins!');
        });
    
        test("should return 'Player 1 wins!' if player1 is 'scissors' and player2 is 'paper'", function(){
            let output = whoWon('scissors','paper');
            expect(output).toBe('Player 1 wins!');
        });
    });