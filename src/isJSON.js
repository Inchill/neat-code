function isJSON(data = undefined) {
  const notSupportedTypes = ['undefined', 'symbol', 'function']
  if (notSupportedTypes.includes(typeof data)) throw new Error('JSON does not support undefined, symbol and function.')

  if (typeof data !== 'string') return false

  try {
    JSON.parse(data)
    return true
  } catch (e) {
    return false
  }
}

module.exports = isJSON