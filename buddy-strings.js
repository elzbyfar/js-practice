// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Example 4:

// Input:
let A = "aaaaaaabc";
let B = "aaaaaaacb";

A = "abab";
B = "abab";
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false

// Constraints:

// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist only of lowercase letters.

const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;
  if (A.length === 0) return false;

  let sameLetter = {};
  let diffLetter = {};
  let matching = {};

  for (let i = 0; i < A.length; i++) {
    if (matching[A[i]]) {
      matching[A[i]] += 1;
    } else {
      matching[A[i]] = 1;
    }
    if (matching[B[i]]) {
      matching[B[i]] += 1;
    } else {
      matching[B[i]] = 1;
    }

    if (A[i] === B[i]) {
      if (sameLetter[A[i]]) {
        sameLetter[A[i]] += 1;
      } else {
        sameLetter[A[i]] = 1;
      }
    } else {
      if (diffLetter[A[i]]) {
        diffLetter[A[i]] += 1;
      } else {
        diffLetter[A[i]] = 1;
      }
    }
  }
  return sameLetter;
};

console.log(buddyStrings(A, B));
