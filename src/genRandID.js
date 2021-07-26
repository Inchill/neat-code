/**
 * Number.prototype.toString()有一个可选的参数radix，就是进制
 * radix：指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10。
 * 如果转换的基数大于10，则会使用字母来表示大于9的数字，比如基数为16的情况，则使用a到f的字母来表示10到15。
 * 实际上这个随机字符串并不安全，不能用于实际开发中。
 */

const getBrand = require("./getPhoneBrand")

function genRandID () {
  return Math.random().toString(36).substring(2)
}

console.log(genRandID())

module.exports = getBrand