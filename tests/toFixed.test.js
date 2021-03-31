const toFixed = require('../src/toFixed')

describe('toFixed', () => {
  test('0.00 reserve 2 digits should to be 0', () => {
    expect(toFixed(0.00)).toEqual(0)
  })

  test('0.01 reserve 2 digits should to be 0.01', () => {
    expect(toFixed(0.01)).toEqual(0.01)
  })

  test('0.10 reserve 2 digits should to be 0.1', () => {
    expect(toFixed(0.10)).toEqual(0.1)
  })

  test('0.15 reserve 2 digits should to be 0.15', () => {
    expect(toFixed(0.15)).toEqual(0.15)
  })

  test('0.95 reserve 0 digits should to be 0.95', () => {
    expect(toFixed(0.95, 0)).toEqual(1)
  })

  test('0.95 reserve 2 digits should to be 1', () => {
    expect(toFixed(0.955, 2)).toEqual(0.96)
  })

  test('0.95 reserve 2 digits should to be 1', () => {
    expect(toFixed(0.995, 2)).toEqual(1)
  })

  test('1.452 reserve 3 digits should to be 1.450', () => {
    expect(toFixed(1.452, 3)).toEqual(1.452)
  })
})