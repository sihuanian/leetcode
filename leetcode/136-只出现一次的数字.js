/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /* let map = new Map()
    
    nums.map((item) => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    })
    for (const m of map) {
        if (m[1] === 1) {
            return m[0]
        }
    } */
    
    let set = new Set()

    nums.map(item => {
        if (!set.has(item)) {
            set.add(item)
        } else {
            set.delete(item)
        }
    })
    
    return set.keys().next().value
};

console.log(singleNumber([2,2,1]))