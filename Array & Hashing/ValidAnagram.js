// var twoSum = function (s, t) {
//   if (s.length === t.length) {
//     const newMap = new Map();

//     for (let i = 0; i < s.length; i++) {
//       newMap.set(s[i], (newMap.get(s[i]) || 0) + 1);
//     }

//     for (let char of t) {
//       if (!newMap.has(char) || newMap.get(t[char]) === 0) {
//         return false;
//       }
//       newMap.set(t[char], newMap.get(t[char]) - 1);
//     }

//     return true;
//   } else return false;
// };

// console.log(twoSum("aacc", "ccac"));
