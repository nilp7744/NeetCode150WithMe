// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "accc";
let t = "ccac";
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    let frequnece = {};

    for (let char of s) {
      if (!frequnece[char]) {
        frequnece[char] = 1;
      } else {
        frequnece[char]++;
      }
    }

    for (let char of t) {
      if (!frequnece[char]) {
        return false;
      } else {
        frequnece[char]--;
      }
    }

    return true;
  } else {
    return false;
  }
};

console.log(isAnagram(s, t));

// Hash Solution
// if (s.length === t.length) {
//   const newMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     newMap.set(s[i], (newMap.get(s[i]) || 0) + 1);
//   }

//   for (let char of t) {
//     if (!newMap.has(char) || newMap.get(t[char]) === 0) {
//       return false;
//     }
//     newMap.set(t[char], newMap.get(t[char]) - 1);
//   }

//   return true;
// } else return false;
