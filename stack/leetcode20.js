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

//refactor
var isValid = function (s) {
  const array = s.split("");
  const list = [];
  if (array[0] === ")" || array[0] === "}" || array[0] === "]") {
    return false;
  } else {
    list.push(array[0]);
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] === ")" || array[i] === "}" || array[i] === "]") {
      const ele = list.pop();
      if (
        !(
          (ele === "(" && array[i] === ")") ||
          (ele === "{" && array[i] === "}") ||
          (ele === "[" && array[i] === "]")
        )
      )
        return false;
    } else {
      list.push(array[i]);
    }
  }

  if (!list.length) {
    return true;
  } else {
    return false;
  }
};

const s = "(([]){})";
console.log(isValid(s));
