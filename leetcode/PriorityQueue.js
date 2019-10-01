class PriorityQueue  {
  constructor (limitLen) {
    this.queue = []
    this.limitLen = limitLen
    // this.size = this.size()
  }
  enqueue (val, weight) {
    if (this.isEmpty()) {
      this.queue.push({val, weight})
      return true
    }
    if (this.size() < this.limitLen) {
      this.insert(val, weight)
      return true
    } else if (this.size() === this.limitLen) {
      this.dequeue()
      this.insert(val, weight)
      return true
    }
    return false
  }
  insert (val, weight) {
    if (this.queue[this.size() - 1].weight > weight) {
      this.queue.push({val, weight})
      return true
    }
    for (let i = this.size() - 1; i >= 0; i--) {
      if (this.queue[i].weight >= weight) {
        this.queue.splice(i + 1, 0, {val, weight})
        return true
      }
    }
  }
  dequeue () {
    if (this.size() === 0) {
      return false
    }
    return this.queue.shift() 
  }
  size () {
    return this.queue.length
  }
  isEmpty () {
    return !this.queue.length
  }
  front () {
    return this.queue[0]
  }
  clear () {
    this.queue = []
  }
}

const queue = new PriorityQueue(3)
queue.enqueue(3, 5)
console.log(queue.queue)

queue.dequeue()
console.log(queue.queue)
