function encode(strs) {
  return decode(strs.map((str) => str.length + "#" + str).join(""));
}

function decode(str) {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") j++;

    const len = parseInt(str.slice(i, j));

    const word = str.slice(j + 1, j + 1 + len);

    res.push(word);
    i = j + 1 + len;
  }
  return res;
}

console.log(encode(["neet", "code", "love", "you"]));
