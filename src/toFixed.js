
/**
 * rounding a number，if result is zero, do not show the decimal
 * @param {number} n
 * @param {number} m
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