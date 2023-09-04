// var isValid = function (s) {
//   const array = s.split("");
//   const list = [array[0]];
//   for (let i = 1; i < array.length; i++) {
//     let element = list.pop();
//     console.log(list);
//     console.log(i);
//     if (
//       (element === "(" && array[i] === ")") ||
//       (element === "{" && array[i] === "}") ||
//       (element === "[" && array[i] === "]")
//     ) {
//       if (i + 1 < array.length && list.length === 0) {
//         list.push(array[i + 1]);
//         i++;
//       }
//     } else {
//       // console.log("false");
//       list.push(element);
//       list.push(array[i]);
//     }
//   }

//   if (!list.length) {
//     return true;
//   } else {
//     return false;
//   }
// };

//refactor and map
// var isValid = function (s) {
//   const array = s.split("");
//   const list = [];
//   const map = { ")": "(", "}": "{", "]": "[" };
//   for (let i = 0; i < array.length; i++) {
//     if (map[array[i]] === undefined) list.push(array[i]);
//     else if (list.length === 0 || map[array[i]] !== list.pop()) {
//       return false;
//     }
//   }

//   return list.length === 0;
// };

//string op
var isValid = function (s) {
  let length;
  do {
    length = s.length;
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  } while (length != s.length);

  return s.length === 0;
};

const s = "(([]){})";
console.log(isValid(s));
