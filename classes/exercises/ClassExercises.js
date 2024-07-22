// Define your Book class here:
class Book {
    constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.title = author;
        this.copyright = copyright;
        this.isbn = isbn,
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkedOut(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut,discarded);
    }
    thrownOut() {
        let currentYear = 2024
        if (currentYear - this.copyright > 5) {
            this.discarded = 'yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    thrownOut() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');

let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No'); 

// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.thrownOut();
prideAndPrejudice.checkedOut(5);
prideAndPrejudice.thrownOut()

console.log(prideAndPrejudice);
