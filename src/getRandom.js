/**
 * 随机生成一定范围内的随机数
 * @min 最小值
 * @max 最大值
 * @decimal 保留位数(小数位末位为 0 则不显示)
 */

function getRandom (min, max, decimal = 0) {
  const range = max - min
  const random = Math.random()
  const place = Math.pow(10, decimal)
  const n = Math.round((min + random * range).toFixed(decimal) * place) / place
  return n
}

console.log(getRandom(1, 1000))