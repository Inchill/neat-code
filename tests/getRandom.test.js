const getRandom = require('../src/getRandom')

const arr = []

for (var i = 1; i <= 100; i++) {
  arr.push(i)
}

describe('getRandom', () => {
  test('getRandom(1, 100)保留0位', () => {
    const r = getRandom(1, 100)
    const itHas = arr.includes(r)
    expect(itHas).toBeTruthy()
  })
})