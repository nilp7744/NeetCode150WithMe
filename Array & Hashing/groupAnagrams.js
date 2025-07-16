// var groupAnagrams = function (strs) {
//   const visited = new Array(strs.length).fill(false);
//   const final = [];

//   for (let i = 0; i < strs.length; i++) {
//     if (visited[i]) continue;

//     const group = [strs[i]];
//     visited[i] = true;

//     for (let j = i + 1; j < strs.length; j++) {
//       if (!visited[j] && isAnagram(strs[i], strs[j])) {
//         group.push(strs[j]);
//         visited[j] = true;
//       }
//     }
//     group.sort();
//     final.push(group);
//   }

//   return final;
// };

// function isAnagram(a, b) {
//   if (a.length !== b.length) return false;
//   const newMap = new Map();

//   for (let char of a) {
//     newMap.set(char, (newMap.get(char) || 0) + 1);
//   }

//   for (let char of b) {
//     if (!newMap.has(char) || newMap.get(char) === 0) {
//       return false;
//     }
//     newMap.set(char, newMap.get(char) - 1);
//   }
//   return true;
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var groupAnagrams = function (strs) {
  let newMap = new Map();

  for (let char of strs) {
    const key = char.split("").sort().join("");

    if (!newMap.has(key)) {
      newMap.set(key, []);
    }
    newMap.get(key).push(char);
  }
  return Array.from(newMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
