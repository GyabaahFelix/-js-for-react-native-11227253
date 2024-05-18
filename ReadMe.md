# JS for React Native

## Student ID: 11227253

### Task 1: processArray Function
- **File:** `arrayManipulation.js`
- **Description:** 
  - Created the `processArray` function that takes an array of numbers as input.
  - The function returns a new array where each even number is squared and each odd number is tripled.

### Task 2: formatArrayStrings Function
- **File:** `arrayManipulation.js`
- **Description:**
  - Added the `formatArrayStrings` function which takes two arrays as arguments: an array of strings and an array of numbers processed by `processArray`.
  - This function modifies each string based on its corresponding number: capitalizes the string if the number is even, and converts the string to lowercase if the number is odd.

### Task 3: createUserProfiles Function
- **File:** `userInfo.js`
- **Description:**
  - Created the `createUserProfiles` function that takes an array of names and an array of modified names from Task 2.
  - The function returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).

## Instructions
1. Create a GitHub repository named `js-for-react-native-[Your Student ID]`.
2. Clone the repository to your local machine.
3. Add the files and commit each task separately.
4. Create a `.gitignore` file and add `node_modules/` to it.
5. Push the commits to the GitHub repository.
6. Compress the folder excluding `node_modules` and submit it as instructed.

## How to Use
1. Clone the repository.
2. Use `require` to import functions from `arrayManipulation.js` and `userInfo.js`.
3. Call the functions as needed.

### Example Usage

```javascript
// Import functions
const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

// Sample data
const numbers = [1, 2, 3, 4, 5];
const strings = ["Hello", "World", "JavaScript", "is", "awesome"];

// Process numbers and format strings
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

// Create user profiles
const userProfiles = createUserProfiles(strings, formattedStrings);

// Output user profiles
console.log(userProfiles);
// Output:
// [
//     { originalName: 'Hello', modifiedName: 'hello', id: 1 },
//     { originalName: 'World', modifiedName: 'WORLD', id: 2 },
//     { originalName: 'JavaScript', modifiedName: 'javascript', id: 3 },
//     { originalName: 'is', modifiedName: 'IS', id: 4 },
//     { originalName: 'awesome', modifiedName: 'awesome', id: 5 }
// ]
