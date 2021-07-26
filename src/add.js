const { add } = require('lodash')
/**
 * 两个大数相加
 * @param {string} a 
 * @param {string} b 
 */
function addBig (a = '0', b = '0') {
  // TODO: check operator exists.

  // transform to string.
  a = a.toString()
  b = b.toString()

  // get the max length
  const maxLen = Math.max(a.length, b.length)

  // pad zero at start to the variable a and b.
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)

  let ret = '',
    remainder = 0 // number carry to the next higher position

  // add the same position number.
  for (var i = maxLen - 1; i >= 0; i--) {
    const temp = parseInt(a[i]) + parseInt(b[i]) + remainder // each time should add the carry number to make the higher position result correct.
    remainder = Math.floor(temp / 10)
    ret = temp % 10 + ret
  }

  if (remainder) {
    ret = '1' + ret
  }

  return ret
}

console.log(addBig(55, 55))

console.log(add(+('5' + '0'.repeat(52)), +('5' + '0'.repeat(52))))

console.log(+('5' + '0'.repeat(52)) + +('5' + '0'.repeat(52)))

module.exports = addBig