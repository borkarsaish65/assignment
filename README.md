# Assignment Solutions

## Assignment 1:

### Problem Statement:
Given a string `s` and a number `x`, print the shortest substrings which start and end with the same character and have lengths greater than or equal to `x`. If multiple substrings exist with the same shortest length, print them all.

### Example:
Eg:

s: abccdbacca  
	x: 3		Answer: acca
x: 4		Answer: acca
x: 5		Answer: bccdb cdbac
x: 6 		Answer:  abccdba
x: 7		Answer: abccdba
x: 8		Answer: not-found

### Solution:
[Assignment 1 Solution on Repl.it](https://replit.com/@SaishBorkar/HighlevelUnwrittenUsers#index.js)

## Assignment 2:

### Problem Statement:
Given a string `s`, find the ASCII value of each character iteratively. If the ASCII value is even, increment the next character by `(ASCII_value % 7)`. If the ASCII value is odd, decrement the previous character by `(ASCII_value % 5)`. Output the newly formed string.

**Note:**
- If a character has already been changed once, do not change that character again.
- If the new number is an invalid ASCII value, replace it with 83.

### Example:

- **Input:**
s: sHQen}
**Output:** sESekS

### Solution:
[Assignment 2 Solution on Repl.it](https://replit.com/@SaishBorkar/GratefulNaiveSoftwareengineer#index.js)

Feel free to explore the provided Repl.it links for direct access to the solutions.
