function Fibonacci(n) {
  let a = 1,
    b = 1,
    res = null

  if (n === 0) {
    return 0
  }
  if (n <= 1) {
    return 1
  }

  for (let i = 2; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }

  return res
}
console.time('1')
console.log(Fibonacci(40))
console.timeEnd('1')


function f (n) {
  if (n <= 1) {
    return 1
  }
  return f(n - 1) + f(n - 2)
}
console.time('2')
console.log(f(40))
console.timeEnd('2')

function f2(n) {
  const a = Math.pow((1 + Math.sqrt(5)) / 2, n)
  const b = Math.pow((1 - Math.sqrt(5)) / 2, n)
  return Number.parseInt(1 / Math.sqrt(5) * (a - b))
}
console.time('3')
console.log(f2(41))
console.timeEnd('3')