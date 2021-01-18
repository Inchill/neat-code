/**
 * 
 * @param {*} ua 
 * 根据手机浏览器 userAgent 判断是否是华为、小米、OPPO、vivo、iOS或者其他
 */
function getBrand (ua) {
  const list = [
    { key: /iphone/ig, brand: 'ios' },
    { key: /huawei|honor/ig, brand: 'huawei' },
    { key: /m.{7,8}c|mi.*?build/ig, brand: 'xiaomi' },
    { key: /p[a-zA-Z]{2}m[0-9]{1}0|oppo/ig, brand: 'oppo' },
    { key: /v[0-9]{4}[a-zA-Z]?a?|vivo/ig, brand: 'vivo' }
  ]
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (item.key.test(ua)) return item.brand
  }
  return 'other'
}
