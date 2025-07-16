var isValidSudoku = function (board) {
  let seenMap = new Set();

  for (let i = 0; i < 9; i++) {
    let seenMap = new Set();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      if (seenMap.has(board[i][j])) return false;
      seenMap.add(board[i][j]);
    }
  }

  for (let i = 0; i < 9; i++) {
    let seenMap = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === ".") continue;
      if (seenMap.has(board[j][i])) return false;
      seenMap.add(board[j][i]);
    }
  }

  for (let i = 0; i < 9; i++) {
    let seenMap = new Set();
    for (let m = 0; m < 3; m++) {
      for (let n = 0; n < 3; n++) {
        let row = Math.floor(i / 3) * 3 + m;
        let col = Math.floor(i % 3) * 3 + n;

        if (board[row][col] === ".") continue;
        if (seenMap.has(board[row][col])) return false;
        seenMap.add(board[row][col]);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
