/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *
 * @param {Recursion solution}
 * @param {Time Com: n2, Space Com: n}
 * @returns
 */

// function check(nums, position) {
//   if (nums.length > 1) {
//     if (position >= nums.length - 1) {
//       return false;
//     }
//     for (let i = position + 1; i < nums.length; i++) {
//       if (nums[position] === nums[i]) {
//         return true;
//       }
//     }
//     return check(nums, position + 1);
//   } else return false;
// }

// var containsDuplicate = function (nums) {
//   let position = 0;
//   return check(nums, position);
// };

// console.log(containsDuplicate([1, 2, 3, 1]));

/**
 *
 * @approach2 {Set} nums
 * @param {Time : n, Space: n} nums
 * @returns
 */

// var containsDuplicate = function (nums) {
//   let mySet = new Set(nums);

//   if (mySet.size === nums.length) {
//     return false;
//   } else {
//     return true;
//   }
// };

// console.log(containsDuplicate([1]));

/**
 *
 * @approach 3 {object} nums
 * @returns
 */
var containsDuplicate = function (nums) {
  let mySet = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (mySet[value]) {
      return true;
    } else {
      mySet[value] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1]));
