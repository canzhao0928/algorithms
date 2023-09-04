var fourSum = function (nums, target) {
  let output = [];
  //sort the nums
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > Math.abs(target)) break;
    if (nums[i] === nums[i - 1] && i) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[i] + nums[j] > Math.abs(target)) break;
      if (nums[j] === nums[j - 1] && j > i + 1) {
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          output.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          right--;
          left++;
        } else if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return output;
};

const nums = [1, -2, -5, -4, -3, 3, 3, 5];
// threeSum(nums);
console.log(fourSum(nums, -11));
