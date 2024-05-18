// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num ** 2;  // Square the even numbers
        } else {
            return num * 3;   // Triple the odd numbers
        }
    });
}

// Export the function to use it in other modules
module.exports = { processArray };

// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize the string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}

// Export the functions to use them in other modules
module.exports = { processArray, formatArrayStrings };
