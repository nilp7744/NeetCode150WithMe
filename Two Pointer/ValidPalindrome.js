// var isPalindrome = function (s) {
//   const result = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reverse = [];
//   for (let i = result.length - 1; i >= 0; i--) {
//     reverse.push(result[i]);
//   }
//   console.log(result, reverse.join(""));
//   return result === reverse.join("");
// };

// console.log(isPalindrome("0P"));

var isPalindrome = function (s) {
  const result = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = [];
  for (let i = result.length - 1; i >= 0; i--) {
    reverse.push(result[i]);
  }
  console.log(result, reverse.join(""));
  return result === reverse.join("");
};

console.log(isPalindrome("0P"));
