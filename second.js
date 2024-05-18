// Example usage in another file

const { processArray, formatArrayStrings } = require('./arrayManipulation');

const numbers = [1, 2, 3, 4, 5];
const strings = ["Hello", "World", "JavaScript", "is", "awesome"];

const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(processedNumbers);  // Output: [3, 4, 9, 16, 15]
console.log(formattedStrings);  // Output: ['hello', 'WORLD', 'javascript', 'IS', 'awesome']
