/*
Assignment 1:

Given a string s and a number x, print the shortest substrings which start and end with the same character and have lengths greater than or equal to x. If multiple substrings exist with the same shortest length, print them all.

Eg:

s: abccdbacca  
x: 3		Answer: acca
x: 4		Answer: acca
x: 5		Answer: bccdb cdbac
x: 6 		Answer:  abccdba
x: 7		Answer: abccdba
x: 8		Answer: not-found

*/


function printShortestSubstrings(inputString, targetLength) {
    const charIndexMap = {};
    const resultArray = [];
    let currentShortestString = Infinity;
  
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
  
      if (charIndexMap[currentChar] !== undefined) {
        const currentIndex = i;
        const indexFromMap = charIndexMap[currentChar];
        const difference = currentIndex - indexFromMap;
  
        if (difference + 1 >= targetLength) {
          const currentSubstring = inputString.substring(
            indexFromMap,
            currentIndex + 1,
          );
  
          if (currentSubstring.length < currentShortestString) {
            resultArray.length = 0;
            resultArray.push(currentSubstring);
            currentShortestString = currentSubstring.length;
          } else if (currentSubstring.length === currentShortestString) {
            resultArray.push(currentSubstring);
          }
        }
  
        charIndexMap[currentChar] = i;
      } else {
        charIndexMap[currentChar] = i;
      }
    }
  
    return resultArray.length === 0 ? "not found" : resultArray.join(" ");
  }
  
  const inputString = "abccdbacca ";
  const targetLengths = [3, 4, 5, 6, 7, 8];
  
  for (const targetLength of targetLengths) {
    console.log(printShortestSubstrings(inputString, targetLength), targetLength);
  }
  