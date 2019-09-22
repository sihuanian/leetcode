/* 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 4) {
    return nums.reduce((sum, curr) => sum + curr)
  }
  let result = Number.MAX_VALUE
  let sum
  
  nums = nums.sort((a, b) => a - b)
  // console.log(nums)
  for (let i = 0; i < nums.length - 2; i++) {
    sum = nums[i] + nums[i+1] + nums[i+2]
    // console.log(sum)
    // result = Math.min(sum - target, result)
    // Math.abs(sum - target) - 0
    // console.log(result)
    let chazhi = sum - target 
    if (chazhi <= 0) {
      result = 
    }
  }
  return sum
};





console.log(threeSumClosest([1,1,1,0], -100))