/*
    multi
    line
    comment
*/
// Code output: \n = newline, \r = carriage return, \t = tab, \b = backspace, \f = form feed
// Data Types: Undefined, Null, Boolean, String, Symbol, Number and Object
// Variables are case sensitive, must declare before assignment
// == converts data type first, string '30' = 30
// === compares data types too
// Primative vs objects
// Async, callbacks, promises, await
// Error Handling
// Try Catch
// ES6, Destructuring, spread operator, array methods, arrow functions


var firstName  = 'Thomas'; // Var be used anywhere
let middleName = 'James'; // Let can only be used in the current scope
const lastName = 'Parfitt'; // Const cannot be redefined

var myString = "I am a \"String\" Inside a string";
var ourString = 'I am a "String" Inside a string';
var yourString = `I am a "String" Inside a 'string' wow`;

var bigString = myString + ourString; // Concatenation
bigString += yourString;

stringLength   = bigString.lenth;
sixthCharacter = bigString[5];
lastCharacter  = bigString[bigString.length - 1]

var a; // Declaring variable, null value
var b = 1 // Declaring and assigning variable
b++; // Increment
b--; // Decrement
b += 1;
b -= 1;
b *= 5;
b /= 5;

var ourArray = ['first value', 'second value'];
ourArray[1] = 'New second value';
var removedFromArray = ourArray.pop() // removed last from array
var removedFromArray = ourArray.shift() // removes first from array

var nestedArray = [
    ['herro', 'init'],
    ['banter', 'yues']
];
var tester = nestedArray[0][1];
nestedArray.unshift(['Banana', 'Pear']) // adds to front of array
nestedArray.push(['pasta', 'chicken']) // adds to send of array

function fullName(firstName, lastName) {
    fullName = firstName + ' ' + lastName;
    return fullName;
};

fullName = fullName('John', 'Doe');

function checkName(fullName) {
    if (fullName == 'John Doe') {
        return true;
    } else {
        return false;
    }
}
result = checkName(fullName);

var test = 2;

switch (test) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    default:
        console.log(0)
}

var ourDog = {
        'firstName': 'Jipper',
        'full name': 'Jipper Smith',
        'Legs': 4,
        'misc': ['jerro', 'herro']
};

var dogFirstName = ourDog.firstName;
var dogFullName = ourDog['full name']; // If key has space, you have to use bracket notation


for (var i = 0; i < ourArray.length; i++) {
    ourArray[i]
}
