var topKFrequent = function (nums, k) {
  if (nums.length > 1) {
    const frequnece = {};

    for (let char of nums) {
      if (!frequnece[char]) {
        frequnece[char] = 1;
      } else {
        frequnece[char]++;
      }
    }
    return Object.entries(frequnece)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(([key, _]) => +key);
  } else {
    return nums;
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
