/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    /* let maxA = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            maxA = Math.max(maxA, (j-i)*Math.min(height[i], height[j]))
        }
    }
    return maxA */
    let maxA = 0,
        before = 0,
        after = height.length - 1

    for (let i = 0; i < height.length; i++) {
        maxA = Math.max(maxA, (after - before) * Math.min(height[after], height[before]))
        if (height[after] <  height[before]) {
            after--
        } else {
            before++
        }
    }
    return maxA
};


console.log(maxArea([1,0]))