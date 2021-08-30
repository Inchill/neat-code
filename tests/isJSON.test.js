const isJSON = require('../src/isJSON')

let str = '<1. 活动对象：2021年7月16日至2021年7月31日\n活动期间每天可抽奖\n>',
  num = 1,
  flag = false,
  obj = {
    name: 'Mike'
  },
  arr = [1, 2, 3],
  undef = undefined,
  nil = null,
  symbol = Symbol(1)

describe('isJSON', () => {

  test('str is not json', () => {
    expect(isJSON(str)).toEqual(false)
  })

  test('str is json', () => {
    str = JSON.stringify(str)
    expect(isJSON(str)).toEqual(true)
  })

  test('num is not json', () => {
    expect(isJSON(num)).toEqual(false)
  })

  test('num is json', () => {
    num = JSON.stringify(num)
    expect(isJSON(num)).toEqual(true)
  })

  test('flag is not json', () => {
    expect(isJSON(flag)).toEqual(false)
  })

  test('flag is json', () => {
    flag = JSON.stringify(flag)
    expect(isJSON(flag)).toEqual(true)
  })

  test('obj is not json', () => {
    expect(isJSON(obj)).toEqual(false)
  })

  test('obj is json', () => {
    obj = JSON.stringify(obj)
    expect(isJSON(obj)).toEqual(true)
  })

  test('arr is not json', () => {
    expect(isJSON(arr)).toEqual(false)
  })

  test('arr is json', () => {
    arr = JSON.stringify(arr)
    expect(isJSON(arr)).toEqual(true)
  })

  test('nil is not json', () => {
    expect(isJSON(nil)).toEqual(false)
  })

  test('nil is json', () => {
    nil = JSON.stringify(nil)
    expect(isJSON(nil)).toEqual(true)
  })

  test('throws an error', () => {
    expect(() => {
      // Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      isJSON(undef)
    }).toThrow(new Error('JSON does not support undefined and symbol.'))
  })

  test('throws an error', () => {
    undef = JSON.stringify(undef)
    expect(() => {
      // Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      isJSON(undef)
    }).toThrow(new Error('JSON does not support undefined and symbol.'))
  })

  test('throws an error', () => {
    expect(() => {
      // Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      isJSON(symbol)
    }).toThrow(new Error('JSON does not support undefined and symbol.'))
  })

  test('throws an error', () => {
    symbol = JSON.stringify(symbol)
    expect(() => {
      // Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      isJSON(symbol)
    }).toThrow()
  })
})