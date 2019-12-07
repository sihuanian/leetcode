// 给定一个乱序数组要求寻找顺序排列后第k个元素是哪一个，并且时间复杂度要尽量的低

function kth(arr, k) {
  let flag = false
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }
    }

    if (!flag) {
      break
    }
    
  }
  return arr[k - 1]
}

let arr = kth([5,8,69,-4,56], 3) // 8
console.log(arr)