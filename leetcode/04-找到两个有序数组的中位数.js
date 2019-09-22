/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2]
    nums = nums.sort((a, b) => a - b)
    let middle = nums.length / 2,
        result
    
    if (!Number.isInteger(middle)) {
        result = nums[Math.trunc(middle)]
    } else {
        result = (nums[Math.trunc(middle)] + nums[Math.trunc(middle) - 1]) / 2
    }


    return result
};

console.log(findMedianSortedArrays([3], [-1, -2]))