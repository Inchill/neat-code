const add = require('../src/add')

describe('add function', () => {
  test('55 plus 55 equals 110', () => {
    expect(add(55, 55)).toEqual('110')
  })

  test('5*10^53 plus 5*10^53 should equals 10^54', () => {
    expect(add('5' + '0'.repeat(52), '5' + '0'.repeat('52'))).toEqual('1' + '0'.repeat(53))
  })
})