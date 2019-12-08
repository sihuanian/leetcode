function replaceSpace(str)
{
  return str.replace(/ /g, '%20')
}
// module.exports = {
//     replaceSpace : replaceSpace
// };

console.log(replaceSpace('We are happy'))