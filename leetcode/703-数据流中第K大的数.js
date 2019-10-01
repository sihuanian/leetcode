var KthLargest = function(k, nums) {
  this.queue = []
  this.size = 0
  this._init(k, nums)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  
};

KthLargest.prototype._init = function(k, nums) {
  let i = 0
  while (this.size < k) {
    this.queue.push(nums[i])
    this.size++
    i++
  }
}

let obj = new KthLargest(3, [4,5,8,2])
console.log(obj.heap)
console.log(obj.add(3))
console.log(obj.add(5))
console.log(obj.add(10))
console.log(obj.add(9))
console.log(obj.add(4))