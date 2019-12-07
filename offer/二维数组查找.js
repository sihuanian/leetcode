function Find(target, array)
{
  const res = flat(array)
  let i = res.find(item => item === target)
  if (i >= 0) {
    return true
  } else {
    return false
  }
}

function flat(array, depth = 1, stack = []) {
  for (let item of array) {
    if (item instanceof Array) {
      flat(item, depth - 1, stack)
    } else {
      stack.push(item)
    }
  }
  return stack
}

console.log(Find(5, [[1,2],[3,4],[5,6]]))
