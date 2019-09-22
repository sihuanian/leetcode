var lexicalOrder = function(n) {
    let arr = []
    for (let i = 1; i < 10; i++) {
      if (i <= n) {
        arr.push(i)
        add(arr, n, i)
      } else {
        break
      }
    }
    return arr
};

function add(arr, n, startNum) {
  startNum *= 10
  for (let i = 0; i < 10; i++, startNum++) {
    if (startNum <= n) {
      arr.push(startNum)
      add(arr, n, startNum)
    } else {
      return
    }
  }
}

console.log(lexicalOrder(13))