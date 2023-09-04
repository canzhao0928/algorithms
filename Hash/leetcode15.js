// 15. 3Sum

//3 <= nums.length <= 3000, exceed the time limit using 3 for loops
// var threeSum = function (nums) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           output.push([nums[i], nums[j], nums[k]].sort());
//         }
//       }
//     }
//   }

//   let hash = {};
//   for (let i = 0; i < output.length; i++) {
//     if (!hash[output[i]]) {
//       hash[output[i]] = 1;
//     } else {
//       output.splice(i, 1, "");
//     }
//   }

//   output = output.filter((element) => element !== "");
//   return output;
// };

var threeSum = function (nums) {
  let output = [];
  const TARGET = 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > TARGET) break;
    if (i && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (right > left) {
      if (nums[left] + nums[right] + nums[i] === TARGET) {
        output.push([nums[left], nums[right], nums[i]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
        // console.log(left, right);
      } else if (nums[left] + nums[right] + nums[i] > TARGET) {
        right--;
      } else {
        left++;
      }
    }
  }
  return output;
};

const nums = [-2, -1, -1, 1, 1, 2, 2];
// threeSum(nums);
console.log(threeSum(nums));
