// Example usage

const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

const numbers = [1, 2, 3, 4, 5];
const strings = ["Hello", "World", "JavaScript", "is", "awesome"];

const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

const userProfiles = createUserProfiles(strings, formattedStrings);

console.log(userProfiles);
// Output:
// [
//     { originalName: 'Hello', modifiedName: 'hello', id: 1 },
//     { originalName: 'World', modifiedName: 'WORLD', id: 2 },
//     { originalName: 'JavaScript', modifiedName: 'javascript', id: 3 },
//     { originalName: 'is', modifiedName: 'IS', id: 4 },
//     { originalName: 'awesome', modifiedName: 'awesome', id: 5 }
// ]
