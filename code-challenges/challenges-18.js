'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
        // Split the sentence into an array of words
        const words = str.split(" ");
      
        // Find the index of the middle word
        const middleIndex = Math.floor(words.length / 2);
      
        // Get the middle word
        const middleWord = words[middleIndex];
      
        // Return the length of the middle word
        return middleWord.length;
      
      
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
        // Remove all non-letter characters and convert to lowercase
        str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
        str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
      
        // Sort the letters in each string
        const sortedStr1 = str1.split("").sort().join("");
        const sortedStr2 = str2.split("").sort().join("");
      
        // Check if the sorted strings are equal
        return sortedStr1 === sortedStr2;
      
      
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    
        let left = 0;
        let right = arr.length - 1;
      
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
      
          if (arr[mid] === int) {
            return mid;
          } else if (arr[mid] < int) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
      
        // If the number was not found, return where it could have been
        return left;
      
      
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };