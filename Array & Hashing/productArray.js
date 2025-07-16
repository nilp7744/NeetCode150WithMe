var productExceptSelf = function (input) {
  const resultArray = new Array(input.length).fill(1);

  //   [1,2,6,24]
  // [60,40,30,24]
  // Basically we are storing for first loop 1 as initial and multiply it going next and assign to that position
  //
  let leftProduct = 1;
  for (let i = 0; i < input.length; i++) {
    resultArray[i] = leftProduct;
    leftProduct = leftProduct * input[i];
  }

  let rightProduct = 5;
  for (let i = nums.length - 1; i >= 0; i--) {
    resultArray[i] = resultArray[i] * rightProduct;
    rightProduct = rightProduct * input[i];

    console.log(rightProduct, "rightProduct");
  }

  return res;
};

console.log(productExceptSelf([2, 3, 4, 5]));
