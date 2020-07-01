// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.
 

// Constraints:

// 1 <= n <= 10 ^ 4
// - 10 ^ 5 <= nums[i] <= 10 ^ 5

nums1 = [4,2,1]
nums2 = [4,2,3]
nums3 = [3,4,2,3]

// const checkPossibility = (nums) => {
//   let count = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
//         nums[i] = nums[i - 1];
//       }
//       count++;
//     }
//     if (count > 1) {
//       return false;
//     }
//   }
//   return true;
// }

// const checkPossibility = (nums) => {
//   const left = nums.slice(0)
//     const right = nums.slice(0)
//     const i = nums.findIndex((a, i) => a > nums[i + 1])
//     if (~i) left.splice(i, 1)
//     if (~i) right.splice(i + 1, 1)
//     return !left.some((a, i) => a > left[i + 1]) || !right.some((a, i) => a > right[i + 1])
// }

// console.log(checkPossibility(nums1))
// console.log(checkPossibility(nums2))
// console.log(checkPossibility(nums3))



