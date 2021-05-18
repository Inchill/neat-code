
/**
 * 四舍五入，为 0 不显示
 * @param {*} n 一个数
 * @param {*} m 保留的位数
 */
function toFixed (n, m = 2) {
  if (typeof n !== 'number') {
    throw new Error('n is not a number')
  }
  const r = Math.round(Math.pow(10, m) * n) / Math.pow(10, m)
  return r
}

console.log(toFixed(1.4515, 3))

module.exports = toFixed