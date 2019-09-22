// nums = [2, 7, 11, 15], target = 9
var twoSum = function(nums, target) {
  let map = new Map()
  for (const [k, i] of nums.entries()) {
    map.set(i, k)
  }
  for (const [i, v] of nums.entries()) {
    if (map.has(target-v) && map.get(target-v) != i) {
      return [i, map.get(target-v)]
    }
  }
}

console.log(twoSum([2,7,11,15],9))