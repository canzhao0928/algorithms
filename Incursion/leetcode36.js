// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let hashtable = {};
  //check column
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== ".") {
        if (hashtable[board[i][j]]) {
          return false;
        } else {
          hashtable[board[i][j]] = 1;
        }
      }
    }
    hashtable = {};
  }
  //check row
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== ".") {
        if (hashtable[board[i][j]]) {
          return false;
        } else {
          hashtable[board[i][j]] = 1;
        }
      }
    }
    hashtable = {};
  }
  //check square
  for (let i = 0; i < board.length; i = i + 3) {
    for (let j = 0; j < board[i].length; j = j + 3) {
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          // console.log(k,l)
          if (board[k][l] !== ".") {
            if (hashtable[board[k][l]]) {
              return false;
            } else {
              hashtable[board[k][l]] = 1;
            }
          }
        }
      }
      hashtable = {};
    }
  }

  return true;
};
