/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let value = this.map.get(key)

    if (this.map.has(key)) {
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
        let k = this.map.keys().next().value
        this.map.delete(k)
    }
};
