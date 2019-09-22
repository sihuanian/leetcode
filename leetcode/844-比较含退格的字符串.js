/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let a = removeBackspace(S)
    let b = removeBackspace(T)
    return a === b
};

// 去掉#符
function removeBackspace (str) {
  while (str.indexOf('#') !== -1) {
    let index = str.indexOf('#')
    if (index !== 0) {
      str = str.replace(str.slice(index - 1, index + 1), '')
    } else if (index === 0) {
      str = str.replace(str.slice(0, 1), '')
    }
  }
  return str
}

console.log(backspaceCompare('a##c', '#a#c'))