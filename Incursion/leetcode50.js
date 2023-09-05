// 50. Pow(x, n)
// //incursion
// var myPow = function(x, n) {
//   let pow=1;
//   let num=Math.abs(n)
//   while(num){
//       if (num===0) break
//       pow*=x
//       num--
//   }
//   if (n<0) {return 1/pow}
//   else { return pow}
// };
// //library
// var myPow = function(x, n) {
//   return Math.pow(x,n)
// };

// var myPow = function (x, n) {
//   const powFunc = (x, n) => {
//     if (n === 1) return x;
//     let num = n < 4 ? x : powFunc(x, Math.floor(n / 2));
//     return n % 2 === 1 ? num * num * x : num * num;
//   };
//   if (n === 0) return 1;
//   const pow = powFunc(x, Math.abs(n));
//   return n < 0 ? 1 / pow : pow;
// };

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / myPow(x, -n);
  } else if (n % 2) {
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, Math.floor(n / 2));
};
