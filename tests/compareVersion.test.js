const compareVersion = require('../src/compareVersion')

describe('compareVersion', () => {
  test('0.1.1 more than 0.1.0', () => {
    expect(compareVersion('0.1.1', '0.1.0')).toEqual(1)
  })
  test('0.1.1 equals 0.1.1', () => {
    expect(compareVersion('0.1.1', '0.1.1')).toEqual(0)
  })
  test('0.1.1 less than 0.1.0', () => {
    expect(compareVersion('0.1.1', '1.1.0')).toEqual(-1)
  })
})