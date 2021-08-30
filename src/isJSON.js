function isJSON(str = undefined) {
  const notSupportedTypes = ['undefined', 'symbol']
  if (notSupportedTypes.includes(typeof str)) throw new Error('JSON does not support undefined and symbol.')

  if (typeof str !== 'string') return false
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

module.exports = isJSON