// var longestConsecutive = function (nums) {
//   if (nums.length > 0) {
//     nums.sort((a, b) => a - b);
//     console.log(nums);

//     const newMap = new Map();

//     for (let char of nums) {
//       if (!newMap.has(char)) {
//         newMap.set(char);
//       }
//     }
//     const newMap2 = new Map();

//     let heighest = 1;
//     const temp = Array.from(newMap.keys());
//     for (let i = 0; i < temp.length; i++) {
//       if (temp[i] + 1 === temp[i + 1]) {
//         if (!newMap2.has(temp[i])) {
//           newMap2.set(temp[i]);
//         }
//         if (!newMap2.has(temp[i + 1])) {
//           newMap2.set(temp[i + 1]);
//         }
//       } else if (newMap2.size > heighest) {
//         console.log(newMap2);
//         heighest = newMap2.size - 1;
//         newMap2.clear();
//       } else {
//         newMap2.clear();
//       }
//     }
//     return heighest;
//   } else {
//     return 0;
//   }
// };

// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  console.log(nums.length, "nums.length");
  const newMap = new Set(nums);
  let longest = 0;
  console.log(newMap, "newMap");

  for (let char of newMap) {
    if (!newMap.has(char - 1)) {
      let currentNum = char;
      let count = 1;
      while (newMap.has(currentNum + 1)) {
        currentNum += 1;
        count += 1;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
