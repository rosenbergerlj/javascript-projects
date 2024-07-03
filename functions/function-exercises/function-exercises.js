function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line = line + '#';
    }
    return line;
}
//console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n')
    }
    return square.slice(0, -1);
}
//console.log(makeSquare(5));

function makeRectanlge(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
//console.log(makeRectanlge(5,3));

function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeLine(i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces,numChars) {
    let spaces = ' '.repeat(numSpaces);
    let chars = makeLine(numChars);
    return spaces + chars + spaces;
}
//console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
    let isoTri = '';
    for (let i = 0; i < height; i++) {
        isoTri += (makeSpaceLine(height - i - 1, 2 * i +1) + '\n');
    }
    return isoTri.slice(0, -1);
}
//console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond = (makeIsoscelesTriangle(height)) + '\n' + (makeIsoscelesTriangle(height).split('').reverse().join(''));
    }
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));